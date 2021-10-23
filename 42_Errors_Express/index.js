const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const morgan = require('morgan');
const methodOverride = require('method-override');
const AppError = require('./AppError');

app.use(morgan('tiny'));

mongoose
  .connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!');
  })
  .catch((err) => {
    console.log('OH NO MONGO CONNECTION ERROR!!!!');
    console.log(err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});
const verifyPW = (req, res, next) => {
  const { password } = req.query;
  if (password === 'pw') {
    next();
  }
  throw new AppError('password required', 401);
};

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/products/:id', async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new AppError('Product Not Found', 404));
  }
  res.render('products/show', { product });
});

app.get('/dogs', (req, res) => {
  res.send('WOOF');
});

app.get('/secret', verifyPW, (req, res) => {
  res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone');
});

app.get('/admin', (req, res) => {
  throw new AppError('Youre not an admin', 403);
});

const handleValidationErr = (err) => {
  console.dir(err);
  //In a real app, we would do a lot more here...
  return new AppError(`Validation Failed...${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name);
  //We can single out particular types of Mongoose Errors:
  if (err.name === 'ValidationError') err = handleValidationErr(err);
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong' } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log('APP Listening on 3000');
});

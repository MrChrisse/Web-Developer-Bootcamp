const express = require('express');
const app = express();
//const mongoose = require('mongoose');
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('tiny'));

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

app.get('/dogs', (req, res) => {
  res.send('WOOF');
});

app.get('/secret', verifyPW, (req, res) => {
  res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone');
});

app.get('/admin', (req, res) => {
  throw new AppError('Youre not an admin', 403);
});

app.use((req, res) => {
  res.status(404).send('NOT FOUND DUmb');
  next();
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong' } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log('APP Listening on 3000');
});

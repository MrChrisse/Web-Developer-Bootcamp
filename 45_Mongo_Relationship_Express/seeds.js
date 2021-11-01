const Product = require('./models/product');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Mongo CONNECTION OPENED');
  })
  .catch((err) => {
    console.log('A Mongo Error:');
    console.log(err);
  });

const p = new Product({
  name: 'grapefruit',
  price: 1.99,
  category: 'fruit',
});

p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });

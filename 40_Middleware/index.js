const express = require('express');
const app = express();
//const mongoose = require('mongoose');
const morgan = require('morgan');

app.use(morgan('common'));

const verifyPW = (req, res, next) => {
  const { password } = req.query;
  if (password === 'pw') {
    next();
  }
  res.send('Sorry, wrong password');
};

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/dogs', verifyPW, (req, res) => {
  res.send('WOOF');
});

app.use((req, res) => {
  res.send('Error 404, not found');
});

app.listen(3000, () => {
  console.log('APP Listening on 3000');
});

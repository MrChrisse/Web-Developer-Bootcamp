const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser('mysecret'));

app.get('/greet', (req, res) => {
  res.send('Hey there ' + req.cookies.name);
});

app.get('/setname', (req, res) => {
  res.cookie('name', 'stevie chicks');
  res.send('Sent you a cookie');
}); 

app.get('/getsignedcookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true });
  res.send('Got a signed cookie');
});

app.get('/verifyfruit', (req, res) => {
  console.log(req.cookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log('SERVING');
});

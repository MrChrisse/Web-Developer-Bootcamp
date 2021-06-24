const express = require('express');
const app = express();

app.use((req, res) => {
  console.log('WE GOT A REQUEST');
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});

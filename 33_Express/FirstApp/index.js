const express = require('express');
const app = express();

// app.use((req, res) => {
//   console.log('WE GOT A REQUEST');
//   res.send('Hello');
// });

app.get('/', (req, res) => {
  console.log('HOME REQUEST');
  res.send('Homepage!');
});

app.get('/r/:subreddit', (req, res) => {
  res.send('This is a subreddit with the Name: ' + req.params.subreddit);
});

app.post('/cats', (req, res) => {
  res.send('POST REQUEST');
});

app.get('/cats', (req, res) => {
  console.log('CAT REQUEST');
  res.send('Hello Cat lover!');
});

app.get('/dogs', (req, res) => {
  console.log('DOG REQUEST');
  res.send('Hello Dog lover!');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('Noting found if nothing searched');
  } else {
    console.log('DOG REQUEST');
    res.send(`Search results for ${q}`);
  }
});

app.get('*', (req, res) => {
  res.send('Dont know that path');
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});

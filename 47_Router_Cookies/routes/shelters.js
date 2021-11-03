const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('ALL SHELTERS');
});

router.get('/:id', (req, res) => {
  res.send('Viewing SHELTER');
});

router.get('/:id/edit', (req, res) => {
  res.send('Editing SHELTERS');
});

router.post('/', (req, res) => {
  res.send('CREATING SHELTERS');
});

module.exports = router;

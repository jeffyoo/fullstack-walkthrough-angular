const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
  res.send("We haven't implemented getting yet!");
})

router.post('/', (req,res) => {
  res.send("We haven't implemented posting yet!");
})

router.put('/', (req,res) => {
  res.send("We haven't implemented updating yet!");
})

router.put('/', (req,res) => {
  res.send("We haven't implemented deleting yet!");
})

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("ALL SHELTERS")
})
router.post('/', (req, res) => {
  res.send("CREATING SHELTER")
})
router.get('/:id', (req, res) => {
  res.send(`VIEWING THE ${req.params.id} SHELTER`)
})
router.get('/:id/edit', (req, res) => {
  res.send(`EDITING THE ${req.params.id} SHELTER`)
})

module.exports = router;
const express = require ('express');

const router = express.Router();

// index
router.get('/', (req, res)=>{
  res.send("elenco dei posts")
})
// show
router.get('/:id', (req, res)=>{
  res.send(`dettaglio del post con id ${req.params.id}`)
})
// create
router.post('/', (req, res)=>{
  res.send ('creazione di un nuovo post')
})
// update
router.put('/:id', (req, res)=>{
  res.send(`modifica del post con id ${req.params.id}`)
})
// delete
router.delete('/:id', (req, res)=>{
  res.send (`cancellazione del post con id ${req.params.id}`)
})

module.exports = router;
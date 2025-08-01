const express = require ('express');

const router = express.router();

// index
router.get('/posts', (req, res)=>{
  res.send("elenco dei posts")
})
// show
router.get('/posts/:id', (req, res)=>{
  res.send(`dettaglio del post con id ${req.params.id}`)
})
// create
router.post('/posts', (req, res)=>{
  res.send ('creazione di un nuovo post')
})
// update
router.put('/posts/:id', (req, res)=>{
  res.send(`modifica del post con id ${req.params.id}`)
})
// delete
router.delete('/posts/:id', (req, res)=>{
  res.send (`cancellazione del post con id ${req.params.id}`)
})

module.exports = router;
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res)=>{
  res.send('server del mio blog in ascolto')
})

// index
app.get('/posts', (req, res)=>{
  res.send("elenco dei posts")
})
// show
app.get('/posts/:id', (req, res)=>{
  res.send(`dettaglio del post con id ${req.params.id}`)
})
// create
app.post('/posts', (req, res)=>{
  res.send ('creazione di un nuovo post')
})
// update
app.put('/posts/:id', (req, res)=>{
  res.send(`modifica del post con id ${req.params.id}`)
})
// delete
app.delete('/posts/:id', (req, res)=>{
  res.send (`cancellazione del post con id ${req.params.id}`)
})

app.listen(port, ()=>{
  console.log(`server in ascolto alla porta ${port}`)
})

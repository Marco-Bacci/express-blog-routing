const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res)=>{
  res.send('server del mio blog in ascolto')
})



app.listen(port, ()=>{
  console.log(`server in ascolto alla porta ${port}`)
})

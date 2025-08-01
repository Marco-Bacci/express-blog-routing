const express = require('express');

const app = express();

const port = 3000;


// importo il file router 
const postRouter = require('./routers/posts.js')

app.get('/', (req, res)=>{
  res.send('server del mio blog in ascolto')
})

app.use('/posts', postRouter);

app.listen(port, ()=>{
  console.log(`server in ascolto alla porta ${port}`)
})

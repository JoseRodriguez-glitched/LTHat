const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/templates/verify.html');
});

server.listen(port, ()=>{
  console.log('Server running on port *:5000');
});


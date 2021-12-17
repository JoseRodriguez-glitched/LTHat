const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);


app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/templates/verify.html');
});

server.listen(5000, ()=>{
  console.log('Server running on port *:5000');
});


const express = require('express'); 
const cors = require('cors')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express(); 
const PORT =  process.env.VUE_PORT || 3000;

app.use(cors())

// Serving dist directory from this script's parent directory
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('*', express.static(path.join(__dirname, '..', 'dist')));

app.get("/status", (request, response) => {
    const status = {
       "status": "running"
    };
    response.send(status);
 });
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port " + PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);

// 'http' ** is a node module which is used for creating servers

// createServer ** is a method that created a server and it take an argument whish is a callback function 
//      this function which will give us access to request object and responce object
//      the req object comes loaded with informations about the request such as url , request type 
//      rhe res object is used to send responce to the user in the browser


// listen ** needs three arguments
    // fist argument -- port number 
    // second argument -- host name
    // therd argument -- a function that fires when we listen 


    //====================================================================================================================================//


const http = require('http');

const server = http.createServer((req , res) => {
    console.log('request made');
});

server.listen(3000,'localhost', () => {
    console.log('listening for request on port 3000')
});


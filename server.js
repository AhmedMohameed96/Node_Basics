
// 'http' ** is a node module which is used for creating servers

// createServer ** is a method that created a server and it take an argument whish is a callback function 
//      this function which will give us access to request object and responce object
//      the req object comes loaded with informations about the request such as url , request type 
//      rhe res object is used to send responce to the user in the browser


// listen ** needs three arguments
    // fist argument -- port number 
    // second argument -- host name
    // therd argument -- a function that fires when we listen 

// method setHeader ** is a method called to set header

// res. ** we are using responce object


// status code  ** describe the type of responce sent to the browser
    // 200 -- ok
    // 301 -- resource moved (permanent redirect)
    // 404 -- not found 
    // 500 -- internal server error
    // 100 range -- informational responses 
    // 200 range -- success codes
    // 300 range -- codes for redirect
    // 400 range -- user or client error codes
    // 500 range -- server error codes




    //====================================================================================================================================//


const http = require('http');
const fs = require('fs');

// const server = http.createServer((req , res) => {
//     console.log(req.url , req.method);

//     // set header content type
//         //example one
//         // res.setHeader('Content-Type','text/plain');   //==> content type send to the browser
//         // res.write('Hello Ahmed');                     //==> what the actioal content
//         // res.end();                                    //==> ending the responce that then send it to the browser
//         //so know if we start the server and refesh the page it will return a page with Hello Ahmed in the browser
    
//         //example two
//         // res.setHeader('Content-Type','text/html');   //==> content type send to the browser
//         // fs.readFile('./views/index.html', (err , data) =>{
//         //     if (err) {
//         //         console.log(err);
//         //         res.end();
//         //     }else{
//         //         // res.write(data);          //==> what the actioal content
//         //         // res.end();                //==> ending the responce that then send it to the browser
//         //         res.end(data);              //==> more clean way 
//         //     }
//         // })
// });



//routing
const server = http.createServer((req , res) => {
    console.log(req.url , req.method);
    res.setHeader('Content-Type','text/html');

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';     //normal path with success code
            res.statusCode = 200;
        break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
        break;                                  //a redirect route with permanent redirect
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('LOcation','/about');
            res.end();
        break;
    
        default:
            path += '404.html';
            res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err , data) =>{
        if (err) {
            console.log(err);
            res.end();
        }else{
            res.end(data);              
        }
    })

});




server.listen(3000,'localhost', () => {
    console.log('listening for request on port 3000')
});


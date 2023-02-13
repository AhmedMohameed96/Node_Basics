// createReadStream ** takes two arguments  
    // first argument - is a string and its a path of what we want to read data from through the stream
    // secoand argument - is an option object 

// createWriteStream ** takes one argument 
    // first argument - is a string and its a path of what we want to write data through the stream


//  pipe ** it must be from a readable stream to a writable one , it will take data from readingstream and put it in writable stream

// encoding: 'utf8' ** is to encode data as it comes in and automatically be in readable form therefore we dont have to use toString() method

// .on ** event lisener

    //====================================================================================================================================//

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');   //if not exist, it will create one

// //defult way 
// readStream.on('data', (chunk) => {
//     //read stream
//     console.log('--------- New Chunk ---------');
//     console.log(chunk);

//     //write stream
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });


//more cleaning way
//piping
readStream.pipe(writeStream);
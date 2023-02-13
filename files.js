// fs ** stands for file system
// readFile is a async method -------------------------

// how to run it ** in terminal (node files) to read files.js file 

// Buffer ** ist a packge of data that send to us when we read a file of data 
// toString method ** is to convert buffer to string


// readFile ** takes to arguments  
    // first argument - is a string and its a path of what we want to read 
    // secoand argument - is a function that will be fired when readFile is complete (callback function)

// writeFile ** takes three arguments
    // first argument - is a string and its a path of what we want to write in 
    // secoand argument - is the text we want to write into this file 
    // therd argument - is a function that will be fired when writeFile is complete (callback function)

// mkdir ** takes two arguments
    // first argument - is a string and its a path of the new directory that you want 
    // secoand argument - is a function that will be fired when mkdir is complete (callback function)

// rmdir ** takes two arguments
    // first argument - is a string and its a path of the directory that you want to delete
    // secoand argument - is a function that will be fired when rmdir is complete (callback function)
    

// unlink ** takes two arguments
    // first argument - is a string and its a path of the file that you want to delete
    // secoand argument - is a function that will be fired when unlink is complete (callback function)

    //====================================================================================================================================//


const fs = require('fs');
//unhash function to run


//readings files
// fs.readFile('./docs/blog1.txt', (err , data ) =>  {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// //writing files
// fs.writeFile('./docs/blog1.txt' , 'Hello World' , () =>{     //existed file
//     console.log('File was Written');
// });

// fs.writeFile('./docs/blog2.txt' , 'Hello World' , () =>{     //if ist not an existed file it will create one
//     console.log('File was Written');
// });



//directories
// if (!fs.existsSync('./assets')) {       // existsSync ** check if someting exists
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         } 
//         console.log('Folder Created')
//     });    
// }else{
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         } 
//         console.log('Folder Deleted')
//     });    
// }


//deleting files
// if (fs.existsSync('./docs/blog2.txt')) {
//     fs.unlink('./docs/blog2.txt', (err) => {
//         if (err) {
//             console.log(err);
//         } 
//         console.log('Folder Deleted')
//     });
// }
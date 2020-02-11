const fs = require('fs');
const path = require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{},err =>{
//     if (err){
//         console.log("error occured")
//     }
//         console.log("folder created")
// });

//create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello world!',
//         err => {
//     if (err) throw err;
//     console.log("File created and written to...");
//
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),
//         'i love Node.js',
//         err1 => {
//         if (err1) throw err1;
//             console.log("file wriiten to...")
//         })
// });

//read file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
    if (err) throw err;

    console.log(data)
});

//rename file

fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloWorld.txt'),(err) => {
    if (err) throw err;

    console.log("file renamed")
});
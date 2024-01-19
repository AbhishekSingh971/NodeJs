const fs = require('fs');

fs.writeFile('read.txt',"this is for asyncronous programming lfjalsjdflajl :) ", (error)=>{
    console.log("files is created");
});

fs.appendFile('read.txt', " this is for append the text",(err)=>{
    console.log("file is appended");
});

fs.readFile('read.txt',"utf8",(err,data)=>{
    console.log(data.toString());
});
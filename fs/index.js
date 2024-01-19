//REPL 
// 1: js Expressios
// 2: use variables
// 3: Multiline code
// 4: use (_) to get the last line
// 5: we can use editor mode


const fs = require("fs");

fs.mkdirSync('./newOne')

fs.writeFileSync('./newOne/read.txt', JSON.stringify([{
    "name": "abhishek",
    "age": 12,
    "profile": "web devlopment",
},
{
    "name": "abhishek",
    "age": 12,
    "profile": "web devlopment",
}
]));

fs.appendFileSync('./newOne/read.txt',JSON.stringify([{
    "name": "abhishek",
    "age": 13,
    "profile": "App developer"}
]));

// fs.renameSync("read.txt", "readWrite.txt");

// this is for encoded data
const data = fs.readFileSync('./newOne/read.txt','utf8')

// const data = fs.readFileSync('./newOne/read.txt','utf8').toString()
console.log(data);

fs.unlinkSync('./newOne/read.txt');
fs.rmdirSync('./newOne');


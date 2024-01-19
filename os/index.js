const os = require('os');

console.log(os.arch());// info for achitecture like 32bit or 64 bit etc..
console.log(os.cpus());// infor for cpu with nice(priority)
console.log(os.getPriority());
console.log(os.hostname());
console.log(os.platform())
console.log(`${(os.freemem()/1024/1024/1024).toFixed(3)} GB`);
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.type());
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.version());
console.log(os.machine());
console.log(os.tmpdir()); // you can get a location of temp directory in userName/local/temp
console.log(`${(os.totalmem()/1024/1024/1024).toFixed(3)} GB`); //used to get the amount of total system memory (RAM) in bytes 
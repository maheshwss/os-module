const os = require('os');

console.log("Processor: ",os.arch());
console.log("Available Memory (RAM): ",os.freemem()/(1024*1024*1024));
console.log("Total Memory (RAM): ",os.totalmem()/(1024*1024*1024));

console.log("Computer name: ",os.hostname());
console.log("Platfrom name: ",os.platform());

console.log(os.userInfo());

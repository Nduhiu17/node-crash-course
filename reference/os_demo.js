const os = require('os');

//platform
console.log(os.platform());

//cpu architecture

console.log(os.arch());

console.log(os.cpus());


//free memory
console.log(os.freemem());
console.log(os.totalmem());


//home directory
console.log(os.homedir());
console.log(os.uptime());
console.log(os.hostname());

const os = require("os");

console.log(`Platform : ${os.platform()}`);
console.log(`Architecture : ${os.arch()}`);
console.log(`CPU : ${os.cpus().length}`);
console.log(`Total Memory : ${os.totalmem() / 1024 / 1024 / 1024} GB`);

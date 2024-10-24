const { exec } = require("child_process");
const cmd = "ls -la";
exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.log(`에러 발생 : ${err}`);
  }
  console.log(stdout);
});

const fs = require("fs");
fs.readFile("hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(`data : ${data}`);
});

// 가독성 때문에 readFileSync로 쓰면 좋다.
try {
  const data = fs.readFileSync("hello.txt", "utf-8");
  console.log(`readFileSync data : ${data}`);
} catch (err) {
} finally {
}

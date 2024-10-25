const fs = require("fs");
const result = fs.readFileSync("test.json");
const { data } = JSON.parse(result);

data.forEach((post) => {
  console.log(`제목 : ${post.title}`);
  console.log(`내용 : ${post.content}`);
});

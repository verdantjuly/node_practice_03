const { makeFile } = require("./ch03_07");
const count = 10;

let posts = Array.from({ length: count }, (v, index) => {
  return {
    title: `${index}번째 제목`,
    content: `${index}번째 내용입니다.`,
    author: `${index}번째 저자`,
  };
});

console.log(posts);
const data = { data: posts };
const result = JSON.stringify(data);
makeFile("test2.json", result);

const http = require("http");
const url = require("url");
const fs = require("fs");

const fileName = "test2.json";
const fileData = fs.readFileSync(fileName, "utf-8");
const { data } = JSON.parse(fileData);

const result = data.map(
  (item, index) => `
                <div style="border:1px solid black; padding:10px; margin:10px;" onclick='window.location.href="http://localhost:4500/posts/${index}"'>
                    <h1>${item.title}</h1>
                    <p>${item.content}</p>
                    <span>${item.author}</span>
                </div>`
);

http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    if (path == "/") {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.end(result.join(""));
    } else if (path.includes("/posts")) {
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      const pathArray = path.split("/");
      res.end(result[pathArray[pathArray.length - 1]]);
    }
  })
  .listen(4500);

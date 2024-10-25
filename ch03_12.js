const http = require("http");
const url = require("url");
const fs = require("fs");
http
  .createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    if (path == "/json") {
      res.setHeader("Content-Type", "application/json;charset=UTF-8");
      const data = {
        name: "lee",
        age: 40,
        address: "서울시 양천구 신림동",
      };
      const result = JSON.stringify(data);
      res.end(result);
    } else if (path == "/test") {
      res.setHeader("Content-Type", "application/json;charset=UTF-8");
      const fileName = "test2.json";
      const fileData = fs.readFileSync(fileName, "utf-8");
      res.end(fileData);
    }
  })
  .listen(4500);

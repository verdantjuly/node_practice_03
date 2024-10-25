const fs = require("fs");
const path = require("path");

const newFilePath = path.join(__dirname, "a3", "b3", "c3", "d3.txt");
console.log(newFilePath);
console.log(path.parse(newFilePath).dir); // path를 파싱해서 dir까지만
console.log(path.parse(newFilePath).base); // full path

const makeFile = (filepath, content) => {
  const fileName = path.parse(filepath).base;
  const dirPath = path.parse(filepath).dir;
  const isDirExist = fs.existsSync(dirPath);
  if (!isDirExist && dirPath) {
    console.log("디렉터리가 존재하지 않습니다. 디렉터리를 생성합니다.");
    fs.mkdirSync(dirPath, { recursive: true });
  }
  if (fileName.includes(".")) {
    fs.writeFileSync(filepath, content);
  }
};

makeFile(newFilePath, "새로운 파일이 생성되었습니다.");

module.exports.makeFile = makeFile;

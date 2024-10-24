const fs = require("fs");

const dirName = "naver/daum/google";

// recursive : parent 폴더 생성 여부
fs.mkdirSync(dirName, { recursive: true });

const content = `안녕하세요 네이버
구글 
다음 중에 하나에 입사하고 싶어용`;

// 문제
// naver/daum/google/out.txt 에 content를 넣어 주세요
try {
  const isDirExist = fs.readdirSync(dirName);
  if (isDirExist) {
    console.log("디렉터리가 존재합니다.");
  }
  const fileName = "out.txt";
  fs.readFile(dirName + "/" + fileName, (err, data) => {
    if (err && err.message.includes("ENOENT")) {
      console.log("파일이 존재하지 않습니다. 파일을 새로 씁니다.");
    }
    if (data) {
      console.log("파일이 존재합니다. 파일을 덮어씁니다.");
    }
  });
  fs.writeFile(dirName + "/" + fileName, content, (err) => {
    if (!err) {
      console.log("파일 작성이 완료되었습니다.");
    }
  });
} catch (err) {
  console.log(`에러 발생 : ${err}`);
} finally {
}

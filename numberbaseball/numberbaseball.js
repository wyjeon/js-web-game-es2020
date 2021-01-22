const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

let count = 0;
let numbers = [];
for (let n = 0; n <= 9; n++) {
  numbers.push(n);
}
let answer = [];

for (let n = 0; n <= 3; n++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}

check.addEventListener("click", () => {
  const value = input.value;
  if (value && value.length === 4) {
    //&& 엠퍼샌드 AND연산자 보호연산자
    if (answer.join("") === value) {
      logs.appendChild(document.createTextNode("Home Run~"));
      /*
        배열은 객체이다. 
        같은 빈 배열지라도, [] === []
        비교를 하면 false이기 때문에
        문자열을 배열(객체)로 바꿔 비교하는 것 보다
        배열(객체)을 문자열로 바꿔 비교하는게 좋다.
      */
    } else {
      let strike = 0;
      let ball = 0;
      for (const [aIndex, aNumber] of answer.entries()) {
        for (const [iIndex, iString] of input.value.split("").entries()) {
          if (aNumber === Number(iString)) {
            if (aIndex === iIndex) {
              strike++;
            } else {
              ball++;
            }
          }
        }
      }
      const message = document.createTextNode(
        `${input.value}: ${strike}S ${ball}B`
      );
      logs.appendChild(message);
      logs.appendChild(document.createElement("br"));
      if (count > 10) {
        logs.appendChild(
          document.createTextNode(`Game Over: ${answer.join("")}`)
        );
      } else {
        count++;
      }
    }
  }
  console.log(answer);
});

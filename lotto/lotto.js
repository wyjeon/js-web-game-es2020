const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1); //Method Chaining

const shuffle = [];
while (candidate.length > 0) {
  //Fisher-Yates Shuffle
  const random = Math.floor(Math.random() * candidate.length);
  const value = candidate.splice(random, 1)[0];
  shuffle.push(value);
}

const winBall = shuffle.slice(0, 6).sort((p, c) => {
  // sort시 사전순으로 정렬
  return p - c; // return 하는 값이 0보다 크면 자리를 바꾸고, 작으면 그대로이다. 내림차순은 c-p
});
const bonus = shuffle[6];

function colorize(number, tag) {
  if (number <= 10) {
    tag.style.backgroundColor = "red";
  } else if (number <= 20) {
    tag.style.backgroundColor = "orange";
  } else if (number <= 30) {
    tag.style.backgroundColor = "yellow";
  } else if (number <= 40) {
    tag.style.backgroundColor = "skyblue";
  } else {
    tag.style.backgroundColor = "green";
  }
}

const resultTag = document.querySelector("#result");
winBall.forEach((number, index) => {
  setTimeout(() => {
    const ball = document.createElement("div");
    ball.className = "ball";
    colorize(number, ball);
    ball.textContent = number;
    resultTag.appendChild(ball);
  }, 1000 * (index + 1));
});
// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     const ball = document.createElement("div");
//     ball.className = "ball";
//     colorize(winBall[i], ball);
//     ball.textContent = winBall[i];
//     resultTag.appendChild(ball);
//   }, 1000 * (i + 1));
// }

setTimeout(() => {
  const bonusTag = document.querySelector(".bonus");
  const bonusBall = document.createElement("div");
  bonusBall.className = "ball";
  colorize(bonus, bonusBall);
  bonusBall.textContent = bonus;
  bonusTag.appendChild(bonusBall);
}, 7000);

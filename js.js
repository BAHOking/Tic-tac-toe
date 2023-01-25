let NumId = 1;
let pointX = 0;
let pointO = 0;
let winnerX = false;
let winnerO = false;
let endGame = false;

let point = document.querySelector(".point");
let items = document.querySelectorAll(".item");
let bottonReset = document.querySelector(".button__reset");
let resetPoints = document.querySelector(".reset__points");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", addXO);
}

function addXO(event) {
  let divItem = event.target.closest("div");

  if (
    divItem &&
    divItem.innerHTML === "" &&
    NumId % 2 !== 0 &&
    endGame === false
  ) {
    divItem.innerHTML = "X";
    divItem.style.color = "blue";
  }

  if (
    divItem &&
    divItem.innerHTML === "" &&
    NumId % 2 === 0 &&
    endGame === false
  ) {
    divItem.innerHTML = "O";
    divItem.style.color = "yellow";
  }

  NumId++;

  colorGold();
  gameOverCheck(divItem);

  if (NumId === 11) {
    reset();
  }
}

function colorGold() {
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        items[arr[j][0]].innerHTML === "X" &&
        items[arr[j][1]].innerHTML === "X" &&
        items[arr[j][2]].innerHTML === "X"
      ) {
        items[arr[j][0]].style.backgroundColor = "gold";
        items[arr[j][1]].style.backgroundColor = "gold";
        items[arr[j][2]].style.backgroundColor = "gold";
        winnerX = true;
      }

      if (
        items[arr[j][0]].innerHTML === "O" &&
        items[arr[j][1]].innerHTML === "O" &&
        items[arr[j][2]].innerHTML === "O"
      ) {
        items[arr[j][0]].style.backgroundColor = "gold";
        items[arr[j][1]].style.backgroundColor = "gold";
        items[arr[j][2]].style.backgroundColor = "gold";
        winnerO = true;
      }
    }
  }
}

function gameOverCheck(divItem) {
  if (divItem.style.backgroundColor === "gold" && endGame === false) {
    endGame = true;
    NumId = NumId + (11 - NumId) - 1;

    scoringPoints();
  }
}

function scoringPoints() {
  if (winnerX === true) {
    ++pointX;
  }

  if (winnerO === true) {
    ++pointO;
  }

  point.innerHTML = `X: ${pointX} || O: ${pointO}`;
}

bottonReset.addEventListener("click", reset);

function reset() {
  for (let elem of items) {
    elem.innerHTML = "";
    elem.style.backgroundColor = "rgb(41, 41, 41)";
  }

  NumId = 1;
  winnerX = false;
  winnerO = false;
  endGame = false;
}

resetPoints.addEventListener("click", function resetPoints() {
  pointX = 0;
  pointO = 0;
  point.innerHTML = `X: ${pointX} || O: ${pointO}`;
});

let title = document.getElementById("title");
let v = "x";
let squares = [];
function ending(num1, num2, num3) {
  title.innerHTML = `${squares[num1].innerHTML} is Winner Game`;
  squares[num1].style.background = "#000";
  squares[num2].style.background = "#000";
  squares[num3].style.background = "#000";
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    window.location.reload();
  }, 4000);
}
function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i);
  }
  if (
    squares[1].innerHTML == squares[2].innerHTML &&
    squares[2].innerHTML == squares[3].innerHTML &&
    squares[1].innerHTML != ""
  ) {
    ending(1, 2, 3);
  } else if (
    squares[4].innerHTML == squares[5].innerHTML &&
    squares[5].innerHTML == squares[6].innerHTML &&
    squares[4].innerHTML != ""
  ) {
    ending(4, 5, 6);
  } else if (
    squares[7].innerHTML == squares[8].innerHTML &&
    squares[8].innerHTML == squares[9].innerHTML &&
    squares[7].innerHTML != ""
  ) {
    ending(7, 8, 9);
  } else if (
    squares[1].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[7].innerHTML &&
    squares[1].innerHTML != ""
  ) {
    ending(1, 4, 7);
  } else if (
    squares[2].innerHTML == squares[5].innerHTML &&
    squares[5].innerHTML == squares[8].innerHTML &&
    squares[2].innerHTML != ""
  ) {
    ending(2, 5, 8);
  } else if (
    squares[3].innerHTML == squares[6].innerHTML &&
    squares[6].innerHTML == squares[9].innerHTML &&
    squares[3].innerHTML != ""
  ) {
    ending(3, 6, 9);
  } else if (
    squares[1].innerHTML == squares[5].innerHTML &&
    squares[5].innerHTML == squares[9].innerHTML &&
    squares[1].innerHTML != ""
  ) {
    ending(1, 5, 9);
  } else if (
    squares[3].innerHTML == squares[5].innerHTML &&
    squares[5].innerHTML == squares[7].innerHTML &&
    squares[3].innerHTML != ""
  ) {
    ending(3, 5, 7);
  }
}
function writers(id) {
  element = document.getElementById(id);
  if (v === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    title.innerHTML = "X";
    v = "o";
  } else if (v === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    title.innerHTML = "O";
    v = "x";
  }
  winner();
}

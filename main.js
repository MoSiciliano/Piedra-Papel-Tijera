let pointsUser = 0;
let counterPc = 0;

let instruction = document.querySelector("#instruction");
let containerCounterUser = document.querySelector("#counter--user");
let containerCounterPc = document.querySelector("#counter--computer");
let containerTools = document.querySelector(".container--tools");
let btnTool = document.querySelectorAll(".tool");
let btnRestart = document.querySelector("#btn--restart");

let plusPoint = document.querySelector("#plus--one");

let containerResults = document.querySelector("#container--results");
let containerChoiceUser = document.querySelector("#choice--user");
let containerChoicePc = document.querySelector("#choice--computer");

//INICIO DEL JUEGO POR PRIMERA VEZ
btnTool.forEach((boton) => {
  boton.addEventListener("click", startPlay);
});

function startPlay(e) {
  let choiceComputer = Math.floor(Math.random() * 3);
  let choiceUser = e.currentTarget.id;
  if (choiceComputer === 0) {
    choiceComputer = "piedra✊";
  } else if (choiceComputer === 1) {
    choiceComputer = "papel🤚";
  } else if (choiceComputer === 2) {
    choiceComputer = "tijera✌️";
  }

  /* veces que gana la computadora*/

  if (
    (choiceUser === "piedra✊" && choiceComputer === "tijera✌️") ||
    (choiceUser === "tijera✌️" && choiceComputer === "papel🤚") ||
    (choiceUser === "papel🤚" && choiceComputer === "piedra✊")
  ) {
    winUser();
  } else if (
    (choiceComputer === "piedra✊" && choiceUser === "tijera✌️") ||
    (choiceComputer === "tijera✌️" && choiceUser === "papel🤚") ||
    (choiceComputer === "papel🤚" && choiceUser === "piedra✊")
  ) {
    winComputer();
  } else {
    empate();
  }
  containerResults.classList.remove("disabled");
  containerChoiceUser.innerText = choiceUser;
  containerChoicePc.innerText = choiceComputer;
  if (counterPc === 5 || pointsUser === 5) {
    if (counterPc === 5) {
      instruction.innerText = `😒La computadora gana el juego😒`;
    }
    if (pointsUser === 5) {
      instruction.innerText = `🥳¿Tu ganas el juego!🥳`;
    }
    containerTools.classList.add("disabled");
    btnRestart.classList.remove("disabled");
    btnRestart.addEventListener("click", restartGame);
  }
}

function winUser() {
  pointsUser++;
  containerCounterUser.innerText = pointsUser;
  plusPoint.innerText = "Tu ganas un punto🥳";
}
function winComputer() {
  counterPc++;
  containerCounterPc.innerText = counterPc;
  plusPoint.innerText = "La computadora gana un punto😒";
}

function empate() {
  plusPoint.innerText = "Empate🤨";
}

function restartGame() {
  btnRestart.classList.add("disabled");
  containerTools.classList.remove("disabled");
  containerResults.classList.add("disabled");
  counterPc = 0;
  pointsUser = 0;
  containerCounterPc.innerText = counterPc;
  containerCounterUser.innerText = pointsUser;
  instruction.innerText = "El juego consiste en llegar a 5 puntos para ganar!";
}

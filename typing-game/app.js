window.addEventListener("load", init);
let timeLeft;

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

function init() {
  let settingBtn = document.getElementById("settings");
  settingBtn.addEventListener("click", () => {
    let topBar = document.getElementById("top-bar");
    topBar.classList.toggle("open");
  });

  let reload = document.getElementById("reload");
  reload.addEventListener("click", onClickReload);

  let inputDomEl = document.getElementById("text-box");
  inputDomEl.addEventListener("input", onInput);
}

//on Reload
function onClickReload() {
  let gameOverCon = document.getElementById("game-over-con");
  gameOverCon.classList.remove("show");

  //restart the time and score
  let inputDom = document.getElementById("text-box");
  inputDom.value = "";
  document.getElementById("text-box").focus();

  let score = document.getElementById("score");
  score.textContent = 0;

  //to set the time 10 sec
  let timeDomEl = document.getElementById("time");
  timeDomEl.textContent = 10;

  //get random value
  getRandomWord();

  timeLeft = setInterval(toSetTime, 1000);
}

function toSetTime() {
  let timeDomEl = document.getElementById("time");
  timeDomEl.textContent--;
  if (timeDomEl.textContent == 0) {
    clearInterval(timeLeft);

    let gameOverCon = document.getElementById("game-over-con");
    gameOverCon.classList.add("show");

    let finalScore = document.getElementById("final-score");
    let score = document.getElementById("score");
    finalScore.textContent = score.textContent;
  }
}

//get random word
function getRandomWord() {
  let wordContainer = document.getElementById("word-con");
  const randomWord = words[Math.floor(Math.random() * words.length)];

  wordContainer.textContent = randomWord;
}

function onInput() {
  let inputDomValue = document.getElementById("text-box").value;
  let wordContainerValue = document.getElementById("word-con").textContent;
  if (inputDomValue == wordContainerValue) {
    let score = document.getElementById("score");
    let inputDom = document.getElementById("text-box");
    score.textContent++;
    inputDom.value = "";
    getRandomWord();
    toIncreaseTime();
  }
}

function toIncreaseTime() {
  let timeDomEl = document.getElementById("time");
  let selectLevelDomEl = document.getElementById("level");

  switch (selectLevelDomEl.value) {
    case "easy":
      timeDomEl.textContent = parseInt(timeDomEl.textContent) + 6;
      break;
    case "meadium":
      timeDomEl.textContent = parseInt(timeDomEl.textContent) + 4;
      break;
    case "hard":
      timeDomEl.textContent = parseInt(timeDomEl.textContent) + 2;
      break;
    default:
      timeDomEl.textContent = parseInt(timeDomEl.textContent) + 6;
  }
}

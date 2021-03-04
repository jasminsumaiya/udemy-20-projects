window.addEventListener("load", init);

const imgDataList = [
  {
    image: "./assets/thirsty.jpeg",
    text: "I'm Thirsty",
  },
  {
    image: "./assets/hungry.jpeg",
    text: "I'm Hungry",
  },
  {
    image: "./assets/tired.jpeg",
    text: "I'm Tired",
  },
  {
    image: "./assets/hurt.jpeg",
    text: "I'm Hurt",
  },
  {
    image: "./assets/happy.jpeg",
    text: "I'm Happy",
  },
  {
    image: "./assets/angry.jpeg",
    text: "I'm Angry",
  },
  {
    image: "./assets/sad.jpeg",
    text: "I'm Sad",
  },
  {
    image: "./assets/scared.jpeg",
    text: "I'm Scared",
  },
  {
    image: "./assets/outside.jpeg",
    text: "I Want To Go Outside",
  },
  {
    image: "./assets/home.jpeg",
    text: "I Want To Go Home",
  },
  {
    image: "./assets/school.jpeg",
    text: "I Want To Go To School",
  },
  {
    image: "./assets/grandma.jpeg",
    text: "I Want To Go To Grandmas",
  },
];

const message = new SpeechSynthesisUtterance();
let voiceList;

function init() {
  imgDataList.forEach(renderImg);
  let textBox = document.getElementById("text-box");

  let toggleBtn = document.getElementById("toggle-btn");
  toggleBtn.addEventListener("click", () => {
    textBox.classList.add("show");
  });

  let closeBtn = document.getElementById("close");
  closeBtn.addEventListener("click", () => {
    textBox.classList.remove("show");
  });

  //text-plot
  let textPlot = document.getElementById("text-plot");
  let readBtn = document.getElementById("read-btn");
  readBtn.addEventListener("click", () => {
    setTextMessage(textPlot.value);
    speakText();
  });

  let voiceData = setSpeech();
  voiceData
    .then((voices) => {
      getVoices(voices);
      voiceList = voices;
      //console.log(voiceList);
    })
    .catch((err) => {
      console.log(err);
    });

  let selectDomEl = document.getElementById("voices");
  selectDomEl.addEventListener("change", (e) => {
    message.voice = voiceList.find((voice) => voice.name === e.target.value);
  });
}

//render image
function renderImg(imgData) {
  let imgContainer = document.getElementById("img-container");

  let imgBox = document.createElement("div");
  let { image, text } = imgData;
  imgBox.classList.add("img-box");

  imgBox.innerHTML = `<img src=${image} alt=${text} /><p class="info">${text}</p>`;
  imgContainer.appendChild(imgBox);

  imgBox.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    imgBox.classList.add("active");
    setTimeout(() => imgBox.classList.remove("active"), 1000);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

//get select box voices and render
function getVoices(voices) {
  let voiceDomEl = document.getElementById("voices");

  //let voices = speechSynthesis.getVoices();
  voiceDomEl.innerHTML = voices
    .map((voice) => {
      return `<option value=${voice.name}>${voice.name} ${voice.lang}</option>`;
    })
    .join(" ");
}

function setSpeech() {
  return new Promise((resolve, reject) => {
    let id = setInterval(() => {
      if (window.speechSynthesis.getVoices().length !== 0) {
        resolve(window.speechSynthesis.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
}

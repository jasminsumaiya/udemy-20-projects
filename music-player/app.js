
window.addEventListener('load', init);
let onPlay = false;

function init() {
    let audio = document.getElementById("my-audio");
    audio.addEventListener("timeupdate", updateProgress);

    let backward = document.getElementById("backward");
    let forward = document.getElementById("forward");

    let play = document.getElementById("play");
    play.addEventListener('click', () => {
        toggleAudioStatus();
        updatePlayIcon();
        showProgressBar();
        rotateImage();
    });
}

//audio play and pause
function toggleAudioStatus() {
    let audio = document.getElementById("my-audio");

    if (onPlay == false) {
        audio.play();
        onPlay = true;
    } else {
        audio.pause();
        onPlay = false;
    }
}

//change play and pause icone
function updatePlayIcon() {
    const play = document.getElementById("play");

    if (onPlay) {
        play.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>`;
    } else {
        play.innerHTML = `<i class="fa fa-play" aria-hidden="true">`;
    }
}

// show and hide progressBar
function showProgressBar() {
    let progressBar = document.getElementById("progress");

    if (onPlay) {
        progressBar.classList.add("on-play");
    } else {
        progressBar.classList.remove("on-play");
    }
}

// rotate image
function rotateImage() {
    let imageDiv = document.getElementById("image");

    if (onPlay) {
        imageDiv.classList.add("img-rotate");
    } else {
        imageDiv.classList.remove("img-rotate");
    }
}

//update progress bar value
function updateProgress() {
    const progress = document.getElementById('progress-bar');
    const audio = document.getElementById("my-audio");

    progress.value = (audio.currentTime / audio.duration) * 100;
}

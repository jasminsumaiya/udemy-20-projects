
window.addEventListener('load', init);
let onPlay = false;

let musicLabelList = ["1.hey", "2.summer", "3.ukulele"];
let musics = ["assets/musics/hey.mp3", "assets/musics/summer.mp3", "assets/musics/ukulele.mp3"];
let images = ["assets/images/hey.jpg", "assets/images/summer.jpg", "assets/images/ukulele.jpg"];
let activeMusicIndex = 0;

function init() {
    let audio = document.getElementById("my-audio");
    audio.addEventListener("timeupdate", updateProgress);

    let backward = document.getElementById("backward");
    backward.addEventListener("click", onClickBackward);

    let forward = document.getElementById("forward");
    forward.addEventListener("click", onClickForward);

    let play = document.getElementById("play");
    play.addEventListener('click', onPlayClick);
}

function onPlayClick() {
        toggleAudioStatus();
        updatePlayIcon();
        showProgressBar();
        rotateImage();
}

//audio play and pause
function toggleAudioStatus() {
    let audio = document.getElementById("my-audio");

    if (onPlay == false) {
        audio.play();
        onPlay = true;
        let musicLabelDom = document.getElementsByTagName("p")[0];
        musicLabelDom.textContent = musicLabelList[activeMusicIndex];
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
    let imageDiv = document.getElementById("music-image");

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

//on click Backward
function onClickBackward() {
    activeMusicIndex --;
    if(activeMusicIndex < 0){
        activeMusicIndex = musics.length - 1;
    } 
    
    updatePlayList();
}

//on click Forward
function onClickForward() {
    activeMusicIndex ++; 
    if(activeMusicIndex > musics.length - 1){
        activeMusicIndex = 0
    } 
    
    updatePlayList();
}

// update music and image
function updatePlayList() {
    const audio = document.getElementById("my-audio");
    if (onPlay) {
        audio.currentTime = 0;
        audio.pause();
    }

    const audioSourceDom = document.getElementById("mp3-source");
    audioSourceDom.src = musics[activeMusicIndex];
    const imageDom = document.getElementById("music-image");
    imageDom.src = images[activeMusicIndex];

    onPlay = false;
    showProgressBar();
    audio.load();
    onPlayClick();
}

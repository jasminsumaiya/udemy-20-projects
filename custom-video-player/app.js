window.addEventListener('load', init);

function init() {
  const video = document.getElementById('video');
  video.muted = false;
  const play = document.getElementById('play');
  const stop = document.getElementById('stop');
  const progress = document.getElementById('progress');

  video.addEventListener('click', toggleVideoStatus);
  video.addEventListener('pause', updatePlayIcon);
  video.addEventListener('play', updatePlayIcon);
  video.addEventListener('timeupdate', updateProgress);

  play.addEventListener('click', toggleVideoStatus);
  stop.addEventListener('click', stopVideo);
  progress.addEventListener('change', setVideoProgress);

  const muteBtn = document.getElementById("volumeIcone");
  muteBtn.addEventListener("click", toggleMute);
  video.muted = false;

  const volumeBar = document.getElementById("volumeBar");
  volumeBar.addEventListener("change", setVolumeProgress);
}

function toggleVideoStatus() {
  const video = document.getElementById('video');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  const play = document.getElementById('play');

  if (video.paused) {
    play.innerHTML = `<i class="fa fa-pause"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  }
}

function updateProgress(){
  const progress = document.getElementById('progress');
  const video = document.getElementById('video');
  const timestamp = document.getElementById('timestamp');

  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
    console.log(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

function stopVideo(){
  const stop = document.getElementById('stop');
  video.currentTime = 0;
  video.pause();
}

function setVideoProgress(){
  const progress = document.getElementById('progress');
  const video = document.getElementById('video');
  video.currentTime = (+progress.value * video.duration) / 100;
}

function toggleMute(){
  const video = document.getElementById('video');
  const muteBtn = document.getElementById("volumeIcone");
    if(video.muted === false){
      video.muted = true;
      muteBtn.classList.remove("fa-volume-up");
      muteBtn.classList.add("fa-volume-off");
    } else {
      video.muted = false;
      muteBtn.classList.remove("fa-volume-off");
      muteBtn.classList.add("fa-volume-up");
    }
}

function setVolumeProgress(e){
  const video = document.getElementById('video');
  video.volume = e.target.value;
}
window.addEventListener('load', init);

function init() {
    
    const play = document.getElementById('play');
    const stop = document.getElementById('stop');
    const progress = document.getElementById('progress');
    const timestamp = document.getElementById('timestamp');

    toggleVideoStatus();
    updatePlayIcon();
}

function toggleVideoStatus() {
    const video = document.getElementById('video');
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
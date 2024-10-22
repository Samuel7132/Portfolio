const video = document.getElementById("video");
document.getElementById("playBtn").addEventListener("click", function() {video.play();});
document.getElementById("pauseBtn").addEventListener("click", function() {video.pause();});
document.getElementById("stopBtn").addEventListener("click", function() {video.pause(); video.currentTime = 0;});
const togglePlayPauseBtn = document.getElementById("togglePlayPauseBtn");
togglePlayPauseBtn.addEventListener("click", function() { 
    if (video.paused) {video.play();
togglePlayPauseBtn.innerText = "Pause";
    } else { video.pause();
togglePlayPauseBtn.innerText = "Play";} });

const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");
video.addEventListener("timeupdate", updateProgressBar);
function updateProgressBar() {const percentage = (video.currentTime / video.duration) * 100;
progress.style.width = `${percentage}%`;}

const timestamp = document.getElementById("timestamp");
video.addEventListener("timeupdate", updateTimestamp);
function updateTimestamp() { const minutesCurrent = Math.floor(video.currentTime/ 60);
let secondsCurrent = Math.floor(video.currentTime % 60);
if (secondsCurrent < 10) { secondsCurrent = "0" + secondsCurrent;}
const minutesDuration = Math.floor(video.duration / 60);
let secondsDuration = Math.floor(video.duration % 60);
if (secondsDuration < 10) { secondsDuration = "0" + secondsDuration; }
timestamp.textContent = `${minutesCurrent}:${secondsCurrent} / ${minutesDuration}:${secondsDuration}`;}

progressBar.addEventListener("click", setVideoProgress);
function setVideoProgress(e) { 
const clickPosition = e.offsetX;
const width = progressBar.offsetWidth;
const clickPercentage = (clickPosition / width);
video.currentTime = clickPercentage * video.duration;
}
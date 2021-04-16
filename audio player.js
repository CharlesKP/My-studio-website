// audio player taken from:    https://codepen.io/ozzie/pen/YPOBEJ-->   

var music = document.getElementById("music");						//linking variables to the player control html Id
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration = music.duration;
pauseButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false);

function timeUpdate() {														// function for the time code for song position
	var playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.width = playPercent + "px";

	var secondsIn = Math.floor((music.currentTime /100) * 100);
	if (secondsIn <= 9) {
		timer.innerHTML = "0:0" + secondsIn;
	} else {
		timer.innerHTML = "0:" + secondsIn;
	}
}

playButton.onclick = function() {										//function to to play the music, while playing the play button is invisible and the pause is visible
	music.play();
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}

pauseButton.onclick = function() {									//the inverse of the above function.
	music.pause();
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
}

music.addEventListener("canplaythrough", function () {
	duration = music.duration;
}, false);
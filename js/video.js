var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("The current volume is " + video.volume)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15
	if (video.currentTime == video.duration) {
		video.currentTime = 0
	}
	console.log("Position is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of muted is " + video.muted);
	if (video.muted == false) {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	video.volume = (this.value * 0.01)
	console.log(video.volume)
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});
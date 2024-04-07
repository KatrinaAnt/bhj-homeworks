const timer = document.getElementById("timer");
let initialValue = 59;

function secondsToHms(sec) {
	sec = Number(sec);
	const hour = Math.floor(sec / 3600);
	const minutes = Math.floor(sec % 3600 / 60);
	const seconds = Math.floor(sec % 3600 % 60);
	return (`${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`)
}

const countDown = function() {
	if (initialValue <= 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(stopTimer);
	} else {
		initialValue -= 1;
		timer.textContent = secondsToHms(initialValue);
	}
}
let stopTimer = setInterval(countDown, 1000);
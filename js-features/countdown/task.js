const timer = document.getElementById("timer");
let initialValue = 59;

function secondsToHms(sec) {
	sec = Number(sec);
	const hour = Math.floor(sec / 3600);
	const minutes = Math.floor(sec % 3600 / 60);
	const seconds = Math.floor(sec % 3600 % 60);
	const hourTwoCount = hour >= 10 ? hour : ("0" + hour);
	const minutesTwoCount = minutes >= 10 ? minutes : ("0" + minutes);
	const secondsTwoCount = seconds >= 10 ? seconds : ("0" + seconds);
	return (`${hourTwoCount}:${minutesTwoCount}:${secondsTwoCount}`)
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
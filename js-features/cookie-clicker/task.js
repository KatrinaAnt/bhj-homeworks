const clicker = document.getElementById("clicker__counter");
let clickerCounter = 0;
const cookie = document.getElementById("cookie");
cookie.onclick = function() {
	clickerCounter += 1;
	clicker.textContent = clickerCounter;
	if (clickerCounter % 2 === 0) {
		cookie.width = 200;
	} else {
		cookie.width = 400;
	}
}
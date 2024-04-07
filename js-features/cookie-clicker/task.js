const clicker = document.getElementById("clicker__counter");
let clickerCounter = 0;
const cookie = document.getElementById("cookie");
cookie.onclick = function() {
	cookie.width = ++clicker.textContent % 2 ? 250 : 200;
}
const deadMole = document.getElementById("dead");
const lostMole = document.getElementById("lost");
let deadMoleCount = 0;
let lostMoleCount = 0;
let getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++) {
	let hole = getHole(i);
	const reset = (text) => {
		deadMoleCount = 0;
		deadMole.textContent = deadMoleCount;
		lostMoleCount = 0;
		lostMole.textContent = lostMoleCount;
		alert(text);
	};
	hole.onclick = function() {
		if (deadMoleCount >= 10) {
			reset("Победа!");
		} else if (lostMoleCount >= 5) {
			reset("Кроты разбежались. Попробуй снова!");
		}

		if (hole.classList.contains("hole_has-mole")) {
			deadMoleCount += 1;
			deadMole.textContent = deadMoleCount;
		} else {
			lostMoleCount += 1;
			lostMole.textContent = lostMoleCount;
		}
	}
}
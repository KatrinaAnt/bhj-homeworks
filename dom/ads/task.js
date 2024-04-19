const rotatorCase = Array.from(document.getElementsByClassName("rotator__case"));
const speed = [];
const color = [];
let count = 0;
let currentSpeed = 1000;
let interval = null;

rotatorCase.forEach(item => {
	speed.push(item.getAttribute("data-speed"));
	color.push(item.getAttribute("data-color"));
})

const rotator = function() {
	clearInterval(interval);
	rotatorCase.find(item => item.classList.remove("rotator__case_active"));
	count++;

	if (count >= rotatorCase.length) {
		count = 0;
	};

	rotatorCase[count].classList.add("rotator__case_active");
	rotatorCase[count].style.color = color[count];
	currentSpeed = Number(speed[count]);
	interval = setInterval(rotator, currentSpeed);
}

rotator();
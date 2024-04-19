const reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisibal(element) {
	const {
		top,
		bottom
	} = element.getBoundingClientRect();

	if (bottom < 0) {
		return false;
	}

	if (top > window.innerHeight) {
		return false;
	}
	return true;
}

setInterval(() => {
	let firstRevealIsVisibal = isVisibal(reveal[0]);
	let secondRevealIsVisibal = isVisibal(reveal[1]);

	if (firstRevealIsVisibal) {
		reveal[0].classList.add("reveal_active");
	} else {
		reveal[0].classList.remove("reveal_active");
	};

	if (secondRevealIsVisibal) {
		reveal[1].classList.add("reveal_active");
	} else {
		reveal[1].classList.remove("reveal_active");
	};
}, 1000);
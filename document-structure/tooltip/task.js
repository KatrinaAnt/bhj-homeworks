const tooltip = Array.from(document.getElementsByClassName("has-tooltip"));
const attribute = [];

function tooltipClick(item) {
	item.nextElementSibling.classList.toggle("tooltip_active");
	let coordinates = item.getBoundingClientRect();
	item.nextElementSibling.style.cssText = `position: absolute; left: ${coordinates.left}px;`;
}

tooltip.forEach((item, index) => {
	attribute.push(item.getAttribute("title"));

	item.addEventListener("click", (event) => {
		event.preventDefault();
		if(item.nextElementSibling.textContent !== attribute[index]) {
			item.insertAdjacentHTML("afterEnd", `<div class="tooltip">${attribute[index]}</div>`);
		}
		tooltipClick(item);
	});
});




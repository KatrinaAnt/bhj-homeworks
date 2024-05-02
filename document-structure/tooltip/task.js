const tooltip = Array.from(document.getElementsByClassName("has-tooltip"));
const attribute = [];

function tooltipClick(item) {
	item.firstElementChild.classList.toggle("tooltip_active");
	let coordinates = item.getBoundingClientRect();
	item.firstElementChild.style.cssText = `position: absolute; left: ${coordinates.left}px;`;
}

tooltip.forEach((item, index) => {
	attribute.push(item.getAttribute("title"));

	let element = document.createElement("div");
	element.textContent = attribute[index];
	element.classList.add("tooltip");
	item.appendChild(element);

	item.addEventListener("click", (event) => {
		event.preventDefault();
		tooltipClick(item);
	});
});


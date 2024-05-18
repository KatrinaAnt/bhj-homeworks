const tooltip = Array.from(document.getElementsByClassName("has-tooltip"));
const attribute = [];

tooltip.forEach((item, index) => {
	attribute.push(item.getAttribute("title"));

	item.addEventListener("click", (event) => {
		event.preventDefault();
		if(item.nextElementSibling.textContent === attribute[index]) {
			item.nextElementSibling.classList.toggle("tooltip_active");
			return;
		}
		item.insertAdjacentHTML("afterEnd", `<div class="tooltip">${attribute[index]}</div>`);
		let coordinates = item.getBoundingClientRect();
		item.nextElementSibling.style.cssText = `position: absolute; left: ${coordinates.left}px;`;
		item.nextElementSibling.classList.add("tooltip_active");
	});
});




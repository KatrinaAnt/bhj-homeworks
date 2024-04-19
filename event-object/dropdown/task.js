const dropdownList = document.querySelector(".dropdown__list");
const dropdown = dropdownList.closest(".dropdown");
const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));
const dropdownValue = document.querySelector(".dropdown__value");

dropdown.onclick = function() {
	dropdownList.classList.toggle("dropdown__list_active");
}

dropdownItem.forEach(item => {
	item.onclick = function() {
		dropdownValue.textContent = item.textContent;
		return false;
	}
})

const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

const clearActiveClass = (element, className = "tab_active") => {
	element.find(item => item.classList.remove(`${className}`));
}

const setActiveClass = (element, index, className = "tab_active") => {
	element[index].classList.add(`${className}`);
}

const checkoutTabs = (item, index) => {
	item.addEventListener("click", () => {
		clearActiveClass(tab);
		clearActiveClass(tabContent, "tab__content_active");
		setActiveClass(tab, index);
		setActiveClass(tabContent, index, "tab__content_active");
	})
}

tab.forEach(checkoutTabs);
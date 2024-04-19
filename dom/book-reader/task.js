const fontSize = Array.from(document.querySelectorAll(".font-size"));
const color = Array.from(document.querySelectorAll(".color"));
const colorText = color.slice(0, 3);
const colorBackground = color.slice(3);
const book = document.querySelector(".book");

const clearActiveClass = (element, className = "font-size_active") => {
	element.find(item => item.classList.remove(`${className}`));
}

const setActiveClass = (element, index, className = "font-size_active") => {
	element[index].classList.add(`${className}`);
	let attribute = element[index].getAttribute("data-size");
	if (attribute === "small") {
		book.classList.add("font-size_small");
	} else if (attribute === "big") {
		book.classList.add("font-size_big");
	}
}

const setActiveClassTextColor = (element, index, className = "color_active") => {
	element[index].classList.add(`${className}`);
	let attributeText = element[index].getAttribute("data-text-color");
	if (attributeText === "black") {
		book.classList.add("book_color-black");
	} else if (attributeText === "gray") {
		book.classList.add("book_color-gray");
	} else if (attributeText === "whitesmoke") {
		book.classList.add("book_color-whitesmoke");
	}
}

const setActiveClassBgColor = (element, index, className = "color_active") => {
	element[index].classList.add(`${className}`);
	let attributeText = element[index].getAttribute("data-bg-color");
	if (attributeText === "black") {
		book.classList.add("bg_color_black");
	} else if (attributeText === "gray") {
		book.classList.add("bg_color_gray");
	} else if (attributeText === "white") {
		book.classList.add("bg_color_white");
	}
}

const fontSizeClick = (item, index) => {
	item.addEventListener("click", (event) => {
		event.preventDefault();
		clearActiveClass(fontSize);
		book.classList.remove("font-size_small", "font-size_big");
		setActiveClass(fontSize, index);
	})
}

const colorTextClick = (item, index) => {
	item.addEventListener("click", (event) => {
		event.preventDefault();
		clearActiveClass(colorText, "color_active");
		book.classList.remove("book_color-gray", "book_color-black", "book_color-whitesmoke");
		setActiveClassTextColor(colorText, index);
	})
}

const colorBgClick = (item, index) => {
	item.addEventListener("click", (event) => {
		event.preventDefault();
		clearActiveClass(colorBackground, "color_active");
		book.classList.remove("bg_color_gray", "bg_color_black", "bg_color_white");
		setActiveClassBgColor(colorBackground, index);
	})
}

fontSize.forEach(fontSizeClick);
colorText.forEach(colorTextClick);
colorBackground.forEach(colorBgClick);
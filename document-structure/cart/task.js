const cart = Array.from(document.getElementsByClassName("cart__products"));
const products = Array.from(document.getElementsByClassName("product"));
const image = Array.from(document.getElementsByClassName("product__image"));
const minus = Array.from(document.getElementsByClassName("product__quantity-control_dec"));
const plus = Array.from(document.getElementsByClassName("product__quantity-control_inc"));
const quantity = Array.from(document.getElementsByClassName("product__quantity-value"));
const button = Array.from(document.getElementsByClassName("product__add"));

function minusClick(item, index) {
	item.addEventListener("click", () => {
		if (Number(quantity[index].textContent) !== 1) {
			quantity[index].textContent--;
		}
	});
}

function plusClick(item, index) {
	item.addEventListener("click", () => {
		quantity[index].textContent++;
	});
}

function productAdd(item, index) {
	item.addEventListener("click", () => {
		const productInCart = Array.from(document.getElementsByClassName("cart__product"));
		let validate = productInCart.find((element) => {
			return(element.getAttribute("data-id") === products[index].getAttribute("data-id"))}
		);
		if (!validate) {
			cart[0].insertAdjacentHTML("beforeEnd", `
				<div class="cart__product" data-id="${products[index].getAttribute("data-id")}">
					<img class="cart__product-image" src="${image[index].getAttribute("src")}">
					<div class="cart__product-count">${quantity[index].textContent.trim()}</div>
				</div>
			`);
			return;
		} else {
			productInCart[index].lastElementChild.textContent = Number(productInCart[index].lastElementChild.textContent) + Number(quantity[index].textContent);
		}
	});
}

minus.forEach((item, index) => {
	minusClick(item, index);
});

plus.forEach((item, index) => {
	plusClick(item, index);
});

button.forEach((item, index) => {
	productAdd(item, index);
});
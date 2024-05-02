const cart = Array.from(document.getElementsByClassName("cart__products"));
const products = Array.from(document.getElementsByClassName("product"));
const image = Array.from(document.getElementsByClassName("product__image"));
const minus = Array.from(document.getElementsByClassName("product__quantity-control_dec"));
const plus = Array.from(document.getElementsByClassName("product__quantity-control_inc"));
const quantity = Array.from(document.getElementsByClassName("product__quantity-value"));
const button = Array.from(document.getElementsByClassName("product__add"));
let productInCart = [];

console.log(cart);

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
	let product = products[index].cloneNode(false);
	item.addEventListener("click", () => {
		let validate = productInCart.some((element) => {
			if (element.getAttribute("data-id") === product.getAttribute("data-id")) {
				return true;
			} else {
				return false;
			}
		});
		if (!validate) {
			productInCart.push(product);
			product.appendChild(image[index].cloneNode(false));
			product.appendChild(quantity[index].cloneNode(true));
			cart[0].appendChild(product);
			return;
		} else {
			product.lastElementChild.textContent = Number(product.lastElementChild.textContent) + Number(quantity[index].textContent);
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
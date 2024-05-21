const imgloader = document.getElementsByClassName("loader")[0];
const valuteList = document.getElementById("items");
const storeValute = localStorage.getItem("valute");
let xhr = new XMLHttpRequest();

if (storeValute) {
	imgloader.classList.remove("loader_active");
	addValuteList(JSON.parse(storeValute));
} else {
	xhr.onreadystatechange = () => {
		if (xhr.readyState === xhr.DONE) {
			imgloader.classList.remove("loader_active");
			const answer = JSON.parse(xhr.response);
			const valute = Object.values(answer.response.Valute);
			addValuteList(valute);
			localStorage.setItem("valute", JSON.stringify(valute));
		}
	};
	xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
	xhr.send();
}

function addValuteList(element) {
	element.forEach((item) => {
		valuteList.insertAdjacentHTML("beforeEnd", `
        <div class="item">
            <div class="item__code">
                ${item.CharCode}
            </div>
            <div class="item__value">
                ${item.Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `);
	});
}
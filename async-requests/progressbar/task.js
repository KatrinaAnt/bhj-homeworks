const progress = document.getElementById("progress");

document.forms.form.addEventListener("submit", (event) => {
	event.preventDefault();
	const xhr = new XMLHttpRequest();
	xhr.upload.addEventListener("progress", (event) => {
		progress.value = event.loaded / event.total;
	});
	xhr.addEventListener("load", () => {
		if (xhr.readyState === xhr.DONE) {
			alert("Файл загружен на сервер");
			progress.value = 0.0;
		}
	});
	xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
	const formData = new FormData(document.forms.form);
	xhr.send(formData);
});

const tasksList = document.getElementById("tasks__list");
const input = document.getElementsByClassName("tasks__input")[0];
const form = document.forms["tasks__form"];

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (input.value) {
		let task = document.createElement("div");
		let taskTitle = document.createElement("div");
		task.classList.add("task");
		taskTitle.append(`${input.value}`);
		taskTitle.classList.add("task__title");
		task.appendChild(taskTitle);
		task.insertAdjacentHTML("beforeEnd", `<a href="#" class="task__remove">&times;</a>`);
		tasksList.appendChild(task);
	}
	form.reset();

	let remove = document.getElementsByClassName("task__remove");
	remove[remove.length - 1].addEventListener("click", function(event) {
		event.preventDefault();
		this.parentElement.remove();
	});
});

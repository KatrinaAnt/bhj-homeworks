const tasksList = document.getElementById("tasks__list");
const input = document.getElementsByClassName("tasks__input")[0];
const form = document.forms["tasks__form"];

form.addEventListener("submit", (event) => {
	event.preventDefault();
	if (!input.value.trim()) {
		return;
	}
	tasksList.insertAdjacentHTML("beforeEnd", `
		<div class="task">
  			<div class="task__title">
    			${input.value}
  			</div>
  			<a href="#" class="task__remove">&times;</a>
		</div>
	`);
	form.reset();

	let remove = document.getElementsByClassName("task__remove");
	remove[remove.length - 1].addEventListener("click", function(event) {
		event.preventDefault();
		this.parentElement.remove();
	});
});

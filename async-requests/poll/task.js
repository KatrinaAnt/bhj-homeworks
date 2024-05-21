const title = document.getElementsByClassName("poll__title")[0];
const answers = document.getElementsByClassName("poll__answers")[0];
const pollList = document.getElementsByClassName("poll")[0];
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
	if (xhr.readyState === xhr.DONE) {
		const poll = JSON.parse(xhr.response);
		title.insertAdjacentHTML("afterBegin", `${poll.data.title}`);
		poll.data.answers.forEach(function(item) {
			answers.insertAdjacentHTML("beforeEnd", `
            <button class="poll__answer">
              ${item}
            </button>
            `);
		});
		const button = Array.from(document.getElementsByClassName("poll__answer"));
		button.forEach((item) => {
			item.addEventListener("click", (event, index) => {
				event.preventDefault();
				alert("Спасибо, ваш голос засчитан!");
				const pollId = poll.id;
				resultPoll(index, pollId)
			});
		});
	}
};
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

function resultPoll(index, pollId) {
	const newXhr = new XMLHttpRequest();
	newXhr.onreadystatechange = () => {
		if (newXhr.readyState === newXhr.DONE) {
			const result = Object.values(JSON.parse(newXhr.response));
			answers.remove();
			result[0].forEach((item) => {
				pollList.insertAdjacentHTML("beforeEnd", `
                <div>
                    ${item.answer}: ${item.votes} голосов
                </div>
                `);
			});
		}
	}
	newXhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
	newXhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	newXhr.send(`vote=${pollId}&answer=${index}`);
}
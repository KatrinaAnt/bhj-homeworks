const title = document.getElementsByClassName("poll__title")[0];
const answers = document.getElementsByClassName("poll__answers")[0];
const pollList = document.getElementsByClassName("poll")[0];
const xhr = new XMLHttpRequest();

xhr.onload = () => {
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
				resultPoll("POST", "https://students.netoservices.ru/nestjs-backend/poll", index, pollId)
			});
		});
	}
};
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

function resultPoll(method, URL, index, pollId) {
	xhr.onload = () => {
		if (xhr.readyState === xhr.DONE) {
			answers.remove();
			const result = Object.values(JSON.parse(xhr.response));
			let totalVotes = null;
			result[0].forEach((item) => {
				totalVotes += item.votes;
			}
			);
			result[0].forEach((item) => {
				pollList.insertAdjacentHTML("beforeEnd", `
                <div>
                    ${item.answer}: ${((item.votes * 100) / totalVotes).toFixed(2)} %
                </div>
                `);
			});
		}
	}
	xhr.open(method, URL);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(`vote=${pollId}&answer=${index}`);
}
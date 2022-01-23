window.addEventListener("DOMContentLoaded", () => {
	const startMap = document.querySelector(".start-map"),
		endMap = document.querySelector(".end-map"),
		result = document.querySelector(".result"),
		totalCount = result.querySelector(".total-count"),
		infectedCount = result.querySelector(".infected-count"),
		percentage = result.querySelector(".percentage");

	const pandemicStartMap = "01000000X000X011X0X";
	let total = 0,
		infected = 0;

	pandemicStartMap.split("").forEach((value, index) => {
		if (value === "0") {
			startMap.innerHTML += `<div class="uninfected"></div>`;
			total++;
		}
		if (value === "1") {
			startMap.innerHTML += `<div class="infected"></div>`;
			total++;
		}
		if (value === "X") {
			startMap.innerHTML += `<div class="ocean"></div>`;
		}
	});
	totalCount.textContent = `Total: ${total}`;

	endMap.innerHTML = startMap.innerHTML;

	endMap.childNodes.forEach((value, index) => {
		if (
			value.className === "infected" &&
			!endMap.childNodes[index].nextElementSibling.classList.contains("ocean") &&
			!endMap.childNodes[index].previousElementSibling.classList.contains("ocean")
		) {
			value.nextElementSibling.classList.add("infected");
			value.nextElementSibling.classList.remove("uninfected");

			value.previousElementSibling.classList.add("infected");
			value.previousElementSibling.classList.remove("uninfected");
		}
	});

	for (const value of endMap.childNodes) {
		if (value.classList.contains("infected")) {
			infected++;
		}
	}

	infectedCount.textContent = `Infected: ${infected}`;
	percentage.textContent = `Percentage: ${(infected / total) * 100}%`;
});

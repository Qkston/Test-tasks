window.addEventListener("DOMContentLoaded", () => {
	const startMap = document.querySelector(".start-map"),
		endMap = document.querySelector(".end-map"),
		result = document.querySelector(".result"),
		totalCount = result.querySelector(".total-count");

	const pandemicStartMap = "01000000X000X011X0X";

	pandemicStartMap.split("").forEach((value, index) => {
		totalCount.textContent = `Total: ${index + 1}`;

		if (value === "0") {
			startMap.innerHTML += `<div class="uninfected"></div>`;
		}
		if (value === "1") {
			startMap.innerHTML += `<div class="infected"></div>`;
		}
		if (value === "X") {
			startMap.innerHTML += `<div class="ocean"></div>`;
		}
	});

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
});

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
});

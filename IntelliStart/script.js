let arrowUp = document.querySelector(".lift-up-btn");

window.addEventListener("scroll", () => {
	let scroll = this.scrollY;
	if (scroll >= 50) {
		arrowUp.style.display = "flex";
	} else {
		arrowUp.style.display = "none";
	}
});

arrowUp.addEventListener("click", () => {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -100);
	}
});

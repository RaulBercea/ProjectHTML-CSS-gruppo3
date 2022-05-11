function displayMenu() {
	let checkbox = document.getElementById("menuCheck");
	let navbar = document.getElementById("navbar");

	if (checkbox.checked == true) {
		navbar.style.display = "block";
	} else {
		navbar.style.display = "none";
	}
}

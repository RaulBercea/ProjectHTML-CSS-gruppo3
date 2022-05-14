// getting the hamburger menu in the html file
let hamburgerMenu = document.getElementById("hamburger");

// getting the navbar in the html file
let navbar = document.getElementById("navbar");

// event listener for the click of the hamburger menu that will display the nabbar
hamburgerMenu.addEventListener("click", () => {
	// with classList.toggle i can enable and disable a class from an element
	navbar.classList.toggle("visibility");
});

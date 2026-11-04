// Find the theme button in the page.
const themeButton = document.getElementById("theme-toggle");

// Listen for a click and toggle the "dark" class on the body.
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

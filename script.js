document.addEventListener("DOMContentLoaded", function () {

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark");
        });
    }

});

var icon = document.getElementById("theme-icon");

icon.onclick = function() {
    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");

    if(document.body.classList.contains("theme-dark")) {
        icon.textContent = "dark_mode";
    } else {
        icon.textContent = "light_mode";
    }
}
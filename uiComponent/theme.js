const themeBtn = document.getElementById("theme-btn");
const container = document.getElementsByClassName("container")[0];

let currentTheme = localStorage.getItem("theme") || "dark";

container.classList.add(currentTheme);

updateBtnText();

themeBtn.addEventListener("click", () => {
    updateBtnText();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    container.classList.remove(currentTheme);
    container.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);

    currentTheme = nextTheme;
});


function updateBtnText() {
    themeBtn.textContent = currentTheme === "dark" ? "Light" : "Dark";
}
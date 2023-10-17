document.addEventListener("DOMContentLoaded", function () {
    let normalContainer = document.getElementById("normal-container");
    let hiddenContainer = document.getElementById("hidden-container");
    let toggleCheckbox = document.getElementById("toggle-checkbox");
    let isChecked = JSON.parse(localStorage.getItem("isChecked")) || false;
    toggleCheckbox.checked = isChecked;
    normalContainer.classList.toggle("d-none", isChecked);
    hiddenContainer.classList.toggle("d-none", !isChecked);

    toggleCheckbox.addEventListener("change", function () {
        localStorage.setItem("isChecked", toggleCheckbox.checked);
        normalContainer.classList.toggle("d-none", toggleCheckbox.checked);
        hiddenContainer.classList.toggle("d-none", !toggleCheckbox.checked);
    });
});


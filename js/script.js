"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("registerModal");
    let openBtn = document.getElementById("loginBtn");
    let closeBtn = document.querySelector(".close");

    // Открытие окна при клике на кнопку "Войти"
    openBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Закрытие окна при нажатии на крестик (×)
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закрытие при клике вне окна
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
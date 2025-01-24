document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.querySelector(".content").classList.add("show");
    }, 2000);
});
document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.5) {
            section.classList.add("show");
        }
    });
});

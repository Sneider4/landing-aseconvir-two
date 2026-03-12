const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 220;

        if (elementTop < windowHeight - visiblePoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
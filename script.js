document.addEventListener("DOMContentLoaded", () => {
const fadeEls = document.querySelectorAll('.fade-in');

const showOnScroll = () => {
    fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
        el.classList.add('show');
    }
    });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();
});

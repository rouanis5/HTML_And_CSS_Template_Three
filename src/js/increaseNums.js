const statsNum = document.querySelectorAll("[data-goal]");
const increaseOptions = {
    threshold: 0.5,
};
const increaseOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        setInterval(() => {
            if (parseInt(entry.target.textContent, 10) < parseInt(entry.target.getAttribute("data-goal"), 10)) {
                entry.target.textContent = parseInt(entry.target.textContent, 10) + 1;
                entry.target.getAttribute("data-goal");
            } else {
                clearInterval();
            }
        }, 20);
        increaseOnScroll.unobserve(entry.target);
    });
}, increaseOptions);

statsNum.forEach((num) => {
    increaseOnScroll.observe(num);
});

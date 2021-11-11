import { appearOptions } from "./main";
const ourSkills = document.getElementById("our-skills");
const skills = document.querySelectorAll("[data-width]");
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        skills.forEach((skill) => {
            skill.style.width = skill.getAttribute("data-width");
        });
        animateOnScroll.unobserve(entry.target);
    });
}, appearOptions);

animateOnScroll.observe(ourSkills);

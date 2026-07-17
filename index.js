// Always start at the top of the homepage
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

window.addEventListener("DOMContentLoaded", () => {

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    animateNumber("previewCalories", 2450, " kcal", 2200);
    animateNumber("previewProtein", 145, "g", 2200);
    animateNumber("previewCarbs", 320, "g", 2200);
    animateNumber("previewFat", 70, "g", 2200);

});

function animateNumber(id, target, suffix, duration) {

    const element = document.getElementById(id);
    const startTime = performance.now();

    function update(currentTime) {

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out animation
        const eased = 1 - Math.pow(1 - progress, 3);

        const value = Math.round(target * eased);

        element.textContent = value.toLocaleString() + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }

    }

    requestAnimationFrame(update);

}


document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.PersonalLogo');
    const name = document.querySelector('.Name');

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                logo.classList.add('fade-out'); // Add fade-out class when overlapping
            } else {
                logo.classList.remove('fade-out'); // Remove fade-out class when not overlapping
            }
        },
        {
            root: null,      // Use the viewport as the root
            threshold: 0.01, // Trigger when 1% is intersecting?
        }
    );
    observer.observe(logo); // OBSERVE LOGO
    observer.observe(name); // OBSERVE NAME
});

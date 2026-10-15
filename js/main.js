// js/main.js
// Main entry point for Portfolio interactive enhancements

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Skills Showcase if present on page
    if (typeof initSkills === 'function') {
        initSkills();
    } else if (typeof renderSkills === 'function') {
        renderSkills();
    }
});

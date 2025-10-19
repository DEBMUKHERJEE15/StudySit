document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the stored theme on page load
    const applyStoredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '\u2600\ufe0f'; // Sun icon
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '\ud83c\udf19'; // Moon icon
        }
    };

    // Function to toggle the theme
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '\u2600\ufe0f'; // Sun icon
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '\ud83c\udf19'; // Moon icon
        }
    };

    // Apply the theme when the page loads
    applyStoredTheme();

    // Add event listener to the theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
});

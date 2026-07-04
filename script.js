document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Tabs Architecture ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Deactivate all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate chosen tab elements
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // --- Dark / Light Theme Engine ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const themeText = themeToggleBtn.querySelector('span');

    // Check localStorage for prior choices, fallback to dark theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    // Inject saved state on layout initial paint
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-moon';
        themeText.textContent = 'Dark Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            // Revert back to Default Dark Mode
            document.documentElement.removeAttribute('data-theme');
            themeIcon.className = 'fa-solid fa-sun';
            themeText.textContent = 'Light Mode';
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            // Deploy Light Mode Overrides
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.className = 'fa-solid fa-moon';
            themeText.textContent = 'Dark Mode';
            localStorage.setItem('portfolio-theme', 'light');
        }
    });
});
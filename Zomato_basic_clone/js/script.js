// Adding smooth scroll behavior for anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Offset for header
                behavior: 'smooth'
            });
        }
    });
});

// Adding a simple animation to the search input field on focus
const searchInput = document.querySelector('input[type="text"]');
if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.style.transform = 'scale(1.05)';
        searchInput.style.transition = 'transform 0.2s ease';
    });

    searchInput.addEventListener('blur', () => {
        searchInput.style.transform = 'scale(1)';
    });
}

// Optional: Change the text in the main section on page load
window.addEventListener('load', () => {
    const mainText = document.querySelector('main p');
    mainText.textContent = 'Your favorite food, delivered to your door!';
});

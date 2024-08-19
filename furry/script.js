document.querySelector('.fading-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('cover');
    const heroText = document.querySelector('cover h1');

    function checkBackground() {
        const bgImage = getComputedStyle(heroSection).backgroundImage;
        if (bgImage !== 'none') {
            heroText.style.color = 'transparent';
            heroText.style.webkitTextStroke = '2px white';
        } else {
            heroText.style.color = 'white';
            heroText.style.webkitTextStroke = '0';
        }
    }

    checkBackground();
    window.addEventListener('resize', checkBackground);
});

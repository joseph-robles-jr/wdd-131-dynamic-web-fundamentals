document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});

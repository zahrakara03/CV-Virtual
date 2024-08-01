document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let index = 0;

    function showNextImage() {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }

    function showPreviousImage() {
        images[index].classList.remove('active');
        index = (index - 1 + images.length) % images.length;
        images[index].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});

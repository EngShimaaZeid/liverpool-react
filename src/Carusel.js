document.addEventListener('DOMContentLoaded', () => {
    const carouselList = document.querySelector('.carousel-list');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    document.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < totalItems - 3) { 
            currentIndex++;
            updateCarousel();
        }
    });

    document.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = -currentIndex * (100 / 3);
        carouselList.style.transform = `translateX(${offset}%)`;
    }
});

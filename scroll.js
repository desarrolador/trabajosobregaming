function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const scrollAmount = carousel.clientWidth;
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
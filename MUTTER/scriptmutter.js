document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', function() {
        if (sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
            sidebar.classList.add('hide');
        } else {
            sidebar.classList.remove('hide');
            sidebar.classList.add('show');
        }
    });
});


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Para iniciar automáticamente el carrusel
//setInterval(nextSlide, 3000);
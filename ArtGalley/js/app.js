const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
const sliderContent = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;
const totalSlides = slides.length;

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides; 
    updateSliderPosition();
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
});

function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth;
    sliderContent.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}


// EFECTO TARJETAS

const cards = document.querySelectorAll(".work-card");
const infoCards = document.querySelectorAll(".card-info_hidden");


cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        const infoCard = card.querySelector(".card-info_hidden"); 
        if (infoCard) {
            infoCard.classList.remove("card-info_hidden");
        }
    });

    card.addEventListener("mouseout", () => {
        const infoCard = card.querySelector(".card-info");
        if (infoCard) {
            infoCard.classList.add("card-info_hidden"); 
        }
    });
});

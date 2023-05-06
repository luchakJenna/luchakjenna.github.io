nextSlide = () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
}

previousSlide = () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
}

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);
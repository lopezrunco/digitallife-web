let slider = document.querySelector('.slider-container'); // Obtains .slider-container from html
let sliderItem = document.querySelectorAll('.slider-item'); // Obtains all  the .slider-item elements from html
let counter = 1;
let widthSize = sliderItem[0].clientWidth; // Obtains slider width depending of screen width
let interval = 5000; // Time between sliders (1000 = 1s)

window.addEventListener("resize", function () { // Adjust slider to screen on real tiem
    widthSize = sliderItem[0].clientWidth;
})

setInterval(function timer() { // Executes slidesScroll function every time lapse defined on "interval" variable 
    slidesScroll();
}, interval);

function slidesScroll() {
    slider.style.transform = 'translate(' + (-widthSize * counter) + 'px)'; // Translate the slider multiplying the with for the counter
    slider.style.transition = 'transform 1s'; // Animation on slide change
    counter++; // Loop to next slider

    if (counter === sliderItem.length) { // If the slider is the last, counter resets to 0, it means that he slider goes back to the first
        counter = 0;
    }
}
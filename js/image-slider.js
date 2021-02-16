const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const posision = document.querySelector(".position");
let index = 0;

prev.addEventListener("click", function () {
    prevSlide();
    updateCirclePosition();
    resetTimer();
})
next.addEventListener("click", function () {
    prevSlide();
    updateCirclePosition();
    resetTimer();
})

// Circle creators in html
function circlePosition() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.setAttribute("onclick", "slideIndicator(this)")
        div.ide = i;
        if (i == 0) {
            div.className = "active";
        }
        posision.appendChild(div);
    }
}
circlePosition();

// Show selected slide on circle click
function slideIndicator(element) {
    index = element.id;
    changeSlide();
    updateCirclePosition();
    resetTimer();
}

// Refresh position indicator on slider change
function updateCirclePosition() {
    for (let i = 0; i < posision.children.length; i++) {
        posision.children[i].classList.remove("active"); // Remove .active class from all circle indicators
    }
    posision.children[index].classList.add("active");
}

// Prev and Next buttons
function prevSlide(){
    if(index == 0){
        index = slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index == slides.length-1){
        index = 0;
    }
    else{
        index++;
    }

    changeSlide();
}

function changeSlide(){
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    slides[index].classList.add("active");
}

// Stop autoplay on indicator and arrow click
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoPlay,4000); // Autoplat sarts again
}

// Autoplay slider
function autoPlay(){
    nextSlide();
    updateCirclePosition();
}

let timer = setInterval(autoPlay, 7000);
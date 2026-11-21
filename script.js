let slides = document.querySelectorAll(".slide");

let nextBtn = document.getElementById("nextBtn");

let prevBtn = document.getElementById("prevBtn");

let dots = document.querySelectorAll(".dot");

let exploreBtns = document.querySelectorAll(".explore-btn");

let currentSlide = 0;

// ===============================Dots Click Event==============================
function showSlide(index) {

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}
showSlide(currentSlide);

for (let i = 0; i < dots.length; i++) {

    dots[i].addEventListener("click", function () {

        currentSlide = i;

        showSlide(currentSlide);

    });

}

// =============================== Next Button Click Event ==============================
nextBtn.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

// =============================== Previous Button Click Event ==============================
prevBtn.addEventListener("click", function () {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

// ================================ Explore Button Click Event ==============================
for (let i = 0; i < exploreBtns.length; i++) {

    exploreBtns[i].addEventListener("click", function () {

        if (i == 0) {
            alert("Discover Paris in FRANCE!\nFamous Place: Eiffel Tower");
        }

        else if (i == 1) {
            alert("Discover Tokyo in JAPAN!\nFamous Place: Tokyo Tower");
        }

        else if (i == 2) {
            alert("Discover Rome in ITALY!\nFamous Place: Colosseum");
        }

        else if (i == 3) {
            alert("Discover Cairo in EGYPT!\nFamous Place: Pyramids");
        }

    });

}
// ========================================================================================================================
// ========================================================================================================================
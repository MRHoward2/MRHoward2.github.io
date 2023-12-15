let currentSlide = 0;
const slides1 = document.querySelectorAll(".slide1");
const dots1 = document.querySelectorAll(".dot1");

const init = (n) => {
  slides1.forEach((slide1, index) => {
    slide1.style.display = "none";
    dots1.forEach((dot1, index) => {
      dot1.classList.remove("active");
    });
  });
  slides1[n].style.display = "block";
  dots1[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next1 = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev1 = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".next1").addEventListener("click", next);

document.querySelector(".prev"1).addEventListener("click", prev);

setInterval(() => {
  next();
}, 5000);

dots1.forEach((dot, i) => {
  dot1.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});

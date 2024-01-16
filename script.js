class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.carousel
      .querySelector(`img:nth-of-type(${1})`)
      .classList.add("active");

    this.carousel.addEventListener("click", this.open.bind(this));
  }

  open() {
    document.querySelector(":root").classList.add("active");
    this.carousel.classList.add("active");
  }
}

document.querySelectorAll(".carousel").forEach(function (carousel) {
  new Carousel(carousel);
});

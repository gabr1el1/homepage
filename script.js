class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.images = this.carousel.querySelectorAll("img");
    this.activeIndex = 0;
    this.carousel
      .querySelector(`img:nth-of-type(${1})`)
      .classList.add("active");

    this.carousel.addEventListener("click", this.open.bind(this));

    let closeBtn = this.carousel.querySelector(".close");
    closeBtn.addEventListener("click", this.close.bind(this));
    let previousBtn = this.carousel.querySelector(".left");
    previousBtn.addEventListener("click", this.previous.bind(this));
    let nextBtn = this.carousel.querySelector(".right");
    nextBtn.addEventListener("click", this.previous.bind(this));
  }
  close(event) {
    event.stopPropagation();
    this.carousel.classList.remove("active");
    document.querySelector(":root").classList.remove("active");
  }
  open() {
    let active = this.carousel.classList.contains("active");
    if (!active) {
      document.querySelector(":root").classList.add("active");
      this.carousel.classList.add("active");
    }
  }

  previous() {
    this.images[this.activeIndex].classList.remove("active");
    if (this.activeIndex == 0) {
      this.activeIndex = this.images.length - 1;
      this.images[this.activeIndex].classList.add("active");
    } else {
      this.activeIndex -= 1;
      this.images[this.activeIndex].classList.add("active");
    }
  }
  next() {
    this.images[this.activeIndex].classList.remove("active");
    if (this.activeIndex < this.images.length - 1) {
      this.activeIndex += 1;
      this.images[this.activeIndex].classList.add("active");
    } else {
      this.activeIndex = 0;
      this.images[0].classList.add("active");
    }
  }
}

document.querySelectorAll(".carousel").forEach(function (carousel) {
  new Carousel(carousel);
});

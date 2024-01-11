let carousels = document.querySelectorAll(".carousel");
class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.images = carousel.querySelectorAll("img");
    this.lengthCarousel = this.images.length;

    this.indexActive = 0;

    this.carousel.addEventListener("click", this.enableCarousel.bind(this));

    this.left = this.carousel.querySelector(".left");
    this.left.addEventListener("click", this.previous.bind(this));

    this.right = this.carousel.querySelector(".right");
    this.right.addEventListener("click", this.next.bind(this));

    this.closeBtn = this.carousel.querySelector(".close");
    this.closeBtn.addEventListener("click", this.close.bind(this));
  }
  close(event) {
    event.stopPropagation();
    this.carousel.classList.remove("active");

    if (this.indexActive !== 0) {
      this.images[this.indexActive].classList.remove("active");
      this.images[0].className = "active";
    }
  }
  enableCarousel(event) {
    if (!this.carousel.classList.contains("active")) {
      this.carousel.classList.add("active");
    }
  }

  previous() {
    this.images[this.indexActive].classList.remove("active");
    if (this.indexActive > 0) {
      this.indexActive -= 1;
    } else {
      this.indexActive = this.lengthCarousel - 1;
    }

    this.images[this.indexActive].classList.add("active");
  }
  next() {
    this.images[this.indexActive].classList.remove("active");
    if (this.indexActive < this.lengthCarousel - 1) {
      this.indexActive += 1;
    } else {
      this.indexActive = 0;
    }

    this.images[this.indexActive].classList.add("active");
  }
}
carousels.forEach(function (carousel) {
  new Carousel(carousel);
});

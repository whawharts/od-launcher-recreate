(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var previous = document.querySelector('.rail-arrow--prev');
  var next = document.querySelector('.rail-arrow--next');
  var activeIndex = 2;
  var timer = null;
  var delay = 5000;

  function showSlide(index) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach(function (slide, slideIndex) {
      var isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });
  }

  function stopAutoPlay() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      timer = window.setInterval(function () {
        showSlide(activeIndex + 1);
      }, delay);
    }
  }

  previous.addEventListener('click', function () {
    showSlide(activeIndex - 1);
    startAutoPlay();
  });

  next.addEventListener('click', function () {
    showSlide(activeIndex + 1);
    startAutoPlay();
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  showSlide(activeIndex);
  startAutoPlay();
})();

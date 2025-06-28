const track = document.getElementById('carouselTrack');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    let currentSlide = 0;

    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });

    // Optional: Swipe support for mobile
    let startX = 0;
    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        nextButton.click();
      } else if (endX - startX > 50) {
        prevButton.click();
      }
    });
{/* <script> */}
    let currentSlide = 0;
    const slides = document.querySelectorAll('#slider .slide');

    // Show the first slide initially
    slides[currentSlide].classList.add('active');

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
        slides[currentSlide].classList.add('active');
    }
{/* </script> */}
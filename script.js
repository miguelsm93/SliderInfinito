document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const slideCount = slides.length;

    // Clone first and last slides for infinite effect
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slideCount - 1].cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);

    // Set initial position
    currentIndex = 1;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Function to move slides
    const moveSlide = (direction) => {
        if (direction === 'next') {
            currentIndex++;
        } else {
            currentIndex--;
        }

        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Handle infinite loop
    slider.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            slider.style.transition = 'none';
            currentIndex = slideCount;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            slider.getBoundingClientRect();
        } else if (currentIndex === slideCount + 1) {
            slider.style.transition = 'none';
            currentIndex = 1;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            slider.getBoundingClientRect();
        }
    });

    // Event listeners for buttons
    nextButton.addEventListener('click', () => moveSlide('next'));
    prevButton.addEventListener('click', () => moveSlide('prev'));

    // Auto-play functionality
    let autoPlayInterval = setInterval(() => moveSlide('next'), 5000);

    // Pause auto-play on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });

    slider.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(() => moveSlide('next'), 5000);
    });
});
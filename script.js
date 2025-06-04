document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        // Configuración básica
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,

        // Efecto de transición
        effect: 'slide',
        speed: 500,

        // Navegación
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Autoplay activado
        autoplay: {
            delay: 4000,
            disableOnInteraction: false, // Continúa el autoplay incluso después de interacción del usuario
            pauseOnMouseEnter: true, // Pausa cuando el mouse está sobre el slider
        },

        // Responsive breakpoints
        breakpoints: {
            // cuando el ancho de la ventana es >= 768px
            768: {
                slidesPerView: 1,
            },
            // cuando el ancho de la ventana es >= 992px
            992: {
                slidesPerView: 1,
            }
        }
    });
});
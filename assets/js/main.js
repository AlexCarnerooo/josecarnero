document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const html = document.documentElement;
    const body = document.body;
    let scrollPosition = 0;

    function lockScroll() {
        scrollPosition = window.pageYOffset;
        html.style.top = -scrollPosition + 'px';
        html.classList.add('menu-open');
        body.classList.add('menu-open');
    }

    function unlockScroll() {
        html.classList.remove('menu-open');
        body.classList.remove('menu-open');
        html.style.top = '';
        window.scrollTo(0, scrollPosition);
    }

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            lockScroll();
        } else {
            unlockScroll();
        }
    });

    // Cerrar el menú cuando se hace clic en un enlace
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            unlockScroll();
        });
    });
}); 
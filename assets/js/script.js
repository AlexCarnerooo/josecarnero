document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (!hamburger || !navLinks) {
        console.error('Elementos de navegación no encontrados');
        return;
    }

    // Manejar clic en hamburguesa
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Hamburger clicked');

        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        console.log('Opening menu');
        navLinks.classList.add('active');
        hamburger.classList.add('active');
        body.style.overflow = 'hidden'; // Evita el scroll de fondo
    }

    function closeMenu() {
        console.log('Closing menu');
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = ''; // Vuelve a permitir scroll
    }

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(item => {
        item.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Cerrar el menú si se hace clic fuera
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });
});

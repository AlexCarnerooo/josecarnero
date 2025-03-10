document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Asegurarse de que el menú esté oculto al cargar la página en móviles
    if (window.innerWidth <= 768) {
        navLinks.style.transform = 'translateY(-100%)';
    }
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Ajustar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.transform = '';
        } else {
            if (!navLinks.classList.contains('active')) {
                navLinks.style.transform = 'translateY(-100%)';
            }
        }
    });
}); 
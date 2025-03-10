document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Función para manejar el menú según el tamaño de la pantalla
    function handleMenu() {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
            navLinks.style.transform = 'translateY(-100%)';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.transform = '';
        }
    }
    
    // Inicializar el menú
    handleMenu();
    
    // Manejar clic en hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                setTimeout(function() {
                    navLinks.style.display = 'none';
                }, 300); // Esperar a que termine la transición
            } else {
                navLinks.style.display = 'flex';
                // Forzar un reflow para que la transición funcione
                navLinks.offsetHeight;
                navLinks.classList.add('active');
            }
            hamburger.classList.toggle('active');
        });
    }
    
    // Cerrar el menú al hacer clic en un enlace
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                setTimeout(function() {
                    navLinks.style.display = 'none';
                }, 300);
            }
        });
    });
    
    // Ajustar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', handleMenu);
}); 
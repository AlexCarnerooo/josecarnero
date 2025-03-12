document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Función para manejar el menú según el tamaño de la pantalla
    function handleMenu() {
        if (window.innerWidth <= 768) {
            if (!navLinks.classList.contains('active')) {
                navLinks.style.display = 'none';
                navLinks.style.transform = 'translateY(-100%)';
            }
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.transform = '';
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
        }
    }
    
    // Inicializar el menú
    handleMenu();
    
    // Manejar clic en hamburguesa
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Evitar que el clic se propague
            
            if (navLinks.classList.contains('active')) {
                // Cerrar menú
                closeMenu();
            } else {
                // Abrir menú
                openMenu();
            }
        });
    }
    
    function openMenu() {
        // Asegurar que el menú esté centrado
        navLinks.style.display = 'flex';
        navLinks.style.justifyContent = 'center';
        navLinks.style.alignItems = 'center';
        
        // Forzar un reflow para que la transición funcione
        navLinks.offsetHeight;
        navLinks.classList.add('active');
        hamburger.classList.add('active');
        body.style.overflow = 'hidden'; // Evitar scroll mientras el menú está abierto
    }
    
    function closeMenu() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = ''; // Permitir scroll de nuevo
        setTimeout(function() {
            if (!navLinks.classList.contains('active')) {
                navLinks.style.display = 'none';
            }
        }, 300); // Esperar a que termine la transición
    }
    
    // Cerrar el menú al hacer clic en un enlace
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            
            closeMenu();
        }
    });
    
    // Ajustar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', handleMenu);
}); 
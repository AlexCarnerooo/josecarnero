document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
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
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que el clic se propague
            
            if (navLinks.classList.contains('active')) {
                // Cerrar menú
                navLinks.classList.remove('active');
                body.style.overflow = ''; // Permitir scroll de nuevo
                setTimeout(function() {
                    navLinks.style.display = 'none';
                }, 300); // Esperar a que termine la transición
            } else {
                // Abrir menú
                navLinks.style.display = 'flex';
                // Forzar un reflow para que la transición funcione
                navLinks.offsetHeight;
                navLinks.classList.add('active');
                body.style.overflow = 'hidden'; // Evitar scroll mientras el menú está abierto
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
                body.style.overflow = ''; // Permitir scroll de nuevo
                setTimeout(function() {
                    navLinks.style.display = 'none';
                }, 300);
            }
        });
    });
    
    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
            setTimeout(function() {
                navLinks.style.display = 'none';
            }, 300);
        }
    });
    
    // Ajustar el menú al cambiar el tamaño de la ventana
    window.addEventListener('resize', handleMenu);
}); 
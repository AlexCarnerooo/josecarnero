document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (!hamburger || !navLinks) {
        console.error('Elementos de navegación no encontrados');
        return;
    }

    // Función para añadir iconos sociales al menú desplegable
    function addSocialIconsToMenu() {
        if (!document.querySelector('.social-menu-icons')) {
            const socialIcons = document.querySelector('.social-icons');
            if (socialIcons) {
                const socialMenuIcons = document.createElement('div');
                socialMenuIcons.className = 'social-menu-icons';
                
                // Determinar si estamos en el índice o en una subpágina
                const isIndex = window.location.pathname.endsWith('index.html') || 
                               window.location.pathname.endsWith('/') ||
                               window.location.pathname.split('/').pop() === '';
                
                // Base path para las imágenes
                const basePath = isIndex ? 'assets/images/' : '../assets/images/';
                
                // Crear los iconos sociales manualmente para asegurar consistencia
                const gmailLink = document.createElement('a');
                gmailLink.href = 'mailto:jcarnerovillar@gmail.com';
                gmailLink.target = '_blank';
                
                const gmailImg = document.createElement('img');
                gmailImg.src = basePath + 'gmail.png';
                gmailImg.alt = 'Gmail';
                
                gmailLink.appendChild(gmailImg);
                
                const instagramLink = document.createElement('a');
                instagramLink.href = 'https://www.instagram.com/jose_carnero_/?igsh=MWRoMzQ4d2VjNTVzNg%3D%3D#';
                instagramLink.target = '_blank';
                
                const instagramImg = document.createElement('img');
                instagramImg.src = basePath + 'instagram.png';
                instagramImg.alt = 'Instagram';
                
                instagramLink.appendChild(instagramImg);
                
                // Añadir los enlaces al contenedor
                socialMenuIcons.appendChild(gmailLink);
                socialMenuIcons.appendChild(instagramLink);
                
                // Añadir el contenedor al menú
                navLinks.appendChild(socialMenuIcons);
            }
        }
    }
    
    // Función para destacar la página actual
    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const links = navLinks.querySelectorAll('a');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('active');
            
            if (currentPath.endsWith(href)) {
                link.classList.add('active');
            }
        });
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
        
        // Eliminar cualquier social-menu-icons existente para evitar duplicados
        const existingSocialIcons = navLinks.querySelector('.social-menu-icons');
        if (existingSocialIcons) {
            navLinks.removeChild(existingSocialIcons);
        }
        
        // Añadir iconos sociales al menú
        addSocialIconsToMenu();
        
        // Destacar la página actual
        highlightCurrentPage();
        
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

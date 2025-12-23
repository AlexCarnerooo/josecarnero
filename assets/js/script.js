document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada correctamente');
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const socialIcons = document.querySelector('.social-icons');

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
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Si el menú está activo, mover los iconos sociales dentro del menú
        if (navLinks.classList.contains('active')) {
            const menuSocialIcons = socialIcons.cloneNode(true);
            menuSocialIcons.classList.add('menu-social-icons');
            navLinks.appendChild(menuSocialIcons);
        } else {
            // Remover los iconos clonados cuando se cierra el menú
            const menuSocialIcons = navLinks.querySelector('.social-icons');
            if (menuSocialIcons) {
                menuSocialIcons.remove();
            }
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

    // Desplazamiento suave al abrir detalles de eventos
    const accordions = document.querySelectorAll('.event-accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('toggle', function() {
            if (accordion.open) {
                setTimeout(() => {
                    accordion.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }, 150);
            }
        });
    });

    // Carruseles de imágenes en la página de eventos (por ejemplo San Xurxo)
    const carousels = document.querySelectorAll('.event-carousel');

    carousels.forEach(carousel => {
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const dots = Array.from(carousel.querySelectorAll('.dot'));
        const prevBtn = carousel.querySelector('.carousel-control.prev');
        const nextBtn = carousel.querySelector('.carousel-control.next');

        if (!slides.length) return;

        let currentIndex = 0;
        let intervalId = null;
        const AUTO_INTERVAL = 5000;

        function showSlide(index) {
            currentIndex = (index + slides.length) % slides.length;

            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentIndex);
            });

            if (dots.length) {
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentIndex);
                });
            }
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        function startAuto() {
            if (intervalId) return;
            intervalId = setInterval(nextSlide, AUTO_INTERVAL);
        }

        function stopAuto() {
            if (!intervalId) return;
            clearInterval(intervalId);
            intervalId = null;
        }

        // Controles
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopAuto();
                nextSlide();
                startAuto();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopAuto();
                prevSlide();
                startAuto();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAuto();
                showSlide(index);
                startAuto();
            });
        });

        // Pausar autoplay al pasar el ratón por encima (solo desktop)
        carousel.addEventListener('mouseenter', stopAuto);
        carousel.addEventListener('mouseleave', startAuto);

        // Iniciar
        showSlide(0);
        startAuto();
    });
});

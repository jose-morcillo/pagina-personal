// Archivo JavaScript (script.js)

// Función para cambiar el estado activo del menú de navegación
function setActiveNavItem() {
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            navItems.forEach((navItem) => {
                navItem.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
}

// Función para mostrar el contenido predeterminado (Sobre Mí)
function showDefaultContent() {
    const defaultSection = document.getElementById('sobre-mi');
    defaultSection.style.display = 'block';
}

// Función para cargar el contenido de la sección seleccionada
function loadContent() {
    const navItems = document.querySelectorAll('nav ul li');
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            const sectionId = item.querySelector('a').getAttribute('href').substring(1);
            const sections = document.querySelectorAll('main section');
            sections.forEach((section) => {
                section.style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
        });
    });
}

// Cargar el contenido predeterminado y establecer el estado activo
showDefaultContent();
setActiveNavItem();
loadContent();

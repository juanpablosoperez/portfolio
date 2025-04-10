// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de las habilidades al hacer hover
document.querySelectorAll('.skills-list li').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Actualizar el año del copyright automáticamente
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Juan Pablo Soperez. Todos los derechos reservados.`;

// Efecto de aparición suave al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
}); 
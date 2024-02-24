// JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});


document.querySelectorAll('p').forEach(p => {
    p.addEventListener('mouseover', function () {
        const dx = Math.random() * 20 - 10; // desplazamiento aleatorio en X entre -10 y 10
        const dy = Math.random() * 20 - 10; // desplazamiento aleatorio en Y entre -10 y 10
        this.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    p.addEventListener('mouseout', function () {
        this.style.transform = 'translate(0, 0)';
    });
});

document.querySelectorAll('h2').forEach(h2 => {
    h2.addEventListener('mouseover', function () {
        this.style.transform = 'translateX(10px)';
    });
    h2.addEventListener('mouseout', function () {
        this.style.transform = 'translateX(0)';
    });
});
/*
Este JavaScript agrega un evento de 'mouseover'
a cada celda de la tabla que cambia el color de fondo
a gris claro cuando el mouse se mueve sobre la celda.
y un evento de 'mouseout' que cambia el color de fondo
de la celda a blanco cuando el mouse se mueve fuera de la celda.
*/
document.querySelectorAll('td').forEach(td => {
    td.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e0dbc5';
    });
    td.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#ebe8da';
    });
});

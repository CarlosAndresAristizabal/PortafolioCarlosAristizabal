const menu = document.querySelector('#navegacion__lista'),
    activeMenu = document.querySelectorAll('.nav__lista__link'),
    modal1 = document.querySelector('.abrirModalDiseno'),
    modal2 = document.querySelector('.abrirModalWeb'),
    modal3 = document.querySelector('.abrirModal3D'),
    modalDiseno = document.querySelector('.modalDiseno'),
    modalWeb = document.querySelector('.modalWeb'),
    modal3D = document.querySelector('.modal3D'),
    modal4 = document.querySelector('.abrirModalCrusoUno'),
    modal5 = document.querySelector('.abrirModalCrusoDos'),
    modal6 = document.querySelector('.abrirModalCrusoTres'),
    modal7 = document.querySelector('.abrirModalCrusoCuatro'),
    modal8 = document.querySelector('.abrirModalCrusoCinco'),
    modal9 = document.querySelector('.abrirModalCrusoSeis'),
    modal10 = document.querySelector('.abrirModalCrusoSiete'),
    modal11 = document.querySelector('.abrirModalCrusoOcho'),
    modal12 = document.querySelector('.abrirModalCrusoNueve'),
    modalCursoUno = document.querySelector('.CursoUno'),
    modalCursoDos = document.querySelector('.CursoDos'),
    modalCursoTres = document.querySelector('.CursoTres'),
    modalCursoCuatro = document.querySelector('.CursoCuatro'),
    modalCursoCinco = document.querySelector('.CursoCinco'),
    modalCursoSeis = document.querySelector('.CursoSeis'),
    modalCursoSiete = document.querySelector('.CursoSiete'),
    modalCursoOcho = document.querySelector('.CursoOcho'),
    modalCursoNueve = document.querySelector('.CursoNueve'),
    cerrarModal = document.querySelectorAll('.modal__cerrar'),
    cerrarModal_curso = document.querySelectorAll('.modal__cerrar_curso');


activeMenu.forEach(item => {
    item.addEventListener('click', e => {
        activeMenu.forEach(item => {
            item.classList.remove('active', 'activo');
            if (screen.width < 600) {
                item.classList.remove('active');
            }
        });
        item.classList.add('active', 'activo');
    });
});


ScrollReveal().reveal('.anima_bottom', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px',
});

ScrollReveal().reveal('.anima_top', {
    duration: 4000,
    origin: 'top',
    distance: '100px',
});
ScrollReveal().reveal('.anima_left', {
    duration: 4000,
    origin: 'left',
    distance: '-200px',
});
ScrollReveal().reveal('.anima_rigth', {
    duration: 4000,
    origin: 'rigth',
    distance: '-300px',
});

modal1.addEventListener('click', e => {
    e.preventDefault();
    modalDiseno.classList.add('modal__mostrar');
});
modal2.addEventListener('click', e => {
    e.preventDefault();
    modalWeb.classList.add('modal__mostrar');
});
modal3.addEventListener('click', e => {
    e.preventDefault();
    modal3D.classList.add('modal__mostrar');
});
modal4.addEventListener('click', e => {
    e.preventDefault();
    modalCursoUno.classList.add('modal__mostrar');
});
modal5.addEventListener('click', e => {
    e.preventDefault();
    modalCursoDos.classList.add('modal__mostrar');
});
modal6.addEventListener('click', e => {
    e.preventDefault();
    modalCursoTres.classList.add('modal__mostrar');
});
modal7.addEventListener('click', e => {
    e.preventDefault();
    modalCursoCuatro.classList.add('modal__mostrar');
});
modal8.addEventListener('click', e => {
    e.preventDefault();
    modalCursoCinco.classList.add('modal__mostrar');
});
modal9.addEventListener('click', e => {
    e.preventDefault();
    modalCursoSeis.classList.add('modal__mostrar');
});
modal10.addEventListener('click', e => {
    e.preventDefault();
    modalCursoSiete.classList.add('modal__mostrar');
});
modal11.addEventListener('click', e => {
    e.preventDefault();
    modalCursoOcho.classList.add('modal__mostrar');
});
modal12.addEventListener('click', e => {
    e.preventDefault();
    modalCursoNueve.classList.add('modal__mostrar');
});
cerrarModal.forEach(item => {
    item.addEventListener('click', e => {
        modalWeb.classList.remove('modal__mostrar');
        modalDiseno.classList.remove('modal__mostrar');
        modal3D.classList.remove('modal__mostrar');
    });
});
cerrarModal_curso.forEach(item => {
    item.addEventListener('click', e => {
        modalCursoUno.classList.remove('modal__mostrar');
        modalCursoDos.classList.remove('modal__mostrar');
        modalCursoTres.classList.remove('modal__mostrar');
        modalCursoCuatro.classList.remove('modal__mostrar');
        modalCursoCinco.classList.remove('modal__mostrar');
        modalCursoSeis.classList.remove('modal__mostrar');
        modalCursoSiete.classList.remove('modal__mostrar');
        modalCursoOcho.classList.remove('modal__mostrar');
        modalCursoNueve.classList.remove('modal__mostrar');
    });
});



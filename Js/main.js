const menu = document.querySelector('#navegacion__lista')
const modal1 = document.querySelector('.abrirModalDiseno')
const modal2 = document.querySelector('.abrirModalWeb')
const modal3 = document.querySelector('.abrirModal3D')
const modalDiseno = document.querySelector('.modalDiseno')
const modalWeb = document.querySelector('.modalWeb')
const modal3D = document.querySelector('.modal3D')
const modal4 = document.querySelector('.abrirModalCrusoUno')
const modal5 = document.querySelector('.abrirModalCrusoDos')
const modal6 = document.querySelector('.abrirModalCrusoTres')
const modal7 = document.querySelector('.abrirModalCrusoCuatro')
const modal8 = document.querySelector('.abrirModalCrusoCinco')
const modal9 = document.querySelector('.abrirModalCrusoSeis')
const modal10 = document.querySelector('.abrirModalCrusoSiete')
const modal11 = document.querySelector('.abrirModalCrusoOcho')
const modal12 = document.querySelector('.abrirModalCrusoNueve')
const modalCursoUno = document.querySelector('.CursoUno')
const modalCursoDos = document.querySelector('.CursoDos')
const modalCursoTres = document.querySelector('.CursoTres')
const modalCursoCuatro = document.querySelector('.CursoCuatro')
const modalCursoCinco = document.querySelector('.CursoCinco')
const modalCursoSeis = document.querySelector('.CursoSeis')
const modalCursoSiete = document.querySelector('.CursoSiete')
const modalCursoOcho = document.querySelector('.CursoOcho')
const modalCursoNueve = document.querySelector('.CursoNueve')
const cerrarModal = document.querySelectorAll('.modal__cerrar')
const cerrarModal_curso = document.querySelectorAll('.modal__cerrar_curso')

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



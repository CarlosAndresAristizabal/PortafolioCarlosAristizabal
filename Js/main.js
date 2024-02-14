import dataDiseno from './datadiseno.js'
import data3D from './data3d.js'

const activeMenu = document.querySelectorAll('.nav__lista__link'),
    modalDiseno = document.querySelector('.modalDiseno'),
    modal3D = document.querySelector('.modal3D'),
    modalWeb = document.querySelector(".modalWeb"),
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
    cerrarModal_curso = document.querySelectorAll('.modal__cerrar_curso')

activeMenu.forEach(item => {
    item.addEventListener('click', () => {
        activeMenu.forEach(item => {
            item.classList.remove('active', 'activo');
            if (screen.width < 600) {
                item.classList.remove('active');
            }
        });
        item.classList.add('active', 'activo');
    });
});
alert('Estamos actualizando')


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


const itemsDiseno = document.getElementById('cardsDiseno')
const items3D = document.getElementById('cards3D')
const cardDiseno = document.getElementById('templateCardsDiseno').content
const fragment = document.createDocumentFragment()
const slider = document.querySelector(".slider__content__img");

document.addEventListener('click', e => {

    // -------------- click open modals of the project--------
    const modals = e.target.dataset.id
    const quitarClass = document.querySelector(" .modal__mostrar")

    console.log('aca', e.target)
    if (modals == 'tresD') {
        modal3D.classList.add('modal__mostrar');
        e.stopPropagation()
        pintarCards3D(data3D)
    } if (modals == 'web') {
        e.stopPropagation()
        modalWeb.classList.add('modal__mostrar');
    } if (modals == 'diseno') {
        modalDiseno.classList.add('modal__mostrar');
        e.stopPropagation()
        pintarCardsDiseno(dataDiseno)
    }
    //--------------------- click close modals of the project-------------------
    if (e.target.matches('.modal__cerrar')) {
        quitarClass.classList.remove("modal__mostrar")
    }
    if (e.target.matches('.modal__cerrar_curso')) {
        modalWeb.classList.add('modal__mostrar');
        quitarClass.classList.remove("modal__mostrar")
    }
    // ------------------next and prev of the courses-----------
    if (e.target.classList.contains('button-prev')) {
        slider.scrollLeft -= 500
        // e.target.classList.contains('button-prev')
        e.stopPropagation()
    }
    if (e.target.classList.contains('button-next')) {
        slider.scrollLeft += 500
        // e.target.classList.contains('button-next')
        e.stopPropagation()
    }
    e.stopPropagation()

})

// creation of an arrow function for the section of the cards of the design projects through an object and using a template
const pintarCardsDiseno = dataDiseno => {
    const datos = dataDiseno
    datos.forEach(itemsDiseno => {
        cardDiseno.querySelector('figcaption').textContent = itemsDiseno.titulo;
        cardDiseno.querySelector('img').setAttribute('data-src', itemsDiseno.urlImagen)
        cardDiseno.querySelector('img').setAttribute('alt', itemsDiseno.titulo)

        const clone = cardDiseno.cloneNode(true)
        fragment.appendChild(clone)
    })
    itemsDiseno.appendChild(fragment)

}
// creation of an arrow function for the section of the cards of the 3D design  projects through an object and using a template
const pintarCards3D = data3D => {
    const datos = data3D
    datos.forEach(items3D => {
        cardDiseno.querySelector('figcaption').textContent = items3D.titulo;
        cardDiseno.querySelector('img').setAttribute('data-src', items3D.urlImagen)
        cardDiseno.querySelector('img').setAttribute('alt', items3D.titulo)

        const clone = cardDiseno.cloneNode(true)
        fragment.appendChild(clone)
    })
    items3D.appendChild(fragment)

}


import dataDiseno from './datadiseno.js'
import data3D from './data3d.js'
import dataweb from './dataweb.js'
// -----------------Menu-------------
const activeMenu = document.querySelectorAll('.nav__lista__link')
// ---------------Cards of the project's manners-----------------
const modalDiseno = document.querySelector('.modalDiseno')
const modal3D = document.querySelector('.modal3D')
const modalWeb = document.querySelector(".modalWeb")
const modalCurso = document.querySelector(".modalCurso")
// -------------------captures where the fragments of the templates will be placed---------------
const itemsDiseno = document.getElementById('cardsDiseno')
const items3D = document.getElementById('cards3D')
const itemsWeb = document.getElementById('cardsWeb')
const itemsCurso = document.getElementById('cursoId')
// ---------------Templates---------------
const cardDiseno = document.getElementById('templateCardsProyecto').content
const cardWeb = document.getElementById('templateCardsWeb').content
const cardCurso = document.getElementById('templateCursoWeb').content
// ---------------Fragment------------
const fragment = document.createDocumentFragment()
// ---------------Variables----------------
let galeriaImg = []
let indexImg = 0
// ------------- Activating each item in the menu bar----------
const verificacion = (entries) => {
  entries.forEach(itemEntry => {
    const id = itemEntry.target.getAttribute('id')
    const activo = document.querySelector(`.nav__lista__item a[href="#${id}"]`)
    if (itemEntry.isIntersecting) {
      activo.classList.add('activo')
    } else {
      activo.classList.remove('activo')
    }
  })
}

const observer = new IntersectionObserver(verificacion, { rootMargin: "-85% 0px -15% 0px" })

const activaMenu = () => {
  activeMenu.forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById("check").checked = false;
      activeMenu.forEach(item => {
        item.classList.remove('activo');
      });
      item.classList.add('activo');
    });
    const hash = item.getAttribute("href")
    const targetItem = document.querySelector(hash)
    observer.observe(targetItem)

  });
}
activaMenu()

document.addEventListener('click', e => {

  // -------------- click open modals of the project--------
  const modals = e.target.dataset.id
  const quitarClass = document.querySelector(".modal__mostrar")

  if (modals == 'tresD') {
    modal3D.classList.add('modal__mostrar');
    pintarCards3D(data3D)
    e.stopPropagation()
  } if (modals == 'web') {
    modalWeb.classList.add('modal__mostrar');
    pintarCardsWeb(dataweb)
    e.stopPropagation()
  } if (modals == 'diseno') {
    modalDiseno.classList.add('modal__mostrar');
    pintarCardsDiseno(dataDiseno)
    e.stopPropagation()
  }
  // --------------capture the course by means of the id --------------
  if (e.target.classList.contains('btnImagen')) {
    modalCurso.classList.add('modal__mostrar_curso')

    obtenerCurso(e.target.dataset.id)
    e.stopPropagation()

  }
  //--------------------- click close modals of the project-------------------
  if (e.target.matches('.modal__cerrar')) {
    quitarClass.classList.remove("modal__mostrar")
  }
  if (e.target.matches('.modal__cerrar_curso')) {
    modalCurso.classList.remove("modal__mostrar_curso")
    galeriaImg = []
    indexImg = 0
  }
  // e.stopPropagation()
})
// creation of an arrow function for the section of the cards of the design projects through an object and using a template
const pintarCardsDiseno = dataDiseno => {
  itemsDiseno.innerHTML = ""
  const datosAleatorios = dataDiseno.sort(() => Math.random() - 0.5)
  datosAleatorios.forEach(itemsDiseno => {
    cardDiseno.querySelector('figcaption').textContent = itemsDiseno.titulo;
    cardDiseno.querySelector('img').setAttribute('src', itemsDiseno.urlImagen)
    cardDiseno.querySelector('img').setAttribute('alt', itemsDiseno.titulo)
    const clone = cardDiseno.cloneNode(true)
    fragment.appendChild(clone)
  })
  itemsDiseno.appendChild(fragment)
}
// creation of an arrow function for the section of the cards of the 3D design  projects through an object and using a template
const pintarCards3D = data3D => {
  items3D.innerHTML = ""
  const datosAleatorios = data3D.sort(() => Math.random() - 0.5)
  datosAleatorios.forEach(items3D => {
    cardDiseno.querySelector('figcaption').textContent = items3D.titulo;
    cardDiseno.querySelector('img').setAttribute('src', items3D.urlImagen)
    cardDiseno.querySelector('img').setAttribute('alt', items3D.titulo)
    const clone = cardDiseno.cloneNode(true)
    fragment.appendChild(clone)

  })
  items3D.appendChild(fragment)
}
const originalDataweb = [ ...dataweb ];
// Creation of an arrow function for section of the cards of the web design  projects through an object and using a template
const pintarCardsWeb = dataweb => {
  itemsWeb.innerHTML = ""
  const datosAleatorios = dataweb.sort(() => Math.random() - 0.5)
  datosAleatorios.forEach(itemsWeb => {
    cardWeb.querySelector('h2').textContent = itemsWeb.titulo;
    cardWeb.querySelector('.parrafo').innerHTML = itemsWeb.descripcion;
    cardWeb.querySelector('img').setAttribute('src', itemsWeb.urlImage)
    cardWeb.querySelector('img').setAttribute('alt', itemsWeb.titulo)
    cardWeb.querySelector('.btnImagen').dataset.id = itemsWeb.id
    const clone = cardWeb.cloneNode(true)
    fragment.appendChild(clone)
  })
  itemsWeb.appendChild(fragment)
}
// Creation of an arrow function to paint the courses according to their ID of each of the web design projects through an object and using a template.
const obtenerCurso = (itemId) => {
  const item2 = originalDataweb[ itemId - 1 ].galeria
  item2.forEach(item => {
    galeriaImg.push(item)
  })
  pintarCurso(galeriaImg)
}
//creation of an arrow function for the section of the gallery of the web projects through an object and using a template
const pintarCurso = (galeriaImg) => {
  itemsCurso.innerHTML = ""
  cardCurso.querySelector('.slider-item').setAttribute('src', galeriaImg[ indexImg ])
  cardCurso.querySelector('.slider-item').classList.add('animeImgIn', 'animeImgOut')
  const clone = cardCurso.cloneNode(true)
  fragment.appendChild(clone)
  itemsCurso.appendChild(fragment)
  imagenCursoSiguiente()
}

//We perform the movements of the Slide
const imagenCursoSiguiente = () => {
  const btnNext = document.getElementById('siguiente')
  const btnBack = document.getElementById('atras')

  btnNext.addEventListener('click', () => {
    if (indexImg == galeriaImg.length - 1) {
      btnNext.setAttribute('disable', true)
    } else if (indexImg <= galeriaImg.length - 1) {
      indexImg++;
      pintarCurso(galeriaImg)
      itemsCurso.firstElementChild.firstChild.nextElementSibling.classList.remove('animeImgOut')
    }
  })
  btnBack.addEventListener('click', () => {
    if (indexImg == 0) {
      btnNext.setAttribute('disable', true)
    } else if (indexImg <= galeriaImg.length - 1) {
      indexImg--;
      pintarCurso(galeriaImg)
      itemsCurso.firstElementChild.firstChild.nextElementSibling.classList.remove('animeImgIn')
    }
  })
}

ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 3000,
  delay: 100,

});

ScrollReveal().reveal('.nav, .logo ', { container: '.nav', delay: 100, origin: 'left', interval: 200 })
ScrollReveal().reveal('.nav__lista__link ', { container: '.nav', delay: 300, origin: 'top', interval: 400, opacity: 1 })
ScrollReveal().reveal('.saludo, .profecion', { delay: 250, origin: 'bottom', interval: 2500 })
ScrollReveal().reveal('figure', { delay: 200, origin: 'right' })
ScrollReveal().reveal('.inicio__nombre, .inicio__profecion, .text_Inicio', { delay: 400, origin: 'top', interval: 400 })
ScrollReveal().reveal('.titulo, .subtitulos', { delay: 400, origin: 'bottom', interval: 1000 })
ScrollReveal().reveal('.tab, .icon_redes', { delay: 200, origin: 'left', interval: 500 })
ScrollReveal().reveal('.contenidoTabs, .parrafo_redes ', { delay: 400, origin: 'right' })
ScrollReveal().reveal('.flexcard, .box', { delay: 100, origin: 'top', interval: 500 })


// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$.fn.cycle.defaults.timeout = 10000
$.fn.cycle.defaults.random = true

$(document).ready(function() {
  // Seleccionar el elemento con id books, guardalo en vble llamada books
  let $books = $('#books')
  $books.cycle()

  // Creo un elem div llamado books-controls, guardalo en vble llamada controls
  let $controls = $('<div id="books-controls"></div>')

  // Lo inserto despuÃ©s de la div anterior
  $controls.insertAfter($books)

  // Crea un <button> con el texto Pause, que al hacer click, llame a una funcion callback(), en la que se aplique cycle a books en pause. Añadir a este botón el icono ui-icon-pause de pausa(las dos barras)
  $('<button>Pause</button>')
    .on('click', function(e) {
      e.preventDefault()
      $books.cycle('pause')
    })
    //Colgar el elemento de la div controls
    .appendTo($controls)

  // Añadir otro botón Resume exactamente igual
  $('<button>Resume</button>')
    .on('click', function(e) {
      e.preventDefault()
      $books.cycle('resume')
    })
    .appendTo($controls)

  //Al hacer el over sobre books, lanza una funcion callback en la que con un metodo para buscar a todos los
  //elementos de clase .title se le aplique una animation que cambie el color de fondo y el color de la letra
  $books.hover(function() {
    $('.title').each(function(index, element) {
      $(element)
        .funText(33, 'reverseCandy')
        .css({ color: '#ff0000' })
    })
  })

  //Al hacer click sobre h1, llamar a una función para aplicar toggleClass con hightligthed, de forma suave
  $('h1').on('click', function() {
    $(this).toggleClass('highlighted', 'slow')
  })
})

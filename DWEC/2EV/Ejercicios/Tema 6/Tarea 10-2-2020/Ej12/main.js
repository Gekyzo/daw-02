$(document).ready(function() {
  // Primero, oculto la respuesta...
  $('#respuesta').hide()

  // ...Después, asocio el evento al botón
  $('#trigger').on('click', function() {
    let $answer = $('#respuesta')
    $answer.toggle()

    // Actualizo el texto del botón según el estado de la respuesta
    if ($answer.css('display') === 'block') {
      $(this).html('Ocultar respuesta')
    } else {
      $(this).html('Mostrar respuesta')
    }
  })
})

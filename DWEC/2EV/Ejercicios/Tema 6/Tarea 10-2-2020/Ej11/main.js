$(document).ready(function() {
  // Primero, oculto todas las respuestas
  $('[id^="respuesta"]').hide()

  // Después, añado el evento
  $('[id^="trigger"]').on('click', function() {
    let id = $(this).attr('id')
    let pattern = /\d/

    // Si el texto clicado contiene un número, muestro sólo la respuesta con ese mismo número
    if (pattern.test(id)) {
      let number = id.match(pattern)[0]
      $('#respuesta_' + number).toggle()

      // Sino, muestro todas las respuestas
    } else {
      $('[id^="respuesta"]').toggle()
    }
  })
})

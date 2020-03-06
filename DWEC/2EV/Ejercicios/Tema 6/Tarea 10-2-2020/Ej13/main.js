$(document).ready(function() {
  // Primero, oculto la respuesta...
  $('#respuesta').hide()

  // ...Después, asocio el evento a los botónes
  $('#trigger_open').on('click', function() {
    $('#respuesta').show()
  })
  $('#trigger_close').on('click', function() {
    $('#respuesta').hide()
  })
})

$(document).ready(function() {
  $('#respuesta').hide()
  $('#trigger').on('click', function() {
    $('#respuesta').toggle('fast')
  })
})

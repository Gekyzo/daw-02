$('#main form').on('submit', function(e) {
    e.preventDefault()

    var pet = $('#main form').attr('action')
    var met = $('#main form').attr('method')
    var nom, m, msj

    $.ajax({
        url: pet,
        type: met,
        data: {
            nombre: document.fo.nombre.value,
            mail: document.fo.mail.value,
            mensaje: document.fo.mensaje.value,
        },
        beforeSend: function() {
            // Cargar spinner
        },
        success: function(data) {
            $('button')
                .removeClass('btn-outline-primary')
                .addClass('btn-outline-success')
            $('#status')
                .addClass('btn-success')
                .text(data)
            console.log(data)
        },
        error: function(jqXHR, estado, error) {
            $('button')
                .removeClass('btn-outline-primary')
                .addClass('btn-outline-danger')
            $('#status')
                .addClass('btn-danger')
                .text(estado)
            console.log(estado)
            console.log(error)
        },
        complete: function(jqXHR, estado) {
            console.log(estado)
        },
        timeout: 10000,
    })
})

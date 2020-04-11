$(function () {
    $('.confirmation').on('click', 'button', function () {
        $.ajax('confirmation.html', {
            timeout: 3000,
            success: function (response) {
                $('.ticket').html(response).slideDown();
            }
        })
    })
    $('.ticket').on('click', '.view-boarding-pass', function (e) {
        e.preventDefault()
        $('.view-boarding-pass').hide()
        $('.boarding-pass').show()
    })
})

// The dafault method for $.ajax is GET

// A.7.4:
// In order to get control of a possible error, we can use the 'error' method inside the $.ajax request.

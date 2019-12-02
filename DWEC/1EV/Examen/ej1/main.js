var countdown = setInterval(run, 1000)
var total = 5
var images = document.getElementsByClassName('escondidos')
var currentImage = 0
var timerFuegos

function run() {
    var target = document.getElementById('countdown')
    target.innerText = total
    if (total > 0) {
        total--
    } else {
        clearInterval(countdown)
        timerFuegos = setInterval(fuegos, 500)
    }
}

function fuegos() {
    // Mostrar las imágenes de 1 en 1
    if (currentImage <= 4) {
        images[currentImage].setAttribute('style', 'display: inline-block')
        currentImage++
    } else {
        clearInterval(timerFuegos)
    }
    // Mostrar todas las imágenes a la vez
    // Array.from(images).forEach(image => {
    //     setInterval(image.setAttribute('style', 'display: inline-block'), 500)
    // })
}

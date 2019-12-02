// Paso 1: Encontrar el elemento button
var button = document.getElementById('button')

// Paso 2: Define una function anónima y guárdala en una vble llamada onButtonClick
// En esta función, según el valor elegido en la select, construimos un mensaje en distinto
// idioma el saludo: Hola, Hello, Bonjour y el nombre introducido en el campo name.
// Este mensaje, lo puedo ver en todos los idiomas que vaya eligiendo
var onButtonClick = function() {
    var selectedOption = document.getElementById('lang').value
    var name = document.getElementById('name').value
    var message = ''
    switch (selectedOption) {
        case 'es':
            message += 'Hola, '
            break
        case 'en':
            message += 'Hello, '
            break
        case 'plt':
            message += 'Bonjour, '
            break
        default:
            break
    }
    message += name
    document.getElementById('message').innerText = message
}

// Paso 3: Llamar al Escuchador de eventos, cuando suceda el click sobre el botón y aplicarle la función anterior.
button.addEventListener('click', onButtonClick)

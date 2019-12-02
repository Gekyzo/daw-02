function genera() {
    // Generar 2 números aleatorios entre 0 y 10
    var ranUno = Math.floor(Math.random() * 10)
    var ranDos = Math.floor(Math.random() * 10)

    // Obtener los nodos  div primero y segundo
    var divUno = document.getElementById('primero')
    var divDos = document.getElementById('segundo')

    // Obtener los nodos hijos
    var childUno = divUno.childNodes
    var childDos = divDos.childNodes

    // Crear un nuevo párrafo, párrafo1
    var pUno = document.createElement('p')

    // La variable numero1 debe ir como texto del párrafo primero
    pUno.innerHTML = ranUno

    // Si ya existía un párrafo, sustituirlo. Si no, añadirlo
    if (!childUno.length == 0) {
        childUno.forEach(child => {
            divUno.removeChild(child)
        })
    }
    divUno.appendChild(pUno)

    // Crear el otro nuevo párrafo, parrafo2
    var pDos = document.createElement('p')

    // La variable numero2 debe ir como texto del párrafo primero
    pDos.innerHTML = ranDos

    // Si ya existía un párrafo, sustituirlo. Si no, añadirlo
    if (!childDos.length == 0) {
        childDos.forEach(child => {
            divDos.removeChild(child)
        })
    }
    divDos.appendChild(pDos)
}

function compara() {
    // Obtener los nodos div primero y segundo
    var divUno = document.getElementById('primero')
    var divDos = document.getElementById('segundo')

    // Obtener los nodos hijos
    var childUno = divUno.childNodes
    var childDos = divDos.childNodes

    // Obtener los números a través del nodo Text de cada
    var numUno = divUno.innerText
    var numDos = divDos.innerText

    // nodo de tipo Element de los parrafos
    var pUno = childUno[0]
    var pDos = childDos[0]

    // Determinar el nodo párrafo cuyo nodo texto es mayor
    var mayor = numUno > numDos ? pUno : pDos

    // Obtener el nodo de la div resultado
    var divResultado = document.getElementById('resultado')

    // Si ya existía un párrafo de resultado anterior, sustituirlo. Si no, añadirlo
    if (!divResultado.childNodes.length == 0) {
        divResultado.childNodes.forEach(child => {
            divResultado.removeChild(child)
        })
    }
    divResultado.appendChild(mayor)
}

function ConstructorXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        /*Vemos si el objeto window posee el metodo XMLHttpRequest(Navegadores como Mozilla y Safari).*/ return new XMLHttpRequest() //Si lo tiene, crearemos el objeto
    } else if (window.ActiveXObject) {
        /*Sino tenia el metodo anterior,deberia ser el Internet Exp.*/ var versionesObj = new Array(
            'Msxml2.XMLHTTP.5.0',
            'Msxml2.XMLHTTP.4.0',
            'Msxml2.XMLHTTP.3.0',
            'Msxml2.XMLHTTP',
            'Microsoft.XMLHTTP'
        )

        for (var i = 0; i < versionesObj.length; i++) {
            try {
                return new ActiveXObject(versionesObj[i])
            } catch (errorControlado) {}
        }
    }
    throw new Error('No se pudo crear el objeto XMLHttpRequest')
}

function solicitar() {
    var request = ConstructorXMLHttpRequest()
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)

            document.getElementById('texto').innerHTML = this.responseText
        }
    }
    request.open('GET', 'file.txt', true)
    request.send()
}

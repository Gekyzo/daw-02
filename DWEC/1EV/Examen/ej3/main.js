function valid_email(str) {
    //Debe empezar por uno o más caracteres alfanúmerico, incluyendo el guión bajo.

    //Puede venir "." o un "-", 0 ó 1 vez, continuar con un caracter alfanúmerico o guion bajo una o más veces y todo esto anterior 0 ó más veces

    //Debe venir una @

    //Debe seguirle cualquier caracter alfanúmerico, incluyendo el guión bajo, 0 ó 1 vez

    //Puede venir "." o un "-", 0 ó 1 vez, continuar con un caracter alfanúmerico o guion bajo una o más veces y todo esto anterior 0 ó más veces

    //Para acabar, debe venir un punto y caracteres alfabéticos minúsculas, de los cuales, deben venir 2 o 3.

    var mailformat = new RegExp(
        /^[a-zA-Z0-9_]+([.-]?[a-zA-Z0-9_]+)?@[a-zA-Z0-9_]?([.-]?[a-zA-Z0-9_]+)?.[a-z0-9]{2,3}$/
    )
    //Hacer los casos de prueba suficientes, para probar todos los casos.

    //Dar un mensaje positivo en caso de coincidir con el patrón, y negativo en caso contrario.
    document.write(
        `El email <b>${str}</b> es ` +
            (str.match(mailformat) ? 'VÁLIDO' : 'INVÁLIDO') +
            '<br>'
    )
}

// Casos válidos
valid_email('ciro@gmail.com')
valid_email('ciro@gmail.es')
valid_email('ciro@gmail123.es')
valid_email('ciro_123@gmail.es')
valid_email('ciro123@gmail123.es')
valid_email('ciro.123@gmail123.es')
valid_email('ciro_123@gmail_123.es')
valid_email('ciro_123@gmail____123.es')
valid_email('_ciro@gmail.com')

// Casos inválidos
valid_email('*ciro@gmail.com')
valid_email('$ciro@gmail.com')
valid_email('ciro@gmail.comx')
valid_email('ciro/@gmail.com')
valid_email('ciro=gmail.com')
valid_email('ciro@/gmail.com')
valid_email('ciro@gmail.COM')

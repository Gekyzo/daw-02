var currentTotalProducts = 0;
var orderTotal = 0;

function showSummaryRows() {
    var sessionContent = window.sessionStorage;
    for (let i = 0; i < sessionContent.length / 2; i++) {
        var product = document.getElementById(
            sessionStorage.getItem('cart_' + i + '_id')
        );
        var productName = product.getElementsByClassName('product_name')[0]
            .innerHTML;
        var productPriceWithSymbol = product.getElementsByClassName(
            'product_price'
        )[0].innerHTML;
        var productPrice = parseInt(
            productPriceWithSymbol.substr(0, productPriceWithSymbol.length - 1)
        );
        var productQuantity = parseInt(
            sessionStorage.getItem('cart_' + i + '_quantity')
        );
        addSummaryRow(productName, productPrice, productQuantity);
    }
}
showSummaryRows();

function addToCart(product_id) {
    // Recoger información del producto
    var product = document.getElementById(product_id);
    var productName = product.getElementsByClassName('product_name')[0]
        .innerHTML;
    var productPriceWithSymbol = product.getElementsByClassName(
        'product_price'
    )[0].innerHTML;
    var productPrice = parseInt(
        productPriceWithSymbol.substr(0, productPriceWithSymbol.length - 1)
    );
    var productQuantity = parseInt(
        product.getElementsByClassName('product_quantity')[0].value
    );

    // Almacenar en sessionStorage
    addToSessionStorage(product_id, productQuantity);

    // Actualizar tabla resumen
    addSummaryRow(productName, productPrice, productQuantity);
}

function addToSessionStorage(productID, productQuantity) {
    sessionStorage.setItem('cart_' + currentTotalProducts + '_id', productID);
    sessionStorage.setItem(
        'cart_' + currentTotalProducts + '_quantity',
        productQuantity
    );
    currentTotalProducts++;
}

function addSummaryRow(productName, productPrice, productQuantity) {
    var summary = document.getElementById('summary_table');
    var row = summary.insertRow(-1);
    var cell_1 = row.insertCell(0);
    var cell_2 = row.insertCell(1);
    var cell_3 = row.insertCell(2);
    var cell_4 = row.insertCell(3);
    var cell_5 = row.insertCell(4);
    cell_1.innerHTML = productName;
    cell_2.innerHTML = productPrice;
    cell_3.innerHTML = productQuantity;
    cell_4.innerHTML = productPrice * productQuantity;
    cell_5.innerHTML =
        '<button onclick="deleteRow(' + row + ')">Borrar</button>';
    // Actualizar total del pedido
    updateSummaryTotal(productPrice, productQuantity);
}

function updateSummaryTotal(productPrice, productQuantity) {
    orderTotal += productPrice * productQuantity;
    document.getElementById('summary_amount').innerHTML = orderTotal;
}

function deleteRow(row) {
    // Pendiente
}

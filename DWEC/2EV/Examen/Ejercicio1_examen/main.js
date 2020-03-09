function addNewRow() {
    let rowIndex = 1
    let btn = $('.add-row')
    btn.on('click', function(event) {
        let newRow = $(`<tr><td>This is row ${rowIndex}</td></tr>`)
        $('tbody').append(newRow)
        rowIndex++
    })
}

function deleteLastRow() {
    let btn = $('.rem-row')
    btn.on('click', function(event) {
        $('tbody')
            .children()
            .last()
            .remove()
    })
}

function addClass() {
    let btn = $('.add-class')
    btn.on('click', function(event) {
        $('tbody')
            .addClass('abs')
            .find('tr:even')
            .addClass('green')
    })
}

function removeClass() {
    let btn = $('.rem-class')
    btn.on('click', function(event) {
        $('tbody')
            .removeClass('abs')
            .find('tr:even')
            .removeClass('green')
    })
}

function alternateStyle() {
    let btn = $('.toggle-class')
    btn.on('click', function(event) {
        $('tbody')
            .toggleClass('abs')
            .find('tr:even')
            .toggleClass('green')
    })
}

$(document).ready(function() {
    addNewRow()
    deleteLastRow()
    addClass()
    removeClass()
    alternateStyle()
})

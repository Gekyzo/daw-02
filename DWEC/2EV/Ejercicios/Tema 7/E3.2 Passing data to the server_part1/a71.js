//Write your code here
$(document).ready(function() {
    $('#letter-a a').on('click', function(event) {
        event.preventDefault()
        $('#dictionary').load('a.html')
    })

    $('#letter-b a').on('click', function(event) {
        event.preventDefault()
        $.getJSON('b.json', function(data) {
            let html = ''
            $.each(data, function(index, entry) {
                html += '<div class="entry">'
                html += '<h3 class="term">' + entry.term + '</h3>'
                html += '<div class="part">' + entry.part + '</div>'
                html += '<div class="definition">'
                html += entry.definition
                if (entry.quote) {
                    html += '<div class="quote">'
                    $.each(entry.quote, function(index, line) {
                        html += '<div class="quote-line">' + line + '</div>'
                    })
                    if (entry.author) {
                        html +=
                            '<div class="quote-author">' +
                            entry.author +
                            '</div>'
                    }
                    html += '</div>'
                }
                html += '</div>'
                html += '</div>'
            })
            $('#dictionary').html(html)
        })
    })

    $('#letter-c a').on('click', function(event) {
        event.preventDefault()
        $.getScript('c.js')
    })

    $('#letter-d a').on('click', function(event) {
        event.preventDefault()
        $.get('d.xml', function(data) {
            $('#dictionary').empty()
            $(data)
                .find('entry')
                .each(function() {
                    var $entry = $(this)
                    var html = '<div class="entry">'
                    html += '<h3 class="term">' + $entry.attr('term')
                    html += '</h3>'
                    html += '<div class="part">' + $entry.attr('part')
                    html += '</div>'
                    html += '<div class="definition">'
                    html += $entry.find('definition').text()
                    var $quote = $entry.find('quote')
                    if ($quote.length) {
                        html += '<div class="quote">'
                        $quote.find('line').each(function() {
                            html += '<div class="quote-line">'
                            html += $(this).text() + '</div>'
                        })
                        if ($quote.attr('author')) {
                            html += '<div class="quote-author">'
                            html += $quote.attr('author') + '</div>'
                        }
                        html += '</div>'
                    }
                    html += '</div>'
                    html += '</div>'
                    $('#dictionary').append($(html))
                })
        })
    })

    $('#letter-e a').on('click', function(event) {
        event.preventDefault()
        let requestData = { term: $(this).text() }
        $.get('e.php', requestData, function(data) {
            $('#dictionary').html(data)
        })
    })

    $('#letter-f form').submit(function(event) {
        event.preventDefault()
        let formValues = $(this).serialize()
        $.get('f.php', formValues, function(data) {
            $('#dictionary').html(data)
        })
    })
})

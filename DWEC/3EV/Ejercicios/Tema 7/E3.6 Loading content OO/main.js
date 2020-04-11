$(document).ready(function () {
    myPage.init()
});

var myPage = (function () {
    var app = {
        nav: $('nav ul li a'),
        content: $('section#main')
    }

    app.putContent = function (content) {
        app.content.html(content);
    }

    app.loadPage = function (page) {
        $.ajax({
            url: 'page.php',
            type: 'get',
            cache: true,
            data: { page: page },
            success: function (data) {
                app.putContent(data)
            },
            error: function () {
                app.putContent('We could not find that page')
            }
        })
    }

    app.init = function () {
        app.loadPage('home')
        app.nav.on('click', function (e) {
            e.preventDefault()
            var page = $(this).attr('href')
            app.loadPage(page)
        })
    }

    return app;
})()

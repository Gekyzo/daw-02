//Here you have to write your jQuery code
$(document).ready(function() {
    function resizeText() {
        var $speech = $('div.speech')
        var defaultFontSize = parseFloat($speech.css('fontSize'))
        var newFontSize = defaultFontSize

        $('[id^="switcher-"]').on('click', function() {
            var buttonId = $(this).attr('id')
            switch (buttonId) {
                case 'switcher-large':
                    newFontSize *= 1.4
                    break

                case 'switcher-small':
                    newFontSize /= 1.4
                    break

                case 'switcher-default':
                default:
                    newFontSize = defaultFontSize
                    break
            }

            newFontSize = parseFloat(newFontSize).toFixed(2)
            $speech.css('fontSize', newFontSize + 'px')
        })
    }

    function showMore() {
        var $firstPara = $('p').eq(1)
        $firstPara.hide()

        $('a.more').on('click', function(e) {
            e.preventDefault()

            if ($firstPara.is(':hidden')) {
                $firstPara.fadeIn('slow')
                $(this).text('read less')
            } else {
                $firstPara.fadeOut('slow')
                $(this).text('read more')
            }
        })
    }

    resizeText()
    showMore()
})

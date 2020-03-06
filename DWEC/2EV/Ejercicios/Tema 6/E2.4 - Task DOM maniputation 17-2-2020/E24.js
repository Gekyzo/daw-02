//Here you have to write your jQuery code
$(document).ready(function() {
  // Objective #1 & #2
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: 'external',
    title: function() {
      return 'Learn more at Wikipedia about ' + $(this).html()
    },
    id: function(index) {
      return 'wikipedia-' + index
    },
  })

  // Objective #3
  $('<a href="#top">back to top</a>').insertAfter('p')
  $('<a id="top"></a>').prependTo('body')

  // Objective #4
  let $notes = $('<ol id="notes"></ol>')
  $('.footnote').each(function(index, footnote) {
    $('<sup>' + (index + 1) + '</sup>').insertBefore(footnote)
    $(footnote)
      .appendTo($notes)
      .wrap('<li></li>')
  })

  $('div#footer').append($notes)
})

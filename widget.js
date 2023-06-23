(function() {
  var el = $('#sample')
    , inner = $('<div></div>').addClass('text').html('Click me').appendTo(el);

  el.setWidgetSize(2, 1);

  $('<div></div>')
    .addClass('title')
    .text('Sample app')
    .appendTo(el);

  el.click(function() {
    window.location = '/apps/data/projet/index.html';
  });
})();

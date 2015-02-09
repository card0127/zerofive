// Needs latest version of jQuery to run

$(function() {
  $('body').removeClass('noscript');

  $('.toggle-btn').click(function() {
    toggleNav();
  });
});

function toggleNav() {
  if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
    // Display Nav when closed
    $('.site-wrapper').attr('data-state', 'slide-open');
    $('#menu-icon').addClass('icon-i-close');
    $('#menu-icon').removeClass('icon-i-menu');
  } else {
    // Hide Nav when open
    $('.site-wrapper').attr('data-state', 'slide-closed');
    $('#menu-icon').removeClass('icon-i-close');
    $('#menu-icon').addClass('icon-i-menu');
  }
}


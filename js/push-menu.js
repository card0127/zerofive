$(function(){
    $('#header_nav').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#header_nav').data('size') == 'big')
        {
            $('#header_nav').data('size','small');
            $('#header_nav').stop().animate({
                height:'80px'
            },600);
        }
    }
    else
    {
        if($('#header_nav').data('size') == 'small')
        {
            $('#header_nav').data('size','big');
            $('#header_nav').stop().animate({
                height:'120px'
            },600);
        }
    }
});



$(function() {
  var $menu = $('nav#menu'),
    $html = $('html, body');

  $menu.mmenu({
    dragOpen: true

  });

  $menu.find( 'li > a' ).on(
    'click',
    function( e )
    {
      var href = $(this).attr( 'href' );

      //  if the clicked link is linked to an anchor, scroll the page to that anchor
      if ( href.slice( 0, 1 ) == '#' )
      {
        $menu.one(
          'closed.mm',
          function()
          {
            setTimeout(
              function()
              {
                $html.animate({
                  scrollTop: $( href ).offset().top
                });
              }, 10
            );
          }
        );
      }
    }
  );
});

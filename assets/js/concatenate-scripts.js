---
---

var sections = $('.section'),
    links = $('.link'),
    lis = $('.links > li');

$(window).scroll(function() {
    var currentPosition = $(this).scrollTop();
    links.removeClass('selected');
    lis.removeClass('active-slide');

    sections.each(function() {
        var top = $(this).offset().top,
            bottom = top + $(this).height();

        if (currentPosition >= top && currentPosition <= bottom) {
            var link = $('a[href="#' + this.id + '"]');
            link.addClass('selected');
            link.parent().addClass('active-slide');
        }
    });

});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {

        $('html,body').animate({scrollTop: target.offset().top}, 600);
        return false;


      }


    }



  });
});



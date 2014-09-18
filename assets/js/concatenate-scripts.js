---
---

{% include jquery-2.1.1.min.js %}


$(document).ready(function() {
  var menu = $('.centered-navigation-menu');
  var menuToggle = $('.centered-navigation-menu-button');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
});

var sections = $('section'),
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



'use strict';

$(function() {
  $('#conf-nav>ul>li>a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('#toggle-schedule-info').click(function (event) {
  event.preventDefault();
  var text = $('#schedule-popup').is(':visible') ? '+' : '-';
  $('#toggle-schedule-info').text(text);
  $('#schedule-popup').slideToggle(300);
});

$('.read-more').click( function (event) {
  event.preventDefault();
  $(this).siblings('.bio').toggleClass('expand');
})

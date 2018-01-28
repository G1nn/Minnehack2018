$(document).ready(function() {

  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    nowIndicator: true,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    selectable: true,
    selectHelper: true,
    select: function(start, end) {
      var title = prompt('Event Title:');
      var eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
      }
      $('#calendar').fullCalendar('unselect');
    },
    events: [
      {
        title: 'All Day Event',
        start: '2018-01-01'
      },
      {
        title: 'Long Event',
        start: '2018-01-07',
        end: '2018-01-10',
        color: 'red'

      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-01-09T16:00:00',
        color: 'red'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-01-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-01-11',
        end: '2018-01-13',
        color: 'red'

      },
      {
        title: 'Meeting',
        start: '2017-12-12T10:30:00',
        end: '2017-12-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2017-12-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2017-12-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2017-12-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2017-12-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2017-12-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2017-12-28'
      }
    ]
  })

});

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    console.log('i am called')
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    console.log('i am called')
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict

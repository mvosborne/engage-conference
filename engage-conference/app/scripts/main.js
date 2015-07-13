'use strict';

var speakers = {
    "JeanneBliss" : {
      "shortTxt": "Jeanne Bliss pioneered the role of the Chief Customer Officer, holding the first ever CCO role for over 20 years at Lands’ End, Microsoft... ",
       "longTxt": "Jeanne Bliss pioneered the role of the Chief Customer Officer, holding the first ever CCO role for over 20 years at Lands’ End, Microsoft, Coldwell Banker and Allstate Corporations.  Reporting to each company’s CEO, she moved the customer to the strategic agenda, creating transformational changes to each brands’ customer experience. She has driven achievement of 95 percent loyalty rates, improving customer experiences across 50,000-person organizations.  She is now the President of CustomerBliss, where she guides the C-Suite and Chief Customer Officers around the world on earning business growth by improving customers’ lives.  Her clients include: AAA, Johnson & Johnson, Brooks Brothers, Bombardier Aerospace, and Kaiser Permanente. She is a sought after speaker and thought-leader, the author of two best-selling books, and co-founder of the Customer Experience Professionals Association."
    },
    "AshiniParikh" : {
      "shortTxt": "Ashini Parikh is Director, Marketing Strategy at SapientNitro. Through the art of storytelling, she is responsible for designing emotional and transactional experiences... ",
       "longTxt": "Ashini Parikh is Director, Marketing Strategy at SapientNitro. Through the art of storytelling, she is responsible for designing emotional and transactional experiences for an array of SapientNitro's Fortune 500 clients. Over the last decade, Ashini worked as a Vice President for Edelman Digital and also as a CRM Strategy Consultant for Big 5 consulting and management firms such as Accenture and IBM Global Business Services where she was responsible for delivering business strategies, improving customer experiences across key marketing touch-points."
    },
    "DavidHewitt" : {
      "shortTxt": "David is the Mobile Practice Lead for SapientNitro. He has over 10 years of telecommunications experience, having led three major carrier dotcom redesigns... ",
       "longTxt": "David is the Mobile Practice Lead for SapientNitro. He has over 10 years of telecommunications experience, having led three major carrier dotcom redesigns and driven several consumer experience engagements. In the last eight years he has spearheaded the design of mobile applications and strategy for disruptive multi-channel experiences. Under his leadership, SapientNitro’s mobile experience team has designed and/or developed over a dozen mobile applications — three of which have placed in the top 25 list in Apple’s App Store. In addition to serving as practice lead, David is a founder of SapientNitro’s Mobile Center of Excellence, a full service creative and technology studio dedicated to designing and developing mobile and digital merchandising experiences across smart phone, tablets, and emerging devices."
    },
    "EmilyLeahy" : {
      "shortTxt": "Emily Leahy manages UX Strategy and heads the Digital Return on Experience (ROX) program for IHG. She is responsible for leading continuous improvement... ",
       "longTxt": "Emily Leahy manages UX Strategy and heads the Digital Return on Experience (ROX) program for IHG. She is responsible for leading continuous improvement of the web customer experience for IHG's 9 brands, which include Holiday Inn, Hotel Indigo, and Crowne Plaza. Emily's eclectic career began in 1999 with Information Architecture and User Research roles and branched into related areas such as Product Management and Digital Marketing Strategy for major corporations, startups, agencies, and software companies. Her academic background is in Library and Information Studies, with BS and MS degrees from Florida State University. At home in Roswell, Ga, Emily enjoys spending time with her husband and son hiking, riding bikes, and having epic water gun battles."
    },
    "DavidTrice" : {
      "shortTxt": "David enjoys a 20+ year career in building and delivering software solutions to Enterprise customers. David is currently CEO at ENGAGE.cx where he leads the effort to... ",
       "longTxt": "David enjoys a 20+ year career in building and delivering software solutions to Enterprise customers. David is currently CEO at ENGAGE.cx where he leads the effort to enrich consumer relationships with The Relationship Cloud, their omni-channel customer experience platform.  Prior to ENGAGE.cx, David spent 5 years at Oracle as their Vice President, working on CRM Product Management & Strategy and led the initial launch of Oracle’s next generation CRM, Fusion CRM. Prior to joining Oracle David co-founded and served as President of Revenue Technologies Corp, which was acquired by Oracle in 2007.  David is a long time Atlanta native having graduated from the Georgia Institute of Technology.  David currently resides in Roswell with his wife and two kids."
    }
};

$(function() {
  $('#conf-nav>ul>li>a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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


  // set the short text for each speaker
  $('.speaker').each(function(){
    var bio =  $(this).find('.bio'),
        name = $(this).data('speaker');
    bio.html( speakers[name].shortTxt );
  });

});


$('#toggle-schedule-info').click(function (event) {
  event.preventDefault();
  var text = $('#schedule-popup').is(':visible') ? '+' : '-';
  $('#toggle-schedule-info').text(text);
  $('#schedule-popup').slideToggle(300);
});

$('#toggle-jeanbliss-info').click(function (event) {
  event.preventDefault();
  var text = $('#jeanbliss-popup').is(':visible') ? '+' : '-';
  $('#toggle-jeanbliss-info').text(text);
  $('#jeanbliss-popup').slideToggle(300);
});


$('.read-more').click( function (event) {
  event.preventDefault();

  var speaker = $(this).parents('.speaker'),
      bio =  speaker.find('.bio'),
      name = speaker.data('speaker');

  if(speaker.hasClass('expanded')){
    bio.html( speakers[name].shortTxt );
    speaker.removeClass('expanded');
  }

  else {
    bio.html( speakers[name].longTxt );
    speaker.addClass('expanded');
  }

  //var firefox = typeof InstallTrigger !== 'undefined';///Firefox/i.text(navigator.userAgent);
  //if (firefox) {
  //  console.log('is firefox');
  //  $(this).siblings('.bio').toggleClass('expand-no-line-clamp');
  //  $(this).siblings('.bio').toggleClass('special');
  //} else {
  //  $(this).siblings('.bio').toggleClass('expand');
  //}

});


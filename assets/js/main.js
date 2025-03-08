// ==================================================
// * Project Name   :  GlobeFixer - Electronics Repair Template
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  24 January 2022
// * Author         :  nhpTheme
// ==================================================

(function($) {
  "use strict";

  // back to top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // back to top - End
  // --------------------------------------------------

  // preloader - Start
  // --------------------------------------------------
  $(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
  // preloader - End
  // --------------------------------------------------

  // Header Sticky - Start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.header_sticky').addClass("sticky")
    } else {
      $('.header_sticky').removeClass("sticky")
    }
  });
  // Header Sticky - End
  // --------------------------------------------------

  // Off Canvas - Start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.cart_close_btn, .cart_sidebar_overlay').on('click', function () {
      $('.cart_sidebar').removeClass('active');
      $('.cart_sidebar_overlay').removeClass('active');
    });

    $('.cart_btn').on('click', function () {
      $('.cart_sidebar').addClass('active');
      $('.cart_sidebar_overlay').addClass('active');
    });
  });

  $(document).ready(function () {
    $('.about_close_btn, .about_sidebar_overlay').on('click', function () {
      $('.about_sidebar').removeClass('active');
      $('.about_sidebar_overlay').removeClass('active');
    });

    $('.about_offcanvas_btn').on('click', function () {
      $('.about_sidebar').addClass('active');
      $('.about_sidebar_overlay').addClass('active');
    });
  });
  // Off Canvas - End
  // --------------------------------------------------

  // Search Icon Changing - Start
  // --------------------------------------------------
  $('.search_btn').on('click', function() {
    $('.search_btn > i').toggleClass('fa-times');
  });
  // Search Icon Changing - End
  // --------------------------------------------------

  // Select Option - Start
  // --------------------------------------------------
  $('select').niceSelect();
  // Select Option - End
  // --------------------------------------------------

  // Counter Up - Start
  // --------------------------------------------------
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  // Counter Up - End
  // --------------------------------------------------

  // Color - Start
  // --------------------------------------------------
  $("[data-text-color]").each(function () {
    $(this).css("color", $(this).attr("data-text-color"))
  });
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"))
  });
  // Color - End
  // --------------------------------------------------

  // Background Parallax - Start
  // --------------------------------------------------
  $(".parallaxie").parallaxie({
    offset: 0,
    speed: 0.3,
  });
  // Background Parallax - End
  // --------------------------------------------------

  // Scroll Animation - Start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // Scroll Animation - End
  // --------------------------------------------------

  // Popup Images & Videos - Start
  // --------------------------------------------------
  $('.popup_video').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });
  // Popup Images & Videos - End
  // --------------------------------------------------

  // Multy Count Down - Start
  // --------------------------------------------------
  $('.countdown_timer').each(function(){
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        var $this = $(this).html(event.strftime(''
          + '<li class="years_count"><strong>%Y</strong><span>Years</span></li>'
          + '<li class="days_count"><strong>%D</strong><span>Days</span></li>'
          + '<li class="hours_count"><strong>%H</strong><span>Hours</span></li>'
          + '<li class="minutes_count"><strong>%M</strong><span>Mins</span></li>'
          + '<li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'));
      });
    });
  });
  // Multy Count Down - End
  // --------------------------------------------------

  // Circle Progress - Start
  // --------------------------------------------------
  $('.circle_progress_1').circleProgress({
    size: 80,
    value: 0.75,
    fill: {
      gradient: ["#3c5bf9"]
    }
  });
  $('.circle_progress_2').circleProgress({
    size: 80,
    value: 0.75,
    fill: {
      gradient: ["#0c21ca"]
    }
  });
  // Circle Progress - End
  // --------------------------------------------------

  // Main Slider - Start
  // --------------------------------------------------
  $('.main_slider').slick({
    dots: true,
    fade: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 6000,
    prevArrow: ".ms_left_arrow",
    nextArrow: ".ms_right_arrow"
  });

  $('.main_slider').on('init', function (e, slick) {
    var $firstAnimatingElements = $('div.slider_item:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });
  $('.main_slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.slider_item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });
  var slideCount = null;

  $('.main_slider').on('init', function (event, slick) {
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });
  $('.main_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    setCurrentSlideNumber(nextSlide);
  });

  function setSlideCount() {
    var $el = $('.slide_count_wrap').find('.total');
    if (slideCount < 10) {
      $el.text('0' + slideCount);
    } else {
      $el.text(slideCount);
    }
  }

  function setCurrentSlideNumber(currentSlide) {
    var $el = $('.slide_count_wrap').find('.current');
    $el.text(currentSlide + 1);
  }

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
  // Main Slider - End
  // --------------------------------------------------

  // Details Image Gallery - Start
  // --------------------------------------------------
  $('.details_image_gallery_carousel').slick({
    speed: 800,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.details_image_gallery_nav'
  });
  $('.details_image_gallery_nav').slick({
    speed: 800,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.details_image_gallery_carousel'
  });
  // Details Image Gallery - End
  // --------------------------------------------------

  // Common Carousel - Start
  // --------------------------------------------------
  $('.common_carousel_1col').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 6000,
    prevArrow: ".cc1c_left_arrow",
    nextArrow: ".cc1c_right_arrow"
  });

  $('.common_carousel_3col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".cc3c_left_arrow",
    nextArrow: ".cc3c_right_arrow",
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  });
  // Common Carousel - End
  // --------------------------------------------------

  // Full Width Carousel - Start
  // --------------------------------------------------
  $('.fullwidth_carousel').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    centerPadding: '200px',
    prevArrow: ".fw_left_arrow",
    nextArrow: ".fw_right_arrow",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        centerPadding: '50px'
      }
    },
    {
      breakpoint: 1461,
      settings: {
        slidesToShow: 3,
        centerPadding: '100px'
      }
    }
    ]
  });
  // Full Width Carousel - End
  // --------------------------------------------------

  // Portfolio Carousel - Start
  // --------------------------------------------------
  $('.portfolio_carousel').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    prevArrow: ".pc_left_arrow",
    nextArrow: ".pc_right_arrow",
    responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }
    ]
  });


  $('.portfolio_carousel_2').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    prevArrow: ".pc2_left_arrow",
    nextArrow: ".pc2_right_arrow"
  });
  // Portfolio Carousel - End
  // --------------------------------------------------

  // Blog Carousel - Start
  // --------------------------------------------------
  $('.blog_carousel').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".bc_left_arrow",
    nextArrow: ".bc_right_arrow",
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  // Blog Carousel - End
  // --------------------------------------------------

  // Product Carousel - Start
  // --------------------------------------------------
  $('.product_carousel').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".cc3c_left_arrow",
    nextArrow: ".cc3c_right_arrow",
    responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    ]
  });
  // Product Carousel - End
  // --------------------------------------------------

  // Masoney Grid Layout - Start
  // --------------------------------------------------
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    }); 
  });
  // Masoney Grid Layout - End
  // --------------------------------------------------

  // Masoney - Start
  // --------------------------------------------------
  var $element_grid = $(".element_grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows"
  });
  var filterFns = {
    numberGreaterThan50: function() {
      var number = $(this)
      .find(".number")
      .text();
      return parseInt(number, 10) > 50;
    },
    ium: function() {
      var name = $(this)
      .find(".name")
      .text();
      return name.match(/ium$/);
    }
  };
  $(".filter-btns-group").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    filterValue = filterFns[filterValue] || filterValue;
    $element_grid.isotope({ filter: filterValue });
  });
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".active").removeClass("active");
      $(this).addClass("active");
    });
  });

  function portfolioMasonry() {
    var portfolio = $(".masonry_portfolio");
    if (portfolio.length) {
      portfolio.imagesLoaded(function () {
        portfolio.isotope({
          itemSelector: ".element-item",
          layoutMode: 'masonry',
          filter: "*",
          animationOptions: {
            duration: 1000
          },
          transitionDuration: '0.5s',
          masonry: {

          }
        });

        $(".filter-btns-group button").on('click', function () {
          $(".filter-btns-group button").removeClass("active");
          $(this).addClass("active");

          var selector = $(this).attr("data-filter");
          portfolio.isotope({
            filter: selector,
            animationOptions: {
              animationDuration: 750,
              easing: 'linear',
              queue: false
            }
          })
          return false;
        })
      });
    }
  }
  portfolioMasonry();
  // Masoney - End
  // --------------------------------------------------

  // Quantity - Start
  // --------------------------------------------------
  (function() {
    window.inputNumber = function(el) {
      var min = el.attr("min") || false;
      var max = el.attr("max") || false;

      var els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function() {
        init($(this));
      });

      function init(el) {
        els.dec.on("click", decrement);
        els.inc.on("click", increment);

        function decrement() {
          var value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          var value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    };
  })();
  inputNumber($(".input_number"));
  inputNumber($(".input_number_2"));
  // Quantity - End
  // --------------------------------------------------

  // google map - start
  // --------------------------------------------------
  if ( $('#mapBox').length ){
    var $lat = $('#mapBox').data('lat');
    var $lon = $('#mapBox').data('lon');
    var $zoom = $('#mapBox').data('zoom');
    var $marker = $('#mapBox').data('marker');
    var $info = $('#mapBox').data('info');
    var $markerLat = $('#mapBox').data('mlat');
    var $markerLon = $('#mapBox').data('mlon');
    var map = new GMaps({
      el: '#mapBox',
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
    });
    map.addMarker({
      lat: $markerLat,
      lng: $markerLon,
      icon: $marker,    
      infoWindow: {
        content: $info
      }
    })
  }
  // google map - end
  // --------------------------------------------------

})(jQuery);
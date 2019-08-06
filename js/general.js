$(document).ready(function(){

  $(".contact-number-popup").on("countrychange", function(e, countryData) {
    $(".contact_number_isd_code_popup").val('+'+countryData.dialCode);
  });

  $(".contact-number-footer").on("countrychange", function(e, countryData) {
    $(".contact_number_isd_code_footer").val('+'+countryData.dialCode);
  });


//[data-target]
$('.side-nav').on("click", "li", function(e) {
  e.preventDefault();
  var target = $(this).attr('data-target');
  $(this).parent('.side-nav').find(".is-active").removeClass('is-active');
  $(this).addClass('is-active');
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);
});

/** Header arrow scroll ****/
$('.sbottom a').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800);
});
/** Header arrow scroll ****/

$('.read-more.fullscreen_search').click(function(){

  $("#consultation-form .detail-part > h2").html("Tell us your story");
});
$('.fullscreen_search_close, .fullscreen_search_close i, .qode_search_close').click(function(){
  setTimeout(function(){
    $("#consultation-form .detail-part  > h2").html("Get Free Consultation");
  }, 200);
});

/*==================== Footer Year ======================*/
var d = new Date();
var n = d.getFullYear();
$("span.year").text(n);
/*==================== Footer Year ======================*/

$(window).scroll(function(){
  menuscroll();
});

function menuscroll(){
  var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
  $('.block').each(function (index) {
    if (windowTop > ($(this).position().top - 300))
    {
        //$('.side-nav li.is-active').removeClass('is-active');
        $('.side-nav li:eq('+ index +')').addClass('is-active').siblings().removeClass('is-active');
      }
    });
}


if ($(window).width() > 992) {
 $.scrollify({
  section : ".block",
  sectionName : false,
  interstitialSection : "",
    //easing: "easeOutExpo",
    easing: "easeInOutCubic",
    scrollSpeed: 600,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });


}


//Navigation/
$('.navbar-toggle-menu').click(function () {
  $('body').toggleClass('navbar-on');
});
$(".main-menu, .sub-nav, .social-menu").each(function () {
  $(this).find("a").on("click", function () {
    $('body').toggleClass('navbar-on');
  });
});
$(".logo > a").on("click", function () {
  if ($("body").hasClass("navbar-on")) {
    $('body').removeClass('navbar-on');
  }
});

$('[data-type="modal-trigger"]').on('click', function(){
  ga('send', {
    hitType: 'event',
    eventCategory: 'Homepage Video',
    eventAction: 'Play',
    eventLabel: 'Jugaad'
  });
  $("body").addClass("fixed-body");
  var btn = $(this);
  btn.addClass('to-circle');
  setTimeout(function(){
    btn.parents(".thanks-popup").addClass("modal-is-visible");
  },500);

  setTimeout(function(){
    btn.find(".cd-modal-bg").animate({
      transform: 'scale(100)'
    },500, function(){
      $(this).addClass("is-visible");
    });
  },400);

  btn.parents(".thanks-popup").find(".cd-modal .cd-modal-close").click(function(){
    btn.removeClass('to-circle');
    $('.thanks-popup').removeClass('modal-is-visible');
    $(".cd-modal-bg.is-visible").removeClass("is-visible").animate({
      transform: 'scale(0)'
    });
    $('[data-type="modal-trigger"]').removeClass('to-circle');
    setTimeout(function(){
      $("body").removeClass("fixed-body");
    },1000);
  });
});
/*==========================Animate form chat bottom ===================================*/
$('.animate-form').on("mouseenter", function(e){
  $(this).parents(".say-hello").addClass('active');
  $('.span-animate').each(function(i) {
    var $sapnactive = $(this);
    setTimeout(function() {
      if(($sapnactive).prev("span").hasClass("active-span")){
        $sapnactive.addClass("topradius");
        $sapnactive.prev("span").addClass("active-top");
      }
      $sapnactive.addClass('active-span');
    }, i*1000);
  });
});

$('.say-hello-outer .say-hello').on("mouseleave", function(e){
  var counter = 0;
  $($('.span-animate').get().reverse()).each(function(i) {
    var $sapnactive = $(this);
    setTimeout(function() {
      counter++;
      $sapnactive.removeClass('active-span');
      if(($sapnactive).prev("span").hasClass("active-span")){
        $sapnactive.prev("span").removeClass("active-top");
        $sapnactive.removeClass("topradius");
      }
      if(counter == $('.span-animate').length){
        $(".say-hello").removeClass('active');
      }
    }, i*400);
  });
});

$('.fullscreen_search').click(function(){
  $('.fullscreen_search_holder').toggleClass('animate');
  serachpop();
});
$('.fullscreen_search_close').click(function(){
  $('.fullscreen_search_holder').removeClass('animate');
  serachpop();
});
function serachpop(){
  if($('.fullscreen_search_holder.animate').length > 0){
    $('body').addClass('fullscreen_search_opened search_fade_in').removeClass('search_fade_out');
  }
  else{
    $('body').removeClass('fullscreen_search_opened search_fade_in').addClass('search_fade_out');
  }
}
/*==========================Animate form chat bottom ===================================*/

$( window ).resize(function() {
  videoaspectratio();
});

/*========================== what's your idea animation code ===================================*/
(function() {
  var tiltSettings = [
  {},
  {
    movement: {
      imgWrapper : {
        translation : {x: 10, y: 10, z: 30},
        rotation : {x: 0, y: -10, z: 0},
        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
      },
      lines : {
        translation : {x: 10, y: 10, z: [0,70]},
        rotation : {x: 0, y: 0, z: -2},
        reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
      },
      caption : {
        rotation : {x: 0, y: 0, z: 2},
        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
      },
      overlay : {
        translation : {x: 10, y: -10, z: 0},
        rotation : {x: 50, y: 0, z: 2},
        reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
      },
      shine : {
        translation : {x: 100, y: 100, z: 0},
        reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
      }
    }
  }];

  function init() {
    var idx = 0;
    [].slice.call(document.querySelectorAll('div#intro')).forEach(function(el, pos) {
      idx = pos%2 === 0 ? idx+1 : idx;
      new TiltFx(el, tiltSettings[idx-1]);
    });
  }
  imagesLoaded(document.querySelector('.block'), function() {
    document.body.classList.remove('loading');
    init();
  });
})();
videoaspectratio();
});
function videoaspectratio(){
  var videowidth = $('.videoContainer').width();
  var videoheight = (videowidth * 9)/16;
  $('.videoContainer > iframe').width(videowidth);
  $('.videoContainer > iframe').height(videoheight);
}
jQuery(window).load(function(){
  jQuery(".effect-1").val("");
  jQuery(".effect-1").focusout(function(){
   if(jQuery(this).val() != ""){
    jQuery(this).addClass("has-content");
  }else{
    jQuery(this).removeClass("has-content");
  }
})
});


/*===============Youtubeplayer=============================*/
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  var pauseButton = document.getElementById("stop-video");
  pauseButton.addEventListener("click", function() {
    player.stopVideo();
  });
}
function onPlayerStateChange(event) {
  if (event.data === 0) {
    jQuery('#stop-video a').click();
    player.stopVideo();
  }
}

/*===============Youtubeplayer=============================*/

/*======= Notification ========*/
function openNav() {
  //document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("mySidenav").classList.add("sidenavbar");
  $('.notification-sec-overlay').addClass('active-overlay');
  $('body').addClass('fixedbody-notification');
}

function closeNav() {
  //document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").classList.remove("sidenavbar");
  $('.notification-sec-overlay').removeClass('active-overlay');
  $('body').removeClass('fixedbody-notification');
  grecaptcha.reset();
  }
/*****************/
$('.icon-toggle').click(function() {
  $('.notification-col').toggle();
});
$(".close-box").on("click",function(){
  $(".notification-col").css("display","none");
});
$('.alert-icon').click(function() {
  $('.alert-popup').hide();
});
$('.alert-close').click(function() {
  $('.alert-popup').show();
});

setTimeout(function(){
  $('.alert-popup').fadeIn(500);
}, 8000);
/*======= Notification ========*/

/*======= Website Loader ========*/
$(window).load(function(){  
   if(! $.cookie("proceed_btn_click")){
      setTimeout(function(){
         $('#myModal').modal('show');
     }, 2000);  
   } 
});
$('.proceed-btn').on('click',function(){
    $.cookie("proceed_btn_click", "1");
}); 

// Button Google Analytics Tracking Code
ga('send', {
  hitType: 'event',
  eventCategory: 'Popup',
  eventAction: 'India-Traffic-Message',
  eventLabel: 'Proceed'
});

ga('send', {
  hitType: 'event',
  eventCategory: 'Popup',
  eventAction: 'Join-IndiaNIC',
  eventLabel: 'Join IndiaNIC'
});

ga('send', {
  hitType: 'event',
  eventCategory: 'Popup',
  eventAction: 'Vendor-Inquiries',
  eventLabel: 'Vendor Inquiries'
});
/*======= Website Loader ========*/
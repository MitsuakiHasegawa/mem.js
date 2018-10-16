$(function () {
  var navHeight = $('nav ul').outerHeight();
  var navOffset =  $('nav').offset().top;
  $('nav').height(navHeight);

  function smoothScroll(href) {
    var speed = 500;
    var target = $(href === '#' || href == '' ? 'html' : href);
    var position = target.offset().top - navHeight;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
  }

  function navFixed() {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance >= navOffset) {
      $('nav').addClass('navFixed');
    } else {
      $('nav').removeClass('navFixed');
    }
  }

  function tabChange(clickTab, tabIndex) {
    $('.tabBtn').removeClass('js-tabActive');
    $('.tabContentInner').removeClass('js-tabContentActive');
    clickTab.addClass('js-tabActive');
    $(tabIndex).addClass('js-tabContentActive');
  }

  function fetchApi() {
    $.ajax({
      type: 'GET',
      url: 'https://yesno.wtf/api',
    })
    .done(function(data) {
      $('#section03').append($('<img>', {
        src: data.image,
      }));
    })
    .fail(function(e) {
      console.error(e);
    });
  }

  $(window).scroll(function() {
    navFixed();
  });

  $('.tabBtn').click(function() {
    var clickTab = $(this);
    var tabIndex = clickTab.attr('data-tab-index');
    tabChange(clickTab, tabIndex);
  });

  $('.accordion dt').on('click', function() {
    // 拡張性が低いので後で作りなおす
    $(this).nextAll().slideToggle();
  });

  $('.btn').on('click', function() {
    fetchApi();
  });

  $('.anchor a[href^="#"],.pageTop a[href^="#"]').click(function(){
    var href= $(this).attr('href');
    smoothScroll(href);
    return false;
  });
});

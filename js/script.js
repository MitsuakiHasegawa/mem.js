$(function () {
  var navHeight = $('nav ul').outerHeight();
  var navOffset =  $('nav').offset().top;
  $('nav').height(navHeight);

  function smoothScroll(href) {
    var speed = 500;
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
  }

  function navFixed() {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance >= navOffset) {
      $('nav').addClass('navFixed');
    } else {
      $('nav').removeClass('navFixed');
    }
  }

  function tabChange(clickTab,tabIndex) {
    $('.tabBtn').removeClass('js-tabActive');
    $('.tabContentInner').removeClass('js-tabContentActive');
    clickTab.addClass('js-tabActive');
    $(tabIndex).addClass('js-tabContentActive');
  }

  // function accordion() {}

  function ajaxStart() {
    var json = $.ajax({
      type: 'GET',
      data: {name: 'name'},
      url: './json/shop.json',
      dataType:'json'
    })
    .done(function(data) {
      var dataArray = data.name;
      for (var i = 0; i < dataArray.length; i++) {
        $('#section03').append('<p>' + dataArray[i].storeName + '</p>');
      }
    })
    .fail(function() {
      alert('jsonを読み込めなかったよ！！');
    });
    return false;
  }

  $(window).scroll(function() {
    navFixed();
  });

  $('.tabBtn').click(function() {
    var clickTab = $(this);
    var tabIndex = clickTab.attr('data-tab-index');
    tabChange(clickTab,tabIndex);
  });

  $('.accordion dt').click(function() {
    // 拡張性が低いので後で作りなおす
    $(this).nextAll().slideToggle();
  });

  $('.ajax a').click(function() {
    ajaxStart();
    return false;
  });

  $('.anchor a[href^="#"],.pageTop a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    smoothScroll(href);
    return false;
  });
});

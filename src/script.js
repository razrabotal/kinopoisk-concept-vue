

function sortBy(arr, key) {
  return arr.sort(function (a, b) {
    if (a[key] < b[key]) return 1
    if (a[key] > b[key]) return  -1
    return 0
  })
}

function reverseSortBy(arr, key) {
  return arr.sort(function (a, b) {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return  1
    return 0
  })
}

function reInitial() {

  /*
    REMOVE DOUBLE YEAR
  */
  var yearDetect = '';
  $('.film-with-back__year').each(function(i,elem) {
    if ($(this).text() === yearDetect) {
      $(this).css('opacity','0');
    }
    yearDetect = $(this).text();
  });


  /*
    NIGHT MODE Body background
  */
  $( "input[name='night-mode']" ).change(function() {
    if($(".vue").hasClass("night")) {
      $(".vue").removeClass("night");
      $("body").css("background-color","#f4f3ef");
    } else {
      $(".vue").addClass("night");
      $("body").css("background-color","#151515");
    }
  });

  /*
    ITEM SCROLL
  */
  function arrowCheck() {
     $(".slider").each(function(i,elem) {
       var width = $(this).width(),
           translateCurrent = $(this).children(".slider__main").css("transform").split(",")[4],
           widthInside = $(this).children(".slider__main").width();

       var translateRight = --translateCurrent - width,
           translateLeft = --translateCurrent + 20; // запас на padding

       //Если вправо или влево можно двигаться на ширину контента, стрелку нужно сделать активной
       if(-translateRight<widthInside && translateRight <= 0) {
          $(this).children(".arrow-right").addClass("active");
       } else {
          $(this).children(".arrow-right").removeClass("active");
       }

       if(-translateLeft<widthInside && translateLeft <= 0) {
          $(this).children(".arrow-left").addClass("active");
       } else {
          $(this).children(".arrow-left").removeClass("active");
       }

    });
  };

  $(".tabs__tab").on("click", function() {
    setTimeout(arrowCheck, 340);
  });

  arrowCheck();

  $(".arrow-right").on("click", function() {
    var width = $(this).parent().width(),
        translateCurrent = $(this).parent().children(".slider__main").css("transform").split(",")[4],
        widthInside = $(this).parent().children(".slider__main").width();

    var translate = --translateCurrent - width ;

    // Если контента осталось меньше, чем на ширину, то надо сдвинуть на ширину, что осталась
    if(-translate+width>widthInside) {
      translate = --translateCurrent-(widthInside+translate);
    }

    if(-translate<widthInside && translate <= 0) {
      $(this).parent().children(".slider__main").css("transform","translateX("+translate+"px)");
    }

    setTimeout(arrowCheck, 340);
  });

  $(".arrow-left").on("click", function() {
    var width = $(this).parent().width();
    var translateCurrent = $(this).parent().children(".slider__main").css("transform").split(",")[4];
    var widthInside = $(this).parent().children(".slider__main").width();

    var translate = --translateCurrent + width ;

    if(-translateCurrent < width) {
      translate = 0;
    }

    if(-translate<widthInside && translate <= 0) {
      $(this).parent().children(".slider__main").css("transform","translateX("+translate+"px)");
    }

    setTimeout(arrowCheck, 340);
  });


  /*
    DROPDOWN
  */
  $(".dropdown__label, .dropdown__close").on("click", function() {
    $(".dropdown__label").not(this).parent().removeClass("show");

    $(this).parent().toggleClass("hide show");
    if ($(this).parent().hasClass("show")) {
      $(this).parent().removeClass("hide");
    }
  });
  $(document).click(function(event) {
    if ($(event.target).closest(".dropdown").length) return;
    $(".dropdown.show").toggleClass("hide show");
    event.stopPropagation();
  });
  $(".dropdown__main li").on("click", function() {
    if(!$(this).parent().hasClass("dropdown__main--noactive")) {
      $(this).parent().children().removeClass("active");
      $(this).addClass("active");
      var value = $(this).attr('value');
      $(this).parent().parent().find("option")
          .removeAttr('selected')
            .filter('[value='+value+']')
              .attr('selected', true);
      $(this).parent().parent().find(".dropdown__label__text").text(value);
    }
  });

  /*
    FAVORITES Button
  */
  $(".btn-toggle").on("click", function() {
    $(this).toggleClass("btn-toggle--active");
    $(this).children(".fa-heart-o, .fa-heart").toggleClass("fa-heart-o").toggleClass("fa-heart");
  });

  /*
    NAVIGATION
  */
  $(".nav ul ul").before("<span class='nav__subtoggle'></span>");

  //$(".nav__toggle").on("click", function() {
  //  $(".nav").toggleClass("nav--open");
  //});

  $(".nav__subtoggle").on("click", function() {
    $(this).parent().toggleClass("nav__li--open");
  });

  $('.services').clone().appendTo( $('.nav__services') );
  $('.search').clone().appendTo( $('.nav__search') );

  /*
    TABS
  */
  $('.tabs .tabs__item').hide();
  $('.tabs .tabs__item:first-child').show();
  $('.tabs .tabs__labels a:first-child').addClass('active');

  $('.tabs .tabs__labels a').click(function(){
      $(this).parent().children().removeClass('active');
      $(this).addClass('active');
      var currentTab = $(this).attr('href');
      $(this).parent().parent().parent().find(".tabs__item").hide();
      $(currentTab).show();
      return false;
  });


  /*
    FILM FILTER
  */
  $(".films__filters .dropdown__main li:first-child").addClass("active");

  /*
    RATING
  */
  $('.rating .dropdown__main i').on('mouseover click', function(e) {
    $(this).addClass("hover");
    $(this).prevAll("i").addClass("hover");
    $(this).nextAll("i").removeClass("hover");
  });
  $('.rating .dropdown__main').on('mouseleave', function(e) {
    $(this).children("i").removeClass("hover");
  });

}

// Write any custom javascript functions here
$(document).ready(function(){

  $('.one-time').slick({
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      prevArrow: "<img class='a-left control-c prev slick-prev' src='../data/pics/left-chevron.svg'>",
      nextArrow: "<img class='a-right control-c next slick-next' src='../data/pics/right-chevron.svg'>"
  });

});
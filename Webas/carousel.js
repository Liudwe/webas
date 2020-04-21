$(document).ready(function(){
    // Activate Carousel with a specified interval
    $("#myCarousel").carousel({interval: 5});
          
      
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#myCarousel").carousel("next");
    });
  });
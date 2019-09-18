$(document).ready(function() {
  $("#player").get(0).play();
  $("#logo").animate({
    top: '40%',
  }, 1500);

  setTimeout(() => {
    $("#link1").animate({
      opacity: '1',
    }, 500); 
  }, 1000);

  setTimeout(() => {
    $("#link2").animate({
      opacity: '1',
    }, 500); 
  }, 1400);
  
  setTimeout(() => {
    $("#link3").animate({
      opacity: '1',
    }, 500); 
  }, 1800);

  $('#links a').on('click', function(event){
    event.preventDefault();
    var target= $(this.hash);
    $('body,html').animate({
      'scrollTop': target.offset().top - 100
    }, 800);
  });
});

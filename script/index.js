$('.bx').bxSlider();
var play = setInterval(function(){
    $('.bx-controls-direction a').last().trigger('click');

},4000);

$('.box').bxSlider({
    mode: 'vertical',
    auto: true,
    pause: 3000

  });

setInterval(function(){
    $('.rec').animate({
        left:'-150%'
    },1000,function(){
        $('.rec').find('li').eq(0).appendTo('.rec');
        $('.rec').css('left','-21%');
    })
},3000) 


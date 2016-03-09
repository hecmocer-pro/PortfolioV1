// Para definir el alto de la navbar
//$('.web.header')[0].offsetHeight = 10;

// Para definir el scroll vertical
//$(document)[0].scrollingElement.scrollTop = 0;


$(window).on('scroll', function() {
    console.log($(document)[0].scrollingElement.scrollTop);

    if ($(document).scrollTop() < 130) {
        console.log('add hide');
        $('.web.header.shrinked').addClass('hide');
        $('.web.header.shrinked').removeClass('show');
        $('.header.title.shrinked').removeClass('bounceInDown');
    }
    else{
        console.log('added hide');
        $('.web.header.shrinked').removeClass('hide');
        $('.web.header.shrinked').addClass('show');
        $('.header.title.shrinked').addClass('bounceInDown');
    }
});
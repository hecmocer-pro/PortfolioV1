// Para definir el alto de la navbar
//$('.web.header')[0].offsetHeight = 10;

// Para definir el scroll vertical
//$(document)[0].scrollingElement.scrollTop = 0;


$(window).on('scroll', function() {
    console.log($(document)[0].scrollingElement.scrollTop);

    if ($(document).scrollTop() < 135) {
        console.log('add hide');
        $('.web.header.shrinked').addClass('hide');
        $('.web.header.shrinked').removeClass('show');
        $('.header.content.shrinked').addClass('hide');
        $('.header.content.shrinked').removeClass('show');
    }
    else{
        console.log('added hide');
        $('.web.header.shrinked').removeClass('hide');
        $('.web.header.shrinked').addClass('show');
        $('.header.content.shrinked').removeClass('hide');
        $('.header.content.shrinked').addClass('show');
    }
});
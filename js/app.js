// Para definir el alto de la navbar
//$('.web.header')[0].offsetHeight = 10;

// Para definir el scroll vertical
//$(document)[0].scrollingElement.scrollTop = 0;


$(window).on('scroll', function() {
    console.log($(document)[0].scrollingElement.scrollTop);

    if ($(document).scrollTop() < 180) {
        console.log('add hide');

        $('.web.header.shrinked').addClass('hide');
    }
    else{
        $('.web.header.shrinked').removeClass('hide');
        console.log('added hide');
    }
});
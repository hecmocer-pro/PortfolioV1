function get_info(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./info.html");
            $('#navButtonInfo').addClass('active').siblings().removeClass('active');
            window.scrollTo(0,0);
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
}

function get_viajes(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./viajes.html");
            $('#navButtonViaje').addClass('active').siblings().removeClass('active');
            window.scrollTo(0,0);
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
}

function get_proy(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./proyects.html");
            $('#navButtonProy').addClass('active').siblings().removeClass('active');
            window.scrollTo(0,0);
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
}

function get_lorem(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./lorem.html");
            $('#navButtonInfo').removeClass('active').siblings().removeClass('active');
            window.scrollTo(0,0);
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
}


$(window).on('scroll', function() {
    console.log($(document)[0].scrollingElement.scrollTop);

    if ($(document).scrollTop() < 130) {
        $('.web.header.shrinked').addClass('hide');
        $('.web.header.shrinked').removeClass('show');
        $('.header.title.shrinked').removeClass('bounceInDown');
    }
    else{
        $('.web.header.shrinked').removeClass('hide');
        $('.web.header.shrinked').addClass('show');
        $('.header.title.shrinked').addClass('bounceInDown');
    }
});


$(document).ready(get_lorem);

$('.header.content').on('click', get_lorem);

$('#link-info').on('click', get_info);

$('#link-viajes').on('click', get_viajes);

$('#link-proy').on('click', get_proy);

$('#navButtonInfo').on('click', get_info);

$('#navButtonViaje').on('click', get_viajes);

$('#navButtonProy').on('click', get_proy);
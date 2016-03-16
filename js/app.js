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


$(document).ready(function(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./lorem.html");
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
});

$('.header.content').on('click', function(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./lorem.html");
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
});

$('#link-info').on('click', function(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./info.html");
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
});

$('#link-viajes').on('click', function(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./viajes.html");
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
});

$('#link-proy').on('click', function(){
    $.ajax({
        url: '/',
        type: 'get',
        success: function(data) {

            $('#dinamic-content').load("./proyects.html");
        },
        error: function() {
            $("#dinamic-content").html("Error al cargar contenido dinámico");
        }
    });
});
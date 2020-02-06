$('document').ready(function () {
    $('#content').hide();
    $('.menu').click(function () {
        $('#profile').animate({
            top: '15%',
            left: '3%'
        }, 500);
        $('#content').css('background',$(this).css('background'));
        $('#content').fadeIn(0);
        $('#content').animate({
            height: '70%'
        }, 700);
    });
});
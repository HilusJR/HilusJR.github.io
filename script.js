$('document').ready(function () {
    $('#content').hide();
    $('.menu').click(function () {
        $('#content').hide();
        $('#content').css('top','20%');
        $('#profile').animate({
            top: '15%',
            left: '3%'
        }, 500);
        $('#content').css('background',$(this).css('background'));
        $('#content').fadeIn({queue: false, duration: '300ms'});
        $('#content').animate({
            top: '15%'
        }, 300);
    });
});
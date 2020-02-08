$('document').ready(function () {
    $('#content').hide();
    $('.menu').click(function () {
        $('#content').hide();

        //For Mobile Phones
        if ($(window).width() <= '500') {
            $('#content').css('top', '20%');
            $('#profile').animate({
                top: '10%',
            }, 500);
            $('#content').css({
                'background': 'rgb(45,45,45)',
                'width': '90%',
                'height': '60%',
                'top': '40%',
                'left': '5%'
            });
            $('#content').fadeIn({
                queue: false,
                duration: '300ms'
            });
            $('#content').animate({
                top: '35%'
            }, 300);

            //For Tablets
        } else if ($(window).width() <= '800') {
            $('#content').css('top', '20%');
            $('#profile').animate({
                top: '10%',
            }, 500);
            $('#content').css({
                'background': $(this).css('background'),
                'width': '90%',
                'height': '60%',
                'top': '40%',
                'left': '5%'
            });
            $('#content').fadeIn({
                queue: false,
                duration: '300ms'
            });
            $('#content').animate({
                top: '35%'
            }, 300);

            //For any other device
        } else {
            $('#content').css('top', '20%');
            $('#profile').animate({
                top: '15%',
                left: '3%'
            }, 500);
            $('#content').css('background', $(this).css('background'));
            $('#content').fadeIn({
                queue: false,
                duration: '300ms'
            });
            $('#content').animate({
                top: '15%'
            }, 300);
        }
    });
});
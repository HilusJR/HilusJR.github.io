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
            var pos = $('#profile')[0].style.left;
            $('#content').css('top', '20%');
            if (pos == '3%') {
                $('#profile').animate({
                    top: '15%',
                    left: '3%'
                }, 300);
            } else {
                $('#profile').animate({
                    top: '13.5%',
                    left: '1.5%',
                }, 300);
                $('#profile').animate({
                    top: '16%',
                    left: '4%',
                }, 200);
                $('#profile').animate({
                    top: '14.5%',
                    left: '2.5%',
                }, 200);
                $('#profile').animate({
                    top: '15%',
                    left: '3%'
                }, 200);
            }
            $('#content').css('background', $(this).css('background'));
            $('#content').fadeIn({
                queue: false,
                duration: '300ms'
            });
            $('#content').animate({
                top: '15%'
            }, 200);
        }
    });
    $('#container').click('on', function (event) {
        if (event.target == event.currentTarget) {
            var pos = $('#profile')[0].style.left;
            $('#content').css('top', '15%');
            if (pos == '40%') {
                $('#profile').animate({
                    top: '40%',
                    left: '40%'
                }, 0);
            } else {
                $('#profile').animate({
                    top: '41.5%',
                    left: '41.5%',
                }, 300);
                $('#profile').animate({
                    top: '39%',
                    left: '39%',
                }, 200);
                $('#profile').animate({
                    top: '40.5%',
                    left: '40.5%',
                }, 200);
                $('#profile').animate({
                    top: '40%',
                    left: '40%'
                }, 200);
            }
            $('#content').fadeOut({
                queue: false,
                duration: '300ms'
            });
            $('#content').animate({
                top: '20%'
            }, 200);
        }
    });
});
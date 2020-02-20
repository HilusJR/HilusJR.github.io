$('document').ready(function () {
    $('html').css('background', localStorage.getItem('hilus_desktopbg'));
    let bgcolor = localStorage.getItem('hilus_theme');
    let color = localStorage.getItem('hilus_color');
    $('#status, #settings, #appdrawerbar, #close_settings').css({
        'background-color': bgcolor,
        'color': color
    });

    $('#settings_list, #setting_options, #close_settings').hide();

    //OPENING SETTINGS WINDOW ANIMATION
    if ($('#settings').css('width') == '100px') { // FOR LANDSCAPE DEVICES
        $("#settings").click(function () {
            $(this).animate({
                top: '50%',
                marginLeft: '-500px',
                marginTop: '-300px',
                width: '1000px',
                height: '600px',
                fontSize: '30px',
                paddingTop: '10px',
                paddingBottom: '0px',
                borderRadius: '16px'
            }, 0);
            $(this).css('cursor', 'default');
            setTimeout("$('#settings_list, #close_settings').fadeIn();", 300);
        });

        $('#close_settings').click(function () {
            $('#settings').animate({
                top: '10px',
                marginLeft: '-50px',
                marginTop: '0px',
                width: '100px',
                height: '20px',
                fontSize: '20px',
                paddingTop: '5px',
                paddingBottom: '5px',
                borderRadius: '30px'
            }, 0);
            $('#settings').css('cursor', 'pointer');
            $('#settings_list, #setting_options, #close_settings').hide();
            $('#setting_options').html(null);
        });
    } else { // FOR PORTRAIT DEVICES
        $("#settings").click(function () {
            $(this).animate({
                top: '100px',
                left: '1%',
                marginLeft: '0',
                width: '100%',
                height: '90vh',
                fontSize: '80px',
                paddingTop: '10px',
                paddingBottom: '0px',
                borderRadius: '30px'
            }, 0);
            setTimeout("$('#settings_list, #close_settings').fadeIn();", 300);
            
        });

        $('#close_settings').click(function () {
            $('#settings').animate({
                top: '10px',
                left: '50%',
                marginLeft: '-150px',
                marginTop: '0px',
                width: '300px',
                height: '70px',
                fontSize: '60px',
                padding: '5px 0',
                borderRadius: '70px'
            }, 0);
            $('#settings').css('cursor', 'pointer');
            $('#settings_list, #setting_options, #close_settings').hide();
            $('#setting_options').html(null);
        });
    }



    $('.setting').click(function () {
        $('#setting_options').slideUp(0);
        var chosen = $(this).text();
        switch (chosen) {
            case 'Customization':
                $('#setting_options').html(
                    "<div>Desktop background</div>" +
                    "<div class='bgcolors' style='background-color:#0073e6;'></div>" +
                    "<div class='bgcolors' style='background-color:#9b05ff;'></div>" +
                    "<div class='bgcolors' style='background-color:#e60e1c;'></div>" +
                    "<div class='bgcolors' style='background-color:#03a665;'></div>" +
                    "<div class='bgcolors' style='background-color:#e39b00;'></div>" +
                    "<div>Theme</div>" +
                    "<div class='themecolor' style='background-color:#fff; color:#000;'>Light</div>" +
                    "<div class='themecolor' style='background-color:rgb(41, 41, 41); color:#fff;'>Dark</div></br>" +
                    "<div style='margin-top:100px;text-align:left;'></br></br>Changing background color will also change accent color through out the supported apps.</br></br>Please note, that after changing theme, apps may need a restart to change theme as well.</div>"
                );
                break;
            case 'About':
                $('#setting_options').html(
                    'HilusOS UI</br></br>Version: 0.4.1.2-20 Alpha</br>Start of the project: 20.11.2019</br>Developer: Piotr Hilicki (Hilus)' +
                    '</br></br>HilusOS UI is a project started for learning and having fun. I have always wanted to design my own User Interface and I found HTML being </br>' +
                    'most suitable for my abilities. This project made me find so much joy just by programming, visualising and designing something personal. </br>' +
                    'I have learned a lot since I started, maybe not even close to what professionals can do, but still I am happy with what I achieved.</br></br>' +
                    'Project is not finished, it may not be ever. There are always new things to add. If you happen to be reading this and have an idea, suggestion, found bug or just want to contact me ' +
                    'feel free to contact me at: </br></br>pietrzef@gmail.com'
                );
                break;
        }
        $('#setting_options').slideDown(500);
    });

    // CUSTOMIZATION
    $(document).on('click', '.bgcolors', function () {
        var color = $(this).css('background-color');
        $('html').css('background', color);
        localStorage.setItem('hilus_desktopbg', color);
    })

    $(document).on('click', '.themecolor', function () {
        var bgcolor = $(this).css('background-color');
        var color = $(this).css('color');
        $('#status, #settings, #appdrawerbar, #close_settings').css({
            'background-color': bgcolor,
            'color': color
        });
        localStorage.setItem('hilus_theme', bgcolor);
        localStorage.setItem('hilus_color', color);
    })

});
//version is 0.4 (stands for amount of progress to final release) .1.2-20 (stands for 1st of february 2020)
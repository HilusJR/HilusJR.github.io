$('document').ready(function(){
    var gradient = localStorage.getItem('hilus_desktopbg');
    var theme = localStorage.getItem('hilus_theme');
    if(theme == 'rgb(41, 41, 41)'){
        $('html').css({'background':theme,'color':'#fff'});
        $('.position').css({'background':'#444444','color':'#fff'});
    }
    else{
        $('html').css({'background':theme,'color':'#000'});
        $('.position').css({'background':'#ebebeb','color':'#000'});
    }
    $('#player').css('background', 'linear-gradient(to bottom right, rgb(255, 255, 255), '+gradient+')');
    $('.btn').css('background', 'linear-gradient(to bottom right, '+gradient+', rgb(255, 255, 255))');
    $('#p').css('color', gradient);

if($('#title').text() == ''){
    $('#btns').css('margin-top', '190px');
}

$('#play').click(function(){
    if($(this).html() == '<i class="demo-icon icon-play-outline"></i>'){
        $('#audio')[0].play();
        $(this).html('<i class="demo-icon icon-pause-outline"></i>');
    }
    else {
        $(this).html('<i class="demo-icon icon-play-outline"></i>');
        $('#audio')[0].pause();
    } 
});


$('.position').click(function(){
    var title = $(this).text().toLowerCase();
    $('#audio').attr('src',title+'.mp3');
    $('#play').html('<i class="demo-icon icon-pause-outline"></i>');
    $('#audio')[0].play();
    $('#btns').css('margin-top', '60px');
    switch(title){
        case 'wundatrip':
            $('#title').text('Wundatrip');
            $('#author').text('Duskus');
            $('#album').text('Chill Nation');
            break;
        case 'here':
            $('#title').text('Here');
            $('#author').text('Alessia Cara (Lucian Remix)');
            $('#album').text('Trap Nation');
            break;
    }
});

});
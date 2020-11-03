$('document').ready(function(){
    var accent = localStorage.getItem('hilus_desktopbg');
    var theme = localStorage.getItem('hilus_theme');
    if(theme == 'rgb(41, 41, 41)'){
        $('html').css({'background':theme,'color':'#fff'});
    }
    else $('html').css({'background':theme,'color':'#000'});
    $('#p').css('color',accent);
});
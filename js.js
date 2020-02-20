function time(i){
    var today = new Date();
    var day=today.getDate();
    var m=today.getMonth()+1;
    var y=today.getFullYear();
    var h=today.getHours();
    var min=today.getMinutes();
    var min=checkTime(min);
    var m=checkTime(m);
    var h=checkTime(h);
    var day=checkTime(day);
	document.getElementById("clock").innerText=
    h+":"+min;
    document.getElementById("date").innerText=
    day+"/"+m+"/"+y;
    setTimeout("time()",1000);
}
function checkTime(i){
    if (i<10) i="0"+i;
    return i;
}

$('document').ready(function () {
$(document).on('click','.ic,.closeBtn,.minBtn,.infoBtn',function () {
    var b;
    if($(this)[0].className == "ic"){
    switch($(this)[0].id){ // HERE ADD NEW APP INFO (CHANGE CASE *example_ic* AND VARIABLE B *example*)
        case "notepad_ic":
            b = "notes";
            break;
        case "log_ic":
            b = "log";
            break;
        case "calculator_ic":
            b = "calculator";
            break;
        case "player_ic":
            b = "player";
            break;
        }
    if($('#'+b).html() == ""){
        $('#'+b).html(
        '<div id="overlay" style="display:none;">'+
            '<div class="closeBtn"><div class="btn_span">CLOSE</div></div>'+
            '<div id="info"style="display:none;"></div>'+
        '</div>'+
        '<div class="draggable_bar"></div>'+
        '<div class="closeBtn"><div class="btn_span">CLOSE</div></div>'+
        '<div class="minBtn"><div class="btn_span">MINIMIZE</div></div>'+
        '<div class="infoBtn"><div class="btn_span">INFO</div></div>'+
        '<iframe id="'+b+'_frame" src="'+b+'/'+b+'.html" class="frame"></iframe>');
    }
    $('#'+b).animate({
        top: '100px',
        left: '435px',
        width: '1025px',
        height: '700px'
    }, 500);
    $('#'+b).show();
    }
    //CLOSE WINDOW
    else if($(this)[0].className == "closeBtn"){
        $(this).parent().animate({
            bottom:'0',
            left:'45%',
            width:'10%',
            height:'0px',
        }, 0);
        $(this).parent().hide();
        var c = $(this).parent().attr('id');
        $('#'+c).html("");
    }
    //MINIMIZE WINDOW
    else if($(this)[0].className == "minBtn"){
        $(this).parent().hide();
    }
    //OPEN INFO CARD
    else if($(this)[0].className == "infoBtn"){
        $('#overlay, #info').show();
    }
});
$(".ic").click(function () {
    
});
});
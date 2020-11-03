//THEME
$('document').ready(function () {
    var accent = localStorage.getItem('hilus_desktopbg');
    var theme = localStorage.getItem('hilus_theme');
    if (theme == 'rgb(41, 41, 41)') {
        $('html,#open,#cancel').css({ 'background': theme, 'color': '#fff' });
    }
    else {
        $('html, #open, #cancel').css({ 'background': theme, 'color': '#000' });
    }
    $('#p').css('color', accent);
    $('.toolbar_btn').css('background', accent);

    // NEW
    $('#newNote').click(function () {
        $('#title, #note').show();
    });


    // OPEN
    $('#openNote').click(function () {
        $('#open, #cancel').show();
        i = localStorage.getItem("hilus_i");
        $('#notes').html("")
        for (i; i > 0; i--) {
            title = localStorage.getItem("hilus_title" + i);
            in_notes = $('#notes').html();
            $('#notes').html(in_notes + "<div id='item" + i + "' class='item'>" + title + "</div>");
        }
    });

    // CLOSE LIST
    $('#cancel').click(function () {
        $('#open, #cancel').hide();
    });

    // SAVE
    var hilus_i = 0, in_notes;
    $('#saveNote').click(function () {
        var title = $('#title').val();
        var note = $('#note').val();
        if (title == "") alert("Title cannot be empty");
        else if (note == "") alert("Note cannot be empty");
        else {
            i = localStorage.getItem("hilus_i");
            i++;
            localStorage.setItem("hilus_i", i);
            localStorage.setItem("hilus_title" + i, title);
            localStorage.setItem("hilus_note" + i, note);
        }
    });

    // EDIT
    $(document).on('click', '.item', function () {
        $('#title, #note').show();
        i = localStorage.getItem("hilus_i");
        while ($(this)[0].id != 'item' + i) {
            i--;
        }
        $('#title').text(localStorage.getItem("hilus_title" + i));
        $('#note').text(localStorage.getItem("hilus_note" + i));
        $('#open, #cancel').hide();
    });




});

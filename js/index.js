$('document').ready(function() {

    //Show songs in admin
    $('#songsListTab').click(function() {
        $("#addSong").hide();
        $("#songsList").show();
    })

    //Show add song in admin
    $('#addSongTab').click(function() {
        $("#songsList").hide();
        $("#addSong").show();
    })

});
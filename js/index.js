$('document').ready(function() {

    //Show songs in admin
    $('#songsListTab').click(function() {
        $("#addSong").hide();
        $("#songsList, #searchBar").show();
    })

    //Show add song in admin
    $('#addSongTab').click(function() {
        $("#songsList, #searchBar").hide();
        $("#addSong").show();
    })

});
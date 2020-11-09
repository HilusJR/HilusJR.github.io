$('document').ready(function() {

            //Show songs in admin
            $('#songsListTab').click(function() {
                $(this).css("background", "#2196F3");
                $('#addSongTab').css("background", "#1976D2");
                $("#addSong").hide();
                $("#songsList, #searchBar").show();
            })

            //Show add song in admin
            $('#addSongTab').click(function() {
                $(this).css("background", "#2196F3");
                $('#songsListTab').css("background", "#1976D2");
                $("#songsList, #searchBar").hide();
                $("#addSong").show();
            })

            $('#submitSongInfo').click(function() {
                let title = $('#title_input').val();
                let author = $('#author_input').val();
                let i = localStorage.getItem("song_i");
                let song = [title, author];
                if (i == null) i = 0;
                localStorage["song" + i] = JSON.stringify(song);
                song = JSON.parse(localStorage["song" + i]);
                i++;
                localStorage.setItem("song_i", i);
            })

            $('songsListTab').click(function() {
                    let i = localStorage.getItem("song_i");
                    let song = song = JSON.parse(localStorage["song" + i]);
                    $('#songsList').html(
                        $('#songsList').html() +
                        '<div id="song" class="song">' +
                        '<div class="songInfo">' +
                        '<div id="title' + i + '" class="title">' + song[0] + '</div>' +
                        '<div id="author' + i + '" class="author">' + song[1] + '</div>' +
                        '</div><div id="transfer' + i + '" class="transfer">+</div></div>'
                    );
                }
            });
function ChooseSongsContainer(elem) {
    const list = document.getElementById("songs-container-nav-list");
    const add = document.getElementById("songs-container-nav-add");
    const songsList = document.getElementById("songs-container-list");
    const addSong = document.getElementById("songs-container-add-song");
    if (elem == "songs-container-nav-list") {
        list.style.backgroundColor = "var(--primaryColor)";
        list.style.color = "var(--text)";
        add.style.backgroundColor = "var(--darkPrimaryColor)";
        add.style.color = "var(--dividerColor)";
        songsList.style.display = "block";
        addSong.style.display = "none";
    } else if (elem == "songs-container-nav-add") {
        add.style.backgroundColor = "var(--primaryColor)";
        add.style.color = "var(--text)";
        list.style.backgroundColor = "var(--darkPrimaryColor)";
        list.style.color = "var(--dividerColor)";
        songsList.style.display = "none";
        addSong.style.display = "block";
    }
}

function addSong() {
    let title = document.getElementById("title-input").value;
    let author = document.getElementById("author-input").value;
    let i = localStorage.getItem("song_i");
    let song = {
        title: title,
        author: author
    }
    if (i == null) i = 0;
    if (title != "" && author != "") {
        localStorage["song" + i] = JSON.stringify(song);
        i++;
        localStorage.setItem("song_i", i);
        document.getElementById("title-input").value = "";
        document.getElementById("author-input").value = "";
    } else alert("Nie podano tytułu lub wykonawcy");
}

function loadSongsList() {
    let songsList = "",
        song;
    let i = localStorage.getItem("song_i");
    i--;
    for (i; i >= 0; i--) {
        song = JSON.parse(localStorage["song" + i]);
        songsList += '<div id="song' + i + '" class="song">' +
            '<div class="song-col"><i class="demo-icon icon-music"></i></div>' +
            '<div class="song-col">' +
            '<div id="song-title' + i + '" class="song-title">' + song.title + '</div>' +
            '<div id="song-author' + i + '" class="song-author">' + song.author + '</div>' +
            '</div>' +
            '<div class="song-col">' +
            '<div id="song-transfer' + i + '" class="song-transfer" onclick="transferToChosen(this.id)">' +
            '<i class="demo-icon icon-right-big"></i></div>' +
            '</div>' +
            '</div>'
    }
    document.getElementById("songs-container-list").innerHTML = songsList;
}

function transferToChosen(songTransferId) {
    let chosenSongsList = "",
        chosenSongsAmount,
        chosenSongs;
    songTransferId = songTransferId.slice(13);
    let i = parseInt(songTransferId);
    song = JSON.parse(localStorage["song" + i]);
    chosenSongsAmount = localStorage.getItem("chosenSongsAmount");
    if (chosenSongsAmount == null) chosenSongsAmount = 0;
    if (chosenSongsAmount <= 9) {
        chosenSongsList =
            '<div id="chosen-song' + i + '" class="chosen-song">' +
            '<div class="chosen-song-col">' +
            '<div id="chosen-song-title' + i + '" class="chosen-song-title">' + song.title + '</div>' +
            '<div id="chosen-song-author' + i + '" class="chosen-song-author">' + song.author + '</div>' +
            '</div>' +
            '<div class="chosen-song-transfer' + i + '"></div>' +
            '</div>' + document.getElementById("chosen-songs-container-list").innerHTML;
        document.getElementById("chosen-songs-container-list").innerHTML = chosenSongsList;

        // GET CHOSEN SONGS IDS AND SAVE THEM TO AN ARRAY IN LOCAL STORAGE
        chosenSongs = localStorage.getItem("chosenSongs");
        if (chosenSongs != null) {
            chosenSongs = JSON.parse(localStorage["chosenSongs"]);
        } else chosenSongs = [];
        chosenSongs[chosenSongsAmount] = i;
        localStorage["chosenSongs"] = JSON.stringify(chosenSongs);

        chosenSongsAmount++;
        localStorage.setItem("chosenSongsAmount", chosenSongsAmount);
    } else alert("Już dodano 10 piosenek!");
}

function loadChosenSongsList() {
    let chosenSongsList = "",
        chosenSongs;
    chosenSongs = localStorage.getItem("chosenSongs");
    if (chosenSongs != null) {
        chosenSongs = JSON.parse(localStorage["chosenSongs"]);
    } else chosenSongs = [];

    for (i = chosenSongs.length - 1; i >= 0; i--) {
        song = JSON.parse(localStorage["song" + chosenSongs[i]]);
        chosenSongsList +=
            '<div id="chosen-song' + chosenSongs[i] + '" class="chosen-song">' +
            '<div class="chosen-song-col">' +
            '<div id="chosen-song-title' + chosenSongs[i] + '" class="chosen-song-title">' + song.title + '</div>' +
            '<div id="chosen-song-author' + chosenSongs[i] + '" class="chosen-song-author">' + song.author + '</div>' +
            '</div>' +
            '<div class="chosen-song-transfer' + chosenSongs[i] + '"></div>' +
            '</div>';
    }
    document.getElementById("chosen-songs-container-list").innerHTML = chosenSongsList;
}
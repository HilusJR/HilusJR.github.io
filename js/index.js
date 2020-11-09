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
    localStorage["song" + i] = JSON.stringify(song);
    i++;
    localStorage.setItem("song_i", i);
}

function loadSongsList() {
    let songsList = "",
        song;
    let i = localStorage.getItem("song_i");
    i--;
    for (i; i >= 0; i--) {
        song = JSON.parse(localStorage["song" + i]);
        songsList += '<div id="song" class="song">' +
            '<div class="song-col"><i class="demo-icon icon-music"></i></div>' +
            '<div class="song-col">' +
            '<div id="song-title" class="song-title">' + song.title + '</div>' +
            '<div id="song-author" class="song-author">' + song.author + '</div>' +
            '</div>' +
            '<div class="song-col">' +
            '<div id="song-transfer" class="song-transfer"><i class="demo-icon icon-right-big"></i></div>' +
            '</div>' +
            '</div>'
    }
    document.getElementById("songs-container-list").innerHTML = songsList;
}
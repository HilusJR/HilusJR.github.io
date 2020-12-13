function chooseVoteScreenSong(songId) {
    let song;
    songId = songId.slice(23);
    song = JSON.parse(localStorage["song" + songId]);
    document.getElementById("vote-screen-chosen-song-title").innerHTML = song.title;
    document.getElementById("vote-screen-chosen-song-author").innerHTML = song.author;
    localStorage.setItem("chosenToVote", songId);
}

function vote() {
    let chosenToVote = localStorage.getItem("chosenToVote");
    if (document.getElementById("vote-screen-chosen-song-title").innerHTML != "")
        alert(chosenToVote);
    else alert("Nie wybrano piosenki");
}
function chooseVoteScreenSong(songId) {
    let song,
        chosenSongsIndex = document.getElementById("chosenSongsIndex");
    songId = songId.slice(23);
    song = JSON.parse(localStorage["song" + songId]);
    document.getElementById("vote-screen-chosen-song-title").innerHTML = song.title;
    document.getElementById("vote-screen-chosen-song-author").innerHTML = song.author;
    localStorage.setItem("chosenToVote", songId);
    localStorage.setItem("chosenSongsIndex", chosenSongsIndex.innerHTML);
}

function vote() {
    let votedSongsVotes = [];;
    let chosenToVote = localStorage.getItem("chosenToVote");

    // CREATE ARRAY (NUMBER OF VOTES) WITH INDEX MATCHING CHOSEN SONGS ARRAY
    if (document.getElementById("vote-screen-chosen-song-title").innerHTML != "") {
        chosenSongs = localStorage.getItem("chosenSongs");
        if (chosenSongs != null) {
            chosenSongs = JSON.parse(localStorage["chosenSongs"]);
        } else chosenSongs = [];
        votedIndex = chosenSongs.findIndex(isEqual);
        votedSongsVotes = localStorage.getItem("votedSongsVotes");
        if (votedSongsVotes != null) {
            votedSongsVotes = JSON.parse(localStorage["votedSongsVotes"]);
        } else {
            votedSongsVotes = [];
            votedSongsVotes.length = chosenSongs.length;
            votedSongsVotes.fill(0);
        }
        votedSongsVotes.length = chosenSongs.length;
        for (i = 0; i < votedSongsVotes.length; i++) {
            if (votedSongsVotes[i] == null) votedSongsVotes[i] = 0;
        }
        votedSongsVotes[votedIndex] += 1;

        localStorage["votedSongsVotes"] = JSON.stringify(votedSongsVotes);
    } else alert("Nie wybrano piosenki");
}

function isEqual(element) {
    let chosenToVote = localStorage.getItem("chosenToVote");
    return element == chosenToVote;
}

function loadVotedSongsList() {

    let resultsSongsList = "",
        chosenSongs,
        votedSongsVotes,
        votesAmount = 0;
    chosenSongs = localStorage.getItem("chosenSongs");
    votedSongsVotes = localStorage.getItem("votedSongsVotes");
    if (chosenSongs != null) {
        chosenSongs = JSON.parse(localStorage["chosenSongs"]);
    } else chosenSongs = [];

    if (votedSongsVotes != null) {
        votedSongsVotes = JSON.parse(localStorage["votedSongsVotes"]);
    } else votedSongsVotes = [];

    for (i = 0; i < votedSongsVotes.length; i++) {
        votesAmount += votedSongsVotes[i];
    }
    document.getElementById("results-screen-votes-amount").innerText = "Ilość oddanych głosów: " + votesAmount;

    for (i = chosenSongs.length - 1; i >= 0; i--) {
        song = JSON.parse(localStorage["song" + chosenSongs[i]]);
        resultsSongsList +=
            '<div id="results-song' + chosenSongs[i] + '" class="results-song">' +
            '<div class="results-song-col">' +
            '<div id="results-song-title' + chosenSongs[i] + '" class="results-song-title">' + song.title + '</div>' +
            '<div id="results-song-author' + chosenSongs[i] + '" class="results-song-author">' + song.author + '</div>' +
            '</div>' +
            '<div id="results-votes' + i + ' class="results-votes">' +
            '<div id="results-song-percentage' + chosenSongs[i] + '" class="results-song-title results-song-col-right">' + Math.round(votedSongsVotes[i] / votesAmount * 100) + '%</div>' +
            '<div id="results-song-votes-amount' + chosenSongs[i] + '" class="results-song-author results-song-col-right">Oddane głosy: ' + votedSongsVotes[i] + '</div>' +
            '</div>' +
            '</div>';
    }
    document.getElementById("results-screen-songs-container").innerHTML = resultsSongsList;
}
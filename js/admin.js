const CHARACTERS_SLICED_AMOUNT = 13
const CHOSEN_SONG_CHARACTERS_SLICED_AMOUNT = 20
const MAX_SONGS_AMOUNT = 10
const PASSWORD = ""

function login() {
    const page = localStorage.getItem("page")
    if (page == null || page == "admin") return
    const loginBackground = document.querySelector("#login-background")
    loginBackground.style.display = "flex"
}

function exitLogin() {
    const loginBackground = document.querySelector("#login-background")
    loginBackground.style.display = "none"
}

function checkPassword() {
    let word = document.querySelector("#password").value
    if (word == null) return
    if (word == PASSWORD) {
        goToScreen("navbar-admin")
        exitLogin()
    } else actionFeedback("password-error")
    document.querySelector("#password").value = ""
}



function ChooseSongsContainer(elem) {
    const list = document.getElementById("songs-container-nav-list")
    const add = document.getElementById("songs-container-nav-add")
    const songsList = document.getElementById("songs-container-list")
    const addSong = document.getElementById("songs-container-add-song")
    if (elem == "songs-container-nav-list") {
        list.style.backgroundColor = "var(--primaryColor)"
        list.style.color = "var(--text)"
        add.style.backgroundColor = "var(--darkPrimaryColor)"
        add.style.color = "var(--secondaryText)"
        songsList.style.display = "block"
        addSong.style.display = "none"
        loadSongsList();
    } else if (elem == "songs-container-nav-add") {
        add.style.backgroundColor = "var(--primaryColor)"
        add.style.color = "var(--text)"
        list.style.backgroundColor = "var(--darkPrimaryColor)"
        list.style.color = "var(--secondaryText)"
        songsList.style.display = "none"
        addSong.style.display = "block"
    }
}

function addSong() {
    let title = document.getElementById("title-input").value
    let author = document.getElementById("author-input").value
    let i = localStorage.getItem("song_i")
    let song = {
        title: title,
        author: author
    }
    if (i == null) i = 0;
    if (title != "" && author != "") {
        localStorage["song" + i] = JSON.stringify(song)
        i++
        localStorage.setItem("song_i", i)
        document.getElementById("title-input").value = ""
        document.getElementById("author-input").value = ""
        actionFeedback("add")
    } else actionFeedback("add-error")
}

function loadSongsList() {
    let songsList = "",
        song
    let i = localStorage.getItem("song_i")
    i--;
    for (i; i >= 0; i--) {
        song = JSON.parse(localStorage["song" + i])
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
    document.getElementById("songs-container-list").innerHTML = songsList
}

function transferToChosen(songTransferId) {
    songTransferId = parseInt(songTransferId.slice(CHARACTERS_SLICED_AMOUNT))
    song = JSON.parse(localStorage["song" + songTransferId])
    let chosenSongsAmount = localStorage.getItem("chosenSongsAmount")
    if (chosenSongsAmount == null) chosenSongsAmount = 0
    if (chosenSongsAmount <= MAX_SONGS_AMOUNT - 1) {
        createChosenSongElement(songTransferId, chosenSongsAmount, song)
        saveChosenSongToArray(chosenSongsAmount, songTransferId)
        chosenSongsAmount++
        localStorage.setItem("chosenSongsAmount", chosenSongsAmount)
    } else {
        alert("Już dodano 10 piosenek!")
    }
}

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key])
    }
}

function createChosenSongElement(songTransferId, chosenSongsAmount, song) {
    let transferToChosenDiv
    const divAttribute = ["chosen-song", "chosen-song-col", "chosen-song-title", "chosen-song-author", "chosen-song-transfer"]
    for (i = 0; i <= 4; i++) {
        transferToChosenDiv = document.createElement("div")
        transferToChosenDiv.setAttribute("id", divAttribute[i])
        transferToChosenDiv.setAttribute("class", divAttribute[i])
        document.querySelector("#chosen-songs-container-list").append(transferToChosenDiv)
    }

    const chosenSong = document.querySelector("#chosen-song")
    const chosenSongCol = document.querySelector("#chosen-song-col")
    const chosenSongTitle = document.querySelector("#chosen-song-title")
    const chosenSongAuthor = document.querySelector("#chosen-song-author")
    const chosenSongTransfer = document.querySelector("#chosen-song-transfer")
    document.querySelector("#chosen-song").append(document.querySelector("#chosen-song-col"), document.querySelector("#chosen-song-transfer"))
    document.querySelector("#chosen-song-col").append(document.querySelector("#chosen-song-title"), document.querySelector("#chosen-song-author"))

    chosenSong.setAttribute("id", "chosen-song" + songTransferId)
    chosenSongCol.setAttribute("id", "chosen-song-col" + songTransferId)
    chosenSongTitle.innerText = song.title
    chosenSongTitle.setAttribute("id", "chosen-song-title" + songTransferId)
    chosenSongAuthor.innerText = song.author
    chosenSongAuthor.setAttribute("id", "chosen-song-author" + songTransferId)
    chosenSongTransfer.innerHTML = '<i class="demo-icon icon-cancel-circled2"></i>'
    setAttributes(chosenSongTransfer, { "onclick": "transferBack(this.id)", "id": "chosen-song-transfer" + chosenSongsAmount })
}

function saveChosenSongToArray(chosenSongsAmount, songTransferId) {
    let chosenSongs = getFromLocalStorage("chosenSongs")
    chosenSongs[chosenSongsAmount] = songTransferId
    localStorage["chosenSongs"] = JSON.stringify(chosenSongs)
}

function loadChosenSongsList() {
    let chosenSongsList = "",
        voteScreenSongsList = ""
    let chosenSongs = getFromLocalStorage("chosenSongs")

    for (i = chosenSongs.length - 1; i >= 0; i--) {
        song = JSON.parse(localStorage["song" + chosenSongs[i]])
        chosenSongsList +=
            '<div id="chosen-song' + chosenSongs[i] + '" class="chosen-song">' +
            '<div class="chosen-song-col">' +
            '<div id="chosen-song-title' + chosenSongs[i] + '" class="chosen-song-title">' + song.title + '</div>' +
            '<div id="chosen-song-author' + chosenSongs[i] + '" class="chosen-song-author">' + song.author + '</div>' +
            '</div>' +
            '<div id="chosen-song-transfer' + i + '" class="chosen-song-transfer"  onclick="transferBack(this.id)"><i class="demo-icon icon-cancel-circled2"></i></div>' +
            '</div>'
        voteScreenSongsList += '<div id="vote-screen-song' + chosenSongs[i] + '" class="vote-screen-song">' +
            '<div class="vote-screen-song-col"><i class="demo-icon icon-music"></i></div>' +
            '<div class="vote-screen-song-col">' +
            '<div id="vote-screen-song-title' + chosenSongs[i] + '" class="vote-screen-song-title">' + song.title + '</div>' +
            '<div id="vote-screen-song-author' + chosenSongs[i] + '" class="vote-screen-song-author">' + song.author + '</div>' +
            '</div>' +
            '<div class="vote-screen-song-col">' +
            '<div id="vote-screen-song-choose' + chosenSongs[i] + '" class="vote-screen-song-choose" onclick="chooseVoteScreenSong(this.id)">' +
            '<i class="demo-icon icon-right-big"></i></div>' +
            '<p id="chosenSongsIndex" style="display:none;">' + i + '</p>' + '</div>' +
            '</div>'
    }
    document.getElementById("chosen-songs-container-list").innerHTML = chosenSongsList
    document.getElementById("vote-screen-songs-container").innerHTML = voteScreenSongsList
}

function getFromLocalStorage(arrayKey) {
    return localStorage.getItem(arrayKey) != null ? JSON.parse(localStorage[arrayKey]) : []
}

function transferBack(chosenSongsIndex) {
    chosenSongsIndex = chosenSongsIndex.slice(CHOSEN_SONG_CHARACTERS_SLICED_AMOUNT)
    let chosenSongsAmount = localStorage.getItem("chosenSongsAmount")
    let chosenSongs = getFromLocalStorage("chosenSongs")
    let votedSongsVotes = getFromLocalStorage("votedSongsVotes")
    chosenSongs.splice(chosenSongsIndex, 1)
    votedSongsVotes.splice(chosenSongsIndex, 1)
    localStorage["chosenSongs"] = JSON.stringify(chosenSongs)
    localStorage["votedSongsVotes"] = JSON.stringify(votedSongsVotes)

    chosenSongsAmount--
    localStorage.setItem("chosenSongsAmount", chosenSongsAmount)
    loadChosenSongsList();
}
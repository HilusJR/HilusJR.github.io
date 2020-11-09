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
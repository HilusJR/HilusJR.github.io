function checkPage() {
    let page = localStorage.getItem("page")
    switch (page) {
        case "admin":
            setDisplayStyle("block", "none", "none")
            break
        case "voteScreen":
            setDisplayStyle("none", "block", "none")
            break
        case "resultsScreen":
            setDisplayStyle("none", "none", "block")
            loadVotedSongsList()
            break
        default:
            setDisplayStyle("none", "block", "none")
    }
}

function goToScreen(clickedElemId) {
    switch (clickedElemId) {
        case "navbar-admin":
            setDisplayStyle("block", "none", "none")
            localStorage.setItem("page", "admin")
            break
        case "chosen-songs-container-vote":
        case "back-to-vote-screen":
            setDisplayStyle("none", "block", "none")
            localStorage.setItem("page", "voteScreen")
            loadChosenSongsList()
            break
        case "navbar-results":
            setDisplayStyle("none", "none", "block")
            localStorage.setItem("page", "resultsScreen")
            loadVotedSongsList()
            break
        default:
            alert("Something went wrong, please contact developer!")
    }
}

function setDisplayStyle(adminState, voteScreenState, resultsScreenState) {
    const admin = document.getElementById("admin")
    const voteScreen = document.getElementById("vote-screen")
    const resultsScreen = document.getElementById("results-screen")
    admin.style.display = adminState
    voteScreen.style.display = voteScreenState
    resultsScreen.style.display = resultsScreenState
}

function actionFeedback(action) {
    if (action == null) return

    const feedbackBackground = document.querySelector("#feedback-background")
    const feedbackWindow = document.querySelector("#feedback-window")
    feedbackBackground.style.display = "flex"
    switch (action) {
        case "add":
            feedbackWindow.innerText = "Piosenka została pomyślnie dodana."
            break;
        case "add-error":
            feedbackWindow.innerText = "Nie podano tytułu lub wykonawcy."
            break;
        case "vote":
            feedbackWindow.innerText = "Dziękujemy za oddanie głosu."
            break;
        case "vote-error":
            feedbackWindow.innerText = "Nie wybrano piosenki!"
            break;
        case "password-error":
            feedbackWindow.innerText = "Niepoprawne"
            break;
        default:
            return
    }
    setTimeout(() => {
        feedbackBackground.style.display = "none"
    }, 3000)
}
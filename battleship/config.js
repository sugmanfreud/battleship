// Open Name Form
function openPlayerConfig(event) {
    nameForm.classList.remove("hide");
    backdrop.classList.remove("hide");
    editingPlayer = +event.target.dataset.playerid;
}

function closePlayerConfig() {
    nameForm.classList.add("hide");
    backdrop.classList.add("hide");
    formElement[0].classList.remove("warning");
    configError.classList.add("hide");
    inputElementForm.value = "";
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("player-name").trim();


    if (!enteredPlayerName) {
        configError.classList.remove("hide");
        event.target[0].classList.add("warning");
        return;
    }
    const updatedPlayerName = document.getElementById("playername-" + editingPlayer)
    updatedPlayerName.textContent = enteredPlayerName;
    players[editingPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}
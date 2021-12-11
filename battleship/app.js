// PLAYER DATA
let setupTotalChosenP1 = 0;
let setupTotalChosenP2 = 0;
let whoWon = 0;
let player1Hits = 0;
let player2Hits = 0;

let sunkSmallP1 = 2;
let sunkMedTwoP1 = 3;
let sunkMedOneP1 = 3;
let sunkLargeP1 = 4;
let sunkLargestP1 = 5;

let sunkSmallP2 = 2;
let sunkMedOneP2 = 3;
let sunkMedTwoP2 = 3;
let sunkLargeP2 = 4;
let sunkLargestP2 = 5;


const gameData1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const gameData2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const players = [{
        name: "Player1",
        symbol: ""
    },
    {
        name: "Player2",
        symbol: ""
    }
];
// GAME
const reset = document.getElementById("reset");
const allBoard1Squares = document.querySelectorAll(".squareb1");
const allBoard2Squares = document.querySelectorAll(".squareb2");

const buttonStartNewGame = document.getElementById("start-new-game");

const playerTurn = document.getElementById("turn");
const playerTurnBanner = document.getElementById("turn-banner");
const largest = document.getElementById("largest");
const large= document.getElementById("large");
const med2 = document.getElementById("med-2");
const med1 = document.getElementById("med-1");
const small = document.getElementById("small");
const attack = document.getElementById("attack")

const missed = document.getElementById("missed");
const missedUser = document.getElementById("missed-user");
const board1 = document.getElementById("board-1-list");
const board2 = document.getElementById("board-2-list");
const winnerBanner = document.getElementById("winner");
const declaredWinner = document.getElementById("declared-winner");
const pass = document.getElementById("pass");

const p1s5 = document.getElementsByClassName("p1s5");
const p1s4 = document.getElementsByClassName("p1s4");
const p1s3 = document.getElementsByClassName("p1s3");
const p1s2 = document.getElementsByClassName("p1s2");
const p1s1 = document.getElementsByClassName("p1s1");

const p2s5 = document.getElementsByClassName("p2s5");
const p2s4 = document.getElementsByClassName("p2s4");
const p2s3 = document.getElementsByClassName("p2s3");
const p2s2 = document.getElementsByClassName("p2s2");
const p2s1 = document.getElementsByClassName("p2s1");


const hitP1 = document.getElementById("hitP1");
const hitP2 = document.getElementById("hitP2");
const hitCounterP1 = document.getElementById("hit-counterP1");
const hitCounterP2 = document.getElementById("hit-counterP2");
const sunk1 = document.getElementById("sunk1");
const sunk2 = document.getElementById("sunk2");

const ship1 = document.getElementById("ship1");
const ship2 = document.getElementById("ship2");
const ship3 = document.getElementById("ship3");
const ship4 = document.getElementById("ship4");
const ship5 = document.getElementById("ship5");
const ship6 = document.getElementById("ship6");
const ship7 = document.getElementById("ship7");
const ship8 = document.getElementById("ship8");
const ship9 = document.getElementById("ship9");
const ship10 = document.getElementById("ship10");



// Dataset: DOMStringMap
// col1: "1"
// row1: "1"



// Form and BackDrop
const spacer = document.getElementById("spacer");
const playersMenu = document.getElementsByClassName("players-menu")[0];
const inputElementForm = document.getElementById("player-name");
const configError = document.getElementById("config-error");
const formElement = document.querySelector("form");
const nameForm = document.getElementsByClassName("player-field")[0];
const backdrop = document.getElementsByClassName("backdrop")[0];
const buttonElementCancel = document.getElementById("cancel");
const buttonElementEnter = document.getElementById("submit");

// Edit Buttons
const buttonElementPlayer1 = document.getElementById("player-one-edit");
const buttonElementPlayer2 = document.getElementById("player-two-edit");

// buttons
buttonElementPlayer1.addEventListener("click", openPlayerConfig);
buttonElementPlayer2.addEventListener("click", openPlayerConfig);
buttonElementCancel.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);



// Setup Game and REset

buttonStartNewGame.addEventListener("click", startGameInitPlayer1);
reset.addEventListener("click", resetGameData);

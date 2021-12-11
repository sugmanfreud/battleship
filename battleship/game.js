// START GAME

function startGameInitPlayer1() {
    playersMenu.style.display = "none";
    spacer.classList.remove("hide");
    reset.style.display = "block";
    document.getElementById("player-name");
    board1.classList.add("setup");
    setupTotalChosenP1 = 0;

    // Player 1 Setup Init
    for (const squareOf of allBoard1Squares) {
        squareOf.addEventListener("click", setupShips1);
        squareOf.addEventListener("click", addShipValuesP1);
        squareOf.classList.add("pointer");
    }
    playerTurnBanner.classList.remove("hide");
    playerTurn.textContent = players[0].name;

    pass.classList.remove("hide");
    small.classList.remove("hide");
    med1.classList.remove("hide");
    med2.classList.remove("hide");
    large.classList.remove("hide");
    largest.classList.remove("hide");
};


function setupShips1(event) {
    const chosenPlot1 = event.target;
    const chosenRow1 = +chosenPlot1.dataset.row1;
    const chosenCol1 = +chosenPlot1.dataset.col1;

    if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 1 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 2 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 3 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 4 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 5) {
        return
    };

    setupTotalChosenP1++;

    if (setupTotalChosenP1 > 17) {
        pass.classList.add("hide");
        for (const squareOf of allBoard1Squares) {
            squareOf.classList.remove("setup-ships1")
        }

        for (const squareOf of allBoard1Squares) {
            squareOf.removeEventListener("click", setupShips1);
            squareOf.classList.remove("pointer");
        }

        // init player 2 setup
        board1.classList.remove("setup");
        startGameInitPlayer2();
        return;
    } else if (setupTotalChosenP1 >= 17) {
        largest.classList.add("hide");
    } else if (setupTotalChosenP1 >= 12) {
        large.classList.add("hide");
    } else if (setupTotalChosenP1 >= 8) {
        med2.classList.add("hide");
    } else if (setupTotalChosenP1 >= 5) {
        med1.classList.add("hide");
    } else if (setupTotalChosenP1 >= 2) {
        small.classList.add("hide");
    } else if (setupTotalChosenP1 >= 0) {

    }


    chosenPlot1.classList.add("setup-ships1");
}


// NEW FEATURE SHIP NUMBERS P1
function addShipValuesP1(event) {
    const chosenPlot1 = event.target;
    const chosenRow1 = +chosenPlot1.dataset.row1;
    const chosenCol1 = +chosenPlot1.dataset.col1;

    if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 1 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 2 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 3 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 4 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 5 ||
        setupTotalChosenP1 > 17) {
        return
    };



    if (setupTotalChosenP1 > 12) {
        gameData1[chosenRow1 - 1][chosenCol1 - 1] = 5;
    } else if (setupTotalChosenP1 > 8) {
        gameData1[chosenRow1 - 1][chosenCol1 - 1] = 4;
    } else if (setupTotalChosenP1 > 5) {
        gameData1[chosenRow1 - 1][chosenCol1 - 1] = 3;
    } else if (setupTotalChosenP1 > 2) {
        gameData1[chosenRow1 - 1][chosenCol1 - 1] = 2;
    } else if (setupTotalChosenP1 >= 0) {
        gameData1[chosenRow1 - 1][chosenCol1 - 1] = 1;
    }
    console.log(gameData1);
}






function startGameInitPlayer2() {
    board2.classList.add("setup");
    setupTotalChosenP2 = 0;

    // Player 1 Setup Init
    for (const squareOf of allBoard2Squares) {
        squareOf.addEventListener("click", setupShips2);
        squareOf.addEventListener("click", addShipValuesP2);
        squareOf.classList.add("pointer");
    }
    playerTurn.textContent = players[1].name;

    pass.classList.remove("hide");
    small.classList.remove("hide");
    med1.classList.remove("hide");
    med2.classList.remove("hide");
    large.classList.remove("hide");
    largest.classList.remove("hide");
};



function setupShips2(event) {
    const chosenPlot2 = event.target;
    const chosenRow2 = +chosenPlot2.dataset.row2;
    const chosenCol2 = +chosenPlot2.dataset.col2;

    if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 1 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 2 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 3 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 4 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 5
    ) {
        return;
    };

    setupTotalChosenP2++;

    if (setupTotalChosenP2 > 17) {
        pass.classList.add("hide");

        for (const squareOf of allBoard2Squares) {
            squareOf.classList.remove("setup-ships2")
        }

        for (const squareOf of allBoard2Squares) {
            squareOf.removeEventListener("click", setupShips2);
            squareOf.classList.remove("pointer");
        }
        board2.classList.remove("setup");
        initMainGame();
        return;
    } else if (setupTotalChosenP2 >= 17) {
        largest.classList.add("hide");
    } else if (setupTotalChosenP2 >= 12) {
        large.classList.add("hide");
    } else if (setupTotalChosenP2 >= 8) {
        med2.classList.add("hide");
    } else if (setupTotalChosenP2 >= 5) {
        med1.classList.add("hide");
    } else if (setupTotalChosenP2 >= 2) {
        small.classList.add("hide");
    }

    chosenPlot2.classList.add("setup-ships2");

};

// NEW FEATURE SHIP NUMBERS P2
function addShipValuesP2(event) {
    const chosenPlot2 = event.target;
    const chosenRow2 = +chosenPlot2.dataset.row2;
    const chosenCol2 = +chosenPlot2.dataset.col2;

    if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 1 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 2 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 3 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 4 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 5 ||
        setupTotalChosenP2 > 17) {
        return
    };



    if (setupTotalChosenP2 > 12) {
        gameData2[chosenRow2 - 1][chosenCol2 - 1] = 5;
    } else if (setupTotalChosenP2 > 8) {
        gameData2[chosenRow2 - 1][chosenCol2 - 1] = 4;
    } else if (setupTotalChosenP2 > 5) {
        gameData2[chosenRow2 - 1][chosenCol2 - 1] = 3;
    } else if (setupTotalChosenP2 > 2) {
        gameData2[chosenRow2 - 1][chosenCol2 - 1] = 2;
    } else if (setupTotalChosenP2 >= 0) {
        gameData2[chosenRow2 - 1][chosenCol2 - 1] = 1;
    }
    console.log(gameData2);
}







function initMainGame() {
    largest.classList.add("hide");
    attack.classList.add("hide");

    let whoGoesFirst = Math.floor(Math.random() * 2) + 1;
    if (whoGoesFirst === 1) {
        player1Turn();
    } else {
        player2Turn();
        playerTurn.textContent = players[1].name;
    };
}

function player1Turn() {
    playerTurn.textContent = players[0].name;


    for (const squareOf of allBoard2Squares) {
        squareOf.addEventListener("click", attackShipsP1Turn);
        squareOf.addEventListener("click", checkIfP2isSunk);
        squareOf.classList.add("pointer");
    }
    board1.classList.remove("attack");
    board2.classList.add("attack");
}

function player2Turn() {
    playerTurn.textContent = players[1].name;

    for (const squareOf of allBoard1Squares) {
        squareOf.addEventListener("click", attackShipsP2Turn);
        squareOf.addEventListener("click", checkIfP1isSunk);
        squareOf.classList.add("pointer");
    }
    board2.classList.remove("attack");
    board1.classList.add("attack");
}

function attackShipsP1Turn(event) {
    const chosenPlot2 = event.target;

    const chosenRow2 = +chosenPlot2.dataset.row2;
    const chosenCol2 = +chosenPlot2.dataset.col2;
    console.log(gameData2);

    if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 0) {
        chosenPlot2.classList.add("missed-ships")
        missed.classList.remove("hide")
        missedUser.textContent = players[0].name;
    } else if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 1 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 2 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 3 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 4 ||
        gameData2[chosenRow2 - 1][chosenCol2 - 1] === 5){
        chosenPlot2.classList.add("hit-ships")
        missed.classList.add("hide")
        hitP1.classList.remove("hide")

        hitCounterPlayer1()
        // gameData2[chosenRow2 - 1][chosenCol2 - 1] = 9;

        return;
    }
    hitP1.classList.add("hide")
    player2Turn()

    for (const squareOf of allBoard2Squares) {
        squareOf.removeEventListener("click", attackShipsP1Turn);
        squareOf.classList.remove("pointer");
    }
}

function attackShipsP2Turn(event) {
    const chosenPlot1 = event.target;
    const chosenRow1 = +chosenPlot1.dataset.row1;
    const chosenCol1 = +chosenPlot1.dataset.col1;

    if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 0){
        chosenPlot1.classList.add("missed-ships");
        missed.classList.remove("hide")
        missedUser.textContent = players[1].name;
    } else if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 1 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 2 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 3 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 4 ||
        gameData1[chosenRow1 - 1][chosenCol1 - 1] === 5
    ) {
        missed.classList.add("hide")
        chosenPlot1.classList.add("hit-ships")
        hitP2.classList.remove("hide")

        console.log(gameData1);
        hitCounterPlayer2()
        // gameData1[chosenRow1 - 1][chosenCol1 - 1] = 9;

        return;
    }
    hitP2.classList.add("hide")
    player1Turn()

    for (const squareOf of allBoard1Squares) {
        squareOf.removeEventListener("click", attackShipsP1Turn);
        squareOf.classList.remove("pointer");
    }
}

function hitCounterPlayer1() {
    player1Hits++
    console.log(player1Hits);
    hitCounterP1.textContent = player1Hits;
    if (player1Hits === 17) {
        winnerBanner.classList.remove("hide");
        winnerBanner.classList.add("winner-1")
        declaredWinner.textContent = players[0].name;
        playerTurnBanner.classList.add("hide");
        playerTurnBanner.classList.add("winner-1");
    }

}

function hitCounterPlayer2() {
    player2Hits++
    console.log(player2Hits);
    hitCounterP2.textContent = player2Hits;
    if (player2Hits === 17) {
        winnerBanner.classList.remove("hide");
        winnerBanner.classList.add("winner-2");
        declaredWinner.textContent = players[1].name;
        playerTurnBanner.classList.add("hide");
        playerTurnBanner.classList.add("winner-2");
    }
}


function checkIfP1isSunk(event) {
    const chosenPlot1 = event.target;
    const chosenRow1 = +chosenPlot1.dataset.row1;
    const chosenCol1 = +chosenPlot1.dataset.col1;
    if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 5) {
        chosenPlot1.classList.add("p1s5");
        sunkLargestP1--;
        if (sunkLargestP1 === 0) {
            ship5.textContent = "Aircraft Carrier 5"
            ship5.classList.remove("hide");

            p1s5[0].style.backgroundColor = "grey";
            p1s5[1].style.backgroundColor = "grey";
            p1s5[2].style.backgroundColor = "grey";
            p1s5[3].style.backgroundColor = "grey";
            p1s5[4].style.backgroundColor = "grey";
            p1s5[4].style.backgroundColor = "grey";

        }
    } else if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 4) {
        chosenPlot1.classList.add("p1s4");
        sunkLargeP1--;
        if (sunkLargeP1 === 0) {
            ship4.textContent = "Battleship 4";
            ship4.classList.remove("hide");

            p1s4[0].style.backgroundColor = "grey";
            p1s4[1].style.backgroundColor = "grey";
            p1s4[2].style.backgroundColor = "grey";
            p1s4[3].style.backgroundColor = "grey";

        }
    } else if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 3) {
        chosenPlot1.classList.add("p1s3");
        sunkMedTwoP1--;
        if (sunkMedTwoP1 === 0) {
            ship3.textContent = "Submarine 3";
            ship3.classList.remove("hide");

            p1s3[0].style.backgroundColor = "grey";
            p1s3[1].style.backgroundColor = "grey";
            p1s3[2].style.backgroundColor = "grey";

        }
    } else if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 2) {
        chosenPlot1.classList.add("p1s2");
        sunkMedOneP1--;
        if (sunkMedOneP1 === 0) {
            ship2.textContent = "Cruiser 3";
            ship2.classList.remove("hide");

            p1s2[0].style.backgroundColor = "grey";
            p1s2[1].style.backgroundColor = "grey";
            p1s2[2].style.backgroundColor = "grey";

        }
    } else if (gameData1[chosenRow1 - 1][chosenCol1 - 1] === 1) {
        chosenPlot1.classList.add("p1s1");
        sunkSmallP1--;
        if (sunkSmallP1 === 0) {
            ship1.textContent = "Destroyer 2";
            ship1.classList.remove("hide");

            p1s1[0].style.backgroundColor = "grey";
            p1s1[1].style.backgroundColor = "grey";
        }
    }



};

function checkIfP2isSunk(event) {
    const chosenPlot2 = event.target;
    const chosenRow2 = +chosenPlot2.dataset.row2;
    const chosenCol2 = +chosenPlot2.dataset.col2;
    if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 5) {
        chosenPlot2.classList.add("p2s5");
        sunkLargestP2--;
        if (sunkLargestP2 === 0) {
            ship10.textContent = "Aircraft Carrier 5"
            ship10.classList.remove("hide");

            p2s5[0].style.backgroundColor = "grey";
            p2s5[1].style.backgroundColor = "grey";
            p2s5[2].style.backgroundColor = "grey";
            p2s5[3].style.backgroundColor = "grey";
            p2s5[4].style.backgroundColor = "grey";
            p2s5[4].style.backgroundColor = "grey";


        }
    } else if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 4) {
        chosenPlot2.classList.add("p2s4");
        sunkLargeP2--;
        if (sunkLargeP2 === 0) {
            ship9.textContent = "Battleship 4";
            ship9.classList.remove("hide");

            p2s4[0].style.backgroundColor = "grey";
            p2s4[1].style.backgroundColor = "grey";
            p2s4[2].style.backgroundColor = "grey";
            p2s4[3].style.backgroundColor = "grey";

        }
    } else if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 3) {
        chosenPlot2.classList.add("p2s3");
        sunkMedTwoP2--;
        if (sunkMedTwoP2 === 0) {
            ship8.textContent = "Submarine 3";
            ship8.classList.remove("hide");

            p2s3[0].style.backgroundColor = "grey";
            p2s3[1].style.backgroundColor = "grey";
            p2s3[2].style.backgroundColor = "grey";

        }
    } else if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 2) {
        chosenPlot2.classList.add("p2s2");
        sunkMedOneP2--;
        if (sunkMedOneP2 === 0) {
            ship7.textContent = "Cruiser 3";
            ship7.classList.remove("hide");

            p2s2[0].style.backgroundColor = "grey";
            p2s2[1].style.backgroundColor = "grey";
            p2s2[2].style.backgroundColor = "grey";

        }
    } else if (gameData2[chosenRow2 - 1][chosenCol2 - 1] === 1) {
        chosenPlot2.classList.add("p2s1");
        sunkSmallP2--;
        if (sunkSmallP2 === 0) {
            ship6.textContent = "Destroyer 2";
            ship6.classList.remove("hide");

            p2s1[0].style.backgroundColor = "grey";
            p2s1[1].style.backgroundColor = "grey";
        }
    }

};



function resetGameData() {
    player1Hits = 0;
    player2Hits = 0;


    playerTurnBanner.classList.remove("winner-1");
    playerTurnBanner.classList.remove("winner-2");
    ship1.classList.add("hide");
    ship2.classList.add("hide");
    ship3.classList.add("hide");
    ship4.classList.add("hide");
    ship5.classList.add("hide");
    ship6.classList.add("hide");
    ship7.classList.add("hide");
    ship8.classList.add("hide");
    ship9.classList.add("hide");
    ship10.classList.add("hide");

    missed.classList.add("hide")
    winnerBanner.classList.add("hide")
    winnerBanner.classList.remove("winner-1")
    winnerBanner.classList.remove("winner-2")
    board1.classList.remove("attack");
    board2.classList.remove("attack");
    board1.classList.remove("setup");
    board2.classList.remove("setup");
    pass.classList.add("hide");
    playerTurnBanner.classList.add("hide");
    reset.style.display = "none";
    playersMenu.style.display = "grid";
    spacer.classList.add("hide");
    whoWon = 0;
    for (const squareOf of allBoard1Squares) {
        squareOf.classList.remove("p1s5");
        squareOf.classList.remove("p1s4");
        squareOf.classList.remove("p1s3");
        squareOf.classList.remove("p1s2");
        squareOf.classList.remove("p1s1");
        squareOf.style.backgroundColor = "";
        squareOf.removeEventListener("click", attackShipsP2Turn);
        squareOf.removeEventListener("click", checkIfP1isSunk);
        squareOf.removeEventListener("click", checkIfP1isSunk);
        squareOf.removeEventListener("click", addShipValuesP1);
        squareOf.classList.add("pointer");
        squareOf.removeEventListener("click", attackShipsP1Turn);
        squareOf.removeEventListener("click", setupShips1)
        squareOf.classList.remove("pointer");
        squareOf.classList.remove("hit-ships");
        squareOf.classList.remove("missed-ships");
        squareOf.classList.remove("setup-ships1");
    }

    for (const squareOf of allBoard2Squares) {
        squareOf.classList.remove("p2s5");
        squareOf.classList.remove("p2s4");
        squareOf.classList.remove("p2s3");
        squareOf.classList.remove("p2s2");
        squareOf.classList.remove("p2s1");
        squareOf.style.backgroundColor = "";
        squareOf.removeEventListener("click", attackShipsP1Turn);
        squareOf.removeEventListener("click", checkIfP2isSunk);

        squareOf.removeEventListener("click", checkIfP2isSunk);
        squareOf.removeEventListener("click", addShipValuesP2);
        squareOf.classList.add("pointer");
        squareOf.removeEventListener("click", attackShipsP2Turn);
        squareOf.removeEventListener("click", setupShips2)
        squareOf.classList.remove("pointer");
        squareOf.classList.remove("hit-ships")
        squareOf.classList.remove("missed-ships")
        squareOf.classList.remove("setup-ships2");
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            gameData1[i][j] = 0;
            gameData1[i][j] = 0
        }
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            gameData2[i][j] = 0;
            gameData2[i][j] = 0
        }
    }

    hitP1.classList.add("hide")
    hitP2.classList.add("hide")
    small.classList.add("hide");
    med1.classList.add("hide");
    med2.classList.add("hide");
    large.classList.add("hide");
    largest.classList.add("hide");




}
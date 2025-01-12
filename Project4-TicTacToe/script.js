function Gameboard() {
    const gameboard = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => gameboard;

    const updateBoard = (index, marker) => {
        if (isSpotAvailable(index)) {
            gameboard[index] = marker;
        }
    };

    const resetBoard = () => {
        for (let i = 0; i < gameboard.length; i++) {
            gameboard[i] = '';
        }
    };

    const isSpotAvailable = (index) => gameboard[index] === '';

    return { getBoard, updateBoard, resetBoard, isSpotAvailable };
}

function Player(name, marker) {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker };
}

// function gamecontroller() {
//     let players = [Player("Player 1", 'X'), Player("Player 2", 'O')];
//     const board = Gameboard();
//     const display = displayControl();

//     const win = () => {
//         const winConditions = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8],
//             [0, 3, 6], [1, 4, 7], [2, 5, 8],
//             [0, 4, 8], [2, 4, 6]
//         ];
//         const gameboard = board.getBoard();
//         return winConditions.some(([a, b, c]) => {
//             return gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c];
//         });
//     };

//     const tie = () => {
//         return board.getBoard().every(cell => cell !== '');
//     };

//     const getindex = (id) => {
//         switch (id) {
//             case "r11": return 0;
//             case "r12": return 1;
//             case "r13": return 2;
//             case "r21": return 3;
//             case "r22": return 4;
//             case "r23": return 5;
//             case "r31": return 6;
//             case "r32": return 7;
//             case "r33": return 8;
//             default: return -1; // Return -1 if the id doesn't match any case
//         }
//     };

//     const play = () => {
//         let currentPlayerIndex = 0;
       
//         display.updateStatus("Game START!");
//         const cells = document.querySelectorAll(".cell");

//         cells.forEach(cell => {
//             cell.addEventListener("click", () => {
//                 const id = cell.id;
//                 const index = getindex(id);
//                 if (index === -1 || !board.isSpotAvailable(index)) return; // Ignore invalid or occupied cells

//                 const currentPlayer = players[currentPlayerIndex];
//                 board.updateBoard(index, currentPlayer.getMarker());
//                 display.updatescreen(id, currentPlayer.getMarker());

//                 if (win()) {
//                     display.updateStatus(`${currentPlayer.getName()} WON!`);
//                     return;
//                 }

//                 if (tie()) {
//                     display.updateStatus("It was a tie");
//                     return;
//                 }

//                 currentPlayerIndex = 1 - currentPlayerIndex; // Switch player
//             });
//         });
//     };

//     const startgame = () => {
//         board.resetBoard();
//         play();
//     };

//     return { startgame };
// }
function gamecontroller() {
    let players = [Player("Player 1", 'X'), Player("Player 2", 'O')];
    const board = Gameboard();
    const display = displayControl();

    const win = () => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        const gameboard = board.getBoard();
        return winConditions.some(([a, b, c]) => {
            return gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c];
        });
    };

    const tie = () => {
        return board.getBoard().every(cell => cell !== '');
    };

    const getindex = (id) => {
        switch (id) {
            case "r11": return 0;
            case "r12": return 1;
            case "r13": return 2;
            case "r21": return 3;
            case "r22": return 4;
            case "r23": return 5;
            case "r31": return 6;
            case "r32": return 7;
            case "r33": return 8;
            default: return -1; // Return -1 if the id doesn't match any case
        }
    };

    const play = () => {
        let currentPlayerIndex = 0;
        display.updateStatus("Game START!");
        const cells = document.querySelectorAll(".cell");

        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                const id = cell.id;
                const index = getindex(id);
                if (index === -1 || !board.isSpotAvailable(index)) return; // Ignore invalid or occupied cells

                const currentPlayer = players[currentPlayerIndex];
                board.updateBoard(index, currentPlayer.getMarker());
                display.updatescreen(id, currentPlayer.getMarker());

                if (win()) {
                    display.updateStatus(`${currentPlayer.getName()} WON!`);
                    return;
                }

                if (tie()) {
                    display.updateStatus("It was a tie");
                    return;
                }

                currentPlayerIndex = 1 - currentPlayerIndex; // Switch player
            });
        });
    };

    const startgame = () => {
        board.resetBoard();
        display.initialScreen();
        play();
    };

    return { startgame };
}

document.addEventListener("DOMContentLoaded", () => {
    gametictactoe = gamecontroller();
    const display = displayControl();
    display.initialScreen();
});


function displayControl() {
    const initialScreen = () => {
        const contbutton = document.querySelector("#continue");
        const containerclass = document.querySelector(".container");

        if (contbutton && containerclass) {
            contbutton.addEventListener("click", () => {
           
                const player1name = document.querySelector("#Player-1").value || "Player 1";
                const player2name = document.querySelector("#Player-2").value || "Player 2";

                if (!player1name || !player2name) {
                    alert("Please enter names for both players!");
                    return;
                }
                containerclass.innerHTML = `
                    <div class="player-info">
                        <h1>${player1name} X</h1>
                        <h1>${player2name} O</h1>
                    </div>
                    <div class="board-grid">
                        <div id="r11" class="cell"></div>
                        <div id="r12" class="cell"></div>
                        <div id="r13" class="cell"></div>
                        <div id="r21" class="cell"></div>
                        <div id="r22" class="cell"></div>
                        <div id="r23" class="cell"></div>
                        <div id="r31" class="cell"></div>
                        <div id="r32" class="cell"></div>
                        <div id="r33" class="cell"></div>
                    </div>
                    <div class="Game-button">
                        <button id="restart">RESTART</button>
                    </div>
                    <div id="status"></div>`;

                // Apply styles and initialize game
                applyStyle();
                gametictactoe.startgame();

                // Add event listener for restarting the game
                const restartButton = document.querySelector("#restart");
                restartButton.addEventListener("click", () => {
                    gametictactoe.startgame();
                    const cells = document.querySelectorAll(".cell");
                    cells.forEach(cell => {
                        cell.innerHTML = "";
                    });

                    updateStatus("Game restarted!");
                });
            });
        }
    };

    const updatescreen = (id, marker) => {
        const cell = document.querySelector(`#${id}`);
        if (cell) {
            cell.innerHTML = marker;
        }
    };

    const updateStatus = (stat) => {
        const status = document.querySelector("#status");
        if (status) {
            status.innerHTML = stat;
        }
    };

    const applyStyle = () => {
        const container = document.querySelector(".container");
        if (container) {
            container.style.display = "flex";
            container.style.justifyContent = "center";
            container.style.alignItems = "center";
            container.style.flexDirection = "column";
        }

        const boardGrid = document.querySelector(".board-grid");
        if (boardGrid) {
            boardGrid.style.height = "50vh";
            boardGrid.style.width = "25vw";
            boardGrid.style.display = "grid";
            boardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
            boardGrid.style.gridTemplateRows = "repeat(3, 1fr)";
            boardGrid.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
            boardGrid.style.marginBottom = "12px";
        }

        const cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.style.border = "0.5px solid black";
            cell.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
            cell.style.textAlign = "center";
            cell.style.fontSize = "3rem";
            
        });

        const playerInfo = document.querySelector(".player-info");
        if (playerInfo) {
            playerInfo.style.display = "flex";
            playerInfo.style.justifyContent = "center";
        }

        const playerHeaders = document.querySelectorAll(".player-info h1");
        playerHeaders.forEach(header => {
            header.style.margin = "12px";
        });

        const buttons = document.querySelectorAll(".Game-button button");
        buttons.forEach(button => {
            button.style.height = "25px";
            button.style.width = "150px";
            button.style.margin = "10px";
            button.style.border = "none";
            button.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
            button.style.fontSize = "larger";
            button.style.backgroundColor = "#f54e62";
            button.style.borderRadius = "12px";
            button.style.color = "white";
        });
    };

    return { initialScreen, updateStatus, updatescreen, applyStyle };
}


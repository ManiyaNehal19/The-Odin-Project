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

function gamecontroller() {
    let players = [Player("player1", 'X'), Player("player 2", 'O')];
    const board = Gameboard();

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

    const play = () => {
        let currentPlayerIndex = 0;
        console.log("Game START!");
        for (let i = 0; i < 9; i++) {
            const currentPlayer = players[currentPlayerIndex];
            let index = prompt("Write the Index for the array");
            while (index < 0 || index >= 9 || !board.isSpotAvailable(index)) {
                index = prompt("Invalid index. Please write the Index for the array");
            }

            board.updateBoard(index, currentPlayer.getMarker());

            if (win()) {
                console.log(`${currentPlayer.getName()} WON!`);
                return;
            }

            currentPlayerIndex = 1 - currentPlayerIndex;
        }

        console.log("It was a tie");
    };

    const startgame = () => {
        board.resetBoard();
        play();
    };

    return { startgame };
}
const gametictactoe = gamecontroller();
gametictactoe.startgame();
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cellIndex) {
    console.log(cellIndex)
        if (board[cellIndex] === "" && !checkWin()) {
            board[cellIndex] = currentPlayer;
            const cell = document.querySelectorAll(".cell")[cellIndex];
            cell.innerText = currentPlayer;
            if (checkWin()) {
                document.getElementById("status").innerText = `Player ${currentPlayer} Wins!`;
            } else if (board.every(cell => cell !== "")) {
                document.getElementById("status").innerText = "It's a Tie!";
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                document.getElementById("status").innerText = `Player ${currentPlayer}'s Turn`;
            }
        }
}

function checkWin() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
            return true;
        }
    }
    return false;
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.innerText = "");
    document.getElementById("status").innerText = "Player X's Turn";
}

resetBoard();

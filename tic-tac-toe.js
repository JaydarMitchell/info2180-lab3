//alert('Code Working?')
window.onload = function() {


    const boardgame = document.getElementById("board");
    const boardelements = boardgame.getElementsByTagName("div");
    const statusDiv = document.getElementById("status");

    boardgame.classList.add("board");

    let X = true;
    let boardState = Array(9).fill("");
    let end = false; // Track if game has ended

    // variable to track the winning combinations:
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    function checkWinner() {
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                return boardState[a]; // "X" or "O"
            }
        }
        return null;
    }

    for (let i = 0; i < boardelements.length; i++) {
        const square = boardelements[i];
        square.classList.add("square");

        // Click eventlistener
        square.addEventListener("click", function() {
            if (square.textContent !== "" || end) return;

            const currentPlayer = X ? "X" : "O";
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            boardState[i] = currentPlayer;





            const winner = checkWinner();
            if (winner) {

                statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                statusDiv.classList.add("you-won");
                end = true;
            }

            X = !X;
        });

        // Hover effect
        square.addEventListener("mouseenter", function() {
            if (!end && square.textContent === "") square.classList.add("hover");
        });
        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });
    }
};

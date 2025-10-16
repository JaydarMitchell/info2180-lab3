window.onload = function() {
    const boardgame = document.getElementById("board");
    const boardelements = boardgame.getElementsByTagName("div");

    boardgame.classList.add("board");

    let X = true;
    let boardState = Array(9).fill("");

    for (let i = 0; i < boardelements.length; i++) {
        const square = boardelements[i];
        square.classList.add("square");

        // Click eventlistener for X/O
        square.addEventListener("click", function() {
            if (square.textContent !== "") return;

            if (X) {
                square.textContent = "X";
                square.classList.add("X");
                boardState[i] = "X";
            } else {
                square.textContent = "O";
                square.classList.add("O");
                boardState[i] = "O";
            }

            X = !X;// Allows for switch between X and O
        });

        
        square.addEventListener("mouseenter", function() {
            square.classList.add("hover");
            //class list adds hover effect
        });

        
        square.addEventListener("mouseleave", function() {
            // css hover effect pauses when mouse leaves.
            square.classList.remove("hover");
        });
    }
};

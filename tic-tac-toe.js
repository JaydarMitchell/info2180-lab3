//alert("Code not working");
window.onload = function() {
    const boardgame = document.getElementById("board");
    const boardelements = boardgame.getElementsByTagName("div");





    boardgame.classList.add("board");


    let X = true;


    let boardState = Array(9).fill("");

    for (let i = 0; i < boardelements.length; i++) {
        const square = boardelements[i];
        square.classList.add("square");


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



            X = !X;


            //console.log(boardState);
        });
    }
};

//alert("Code not working");

    window.onload = function() {
        const boardgame = document.getElementById("board");
        const boardelements = boardgame.getElementsByTagName("div");

        // Add a "board" class (optional)
        boardgame.classList.add("board");


        for (let i = 0; i < boardelements.length; i++) {
            boardelements[i].classList.add("square");
        }


        //alert("JavaScript is running!");
    };



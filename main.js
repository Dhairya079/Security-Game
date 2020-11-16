function startGame() {
    gameLoop();
}
var loops = 0;
var peopleVisible = false;

function gameLoop() {
    peopleVisible = !peopleVisible;
    loops++;
    if (loops < 12) {
        console.log(loops, peopleVisible);
        //flashCharacters();
        setTimeout(gameLoop, 3000);
    } else {
        alert("Game Over!");
    }
}

function flashCharacters() {
    var board = document.getElementById("board");
    var classToSet = "";
    if (peopleVisible) {
        classToSet = "character visible";
    } else {
        classToSet = "character hidden";
    }
    for (var index = 0; index < 6; index++) {
        //console.log(board.children[index].className);
        board.children[index].className = classToSet;
        //console.log(board.children[index].className);
    }
}

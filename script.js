

const container = document.querySelector(`#container`);
const containerSize = 560;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;


// const squares = prompt("Numbe of squares: ");
// const numberOfSquares = squares * squares;



function grid(){
    const squares = prompt("Numbe of squares: ") || 10;
    const numberOfSquares = squares * squares;

    for (let i = 0; i < numberOfSquares; i++){
        const gridCell = document.createElement("div"); 
        gridCell.style.height = `${((containerSize / squares) - 2)}px`;
        gridCell.style.width = `${((containerSize / squares) - 2)}px`;
        gridCell.classList.add("squares");
        container.appendChild(gridCell);
    };

    color();
};



function color(){
    cells = document.querySelectorAll(".squares")
    cells.forEach(cell=> {
        cell.addEventListener("mouseover", function(){
            this.style.backgroundColor = "red";
        });
    });
}


function newGrid(){
    squareRemove();
    grid();

    
};


//buttons
var buttonGrid = document.querySelector(".btn");
var newGridButton = document.createElement("button");
newGridButton.textContent = "Select new grid!";
buttonGrid.appendChild(newGridButton);

var resetButton = document.querySelector(".btnReset");
var gridReset = document.createElement("button");
gridReset.textContent = "RESET";
resetButton.appendChild(gridReset); 



buttonGrid.onclick = newGrid;



//reset grid color
resetButton.onclick = reloadGrid;
function reloadGrid(){
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });

 
};
    




function squareRemove() {
    var container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};


const container = document.querySelector(`#container`);
const containerSize = 600;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

let rows = 10;
let columns = 10;

function grid(){

    for (let i = 0; i < rows * columns; i++){
        const gridCell = document.createElement("div"); 
        gridCell.style.height = `${((containerSize / columns) - 2)}px`;
        gridCell.style.width = `${((containerSize / rows) - 2)}px`;
        gridCell.classList.add("rows");
        container.appendChild(gridCell);
    };
};

grid();



const cells = document.querySelectorAll(".rows")

cells.forEach(cell=> {
    cell.addEventListener("mouseover", function(){
        this.style.backgroundColor = "red";
    });
});
const container = document.querySelector("#container");
const button = document.querySelector("#grid-btn");

const grids = [];

button.addEventListener("click", () => {
    let newGrid = parseInt(prompt("Enter a number of squares per side of the new grid: "));
    removeGrid();
    createGrid(newGrid);
});

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function removeGrid(size = Math.sqrt(grids.length)) {
    if (grids.length > 0 && size > 0) {
        grids.forEach((div) => container.removeChild(div));
        grids.length = 0;
    }
}

function createGrid(size = 16) {

    for (let i = 1; i <= Math.pow(size, 2); i++) {
        grids[i] = document.createElement("div");
    }

    grids.forEach((div) => {
        div.classList.add("grid");
        div.style.width = `${100 / size}%`;
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = random_rgba();
        })
        container.appendChild(div);
    });
}


createGrid();

const container = document.querySelector(".container")
const setGridSize = document.querySelector(".size-btn")
createGrid(gridSize = 16)

function createGrid(gridSize){
    for(let i = 1; i <= gridSize * gridSize; i++ ){
        const element = document.createElement(`div`)
        element.setAttribute("class","grid")
        element.style.flexBasis = `calc( 500px / ${gridSize})`
        element.style.height = `calc(500px / ${gridSize})`
        container.appendChild(element)
    }
    
}

container.addEventListener("mouseover",(event) => {
    let target = event.target
    if(target.classList.contains("grid")){
        target.style.backgroundColor = 'blue'
    }
})

setGridSize.addEventListener("click", () => {
    let userGridSize = Number(prompt("Enter the grid size"))
    if(userGridSize > 100 ||
        userGridSize === 0 ||
        Number.isNaN(userGridSize))
            return alert("Incorrect Input")
    else{
        container.textContent = ""
        createGrid(userGridSize)
    }
} )





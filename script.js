let apple = {} 

const convertCoordinates = (xC, yC) => { // modify like cC
    return `${yC}; ${xC}`
}

let snakeHead = {
    len: 4,
    xCoordinate: 7,
    yCoordinate: 7,
    direction: 'R',
}

let osnkP = [{xCoordinate: 6, yCoordinate: 7}, {xCoordinate: 5, yCoordinate: 7}, {xCoordinate: 4, yCoordinate: 7}]

function cC () {
i = osnkP.length - 1
while (i != -1) {
    osnkP[i].strlocation = convertCoordinates(osnkP[i].xCoordinate, osnkP[i].yCoordinate)
    i--
}
}

snakeHead.strlocation = convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate)
const spawnApple = () => {
    let check = []
    let x = Math.floor(Math.random() * 13 + 1) 
    let y = Math.floor(Math.random() * 13 + 1)
    let id = `${x}; ${y}` 
    if (id === '7; 7' || id === '7; 6' || id === '7; 5' || id === '7; 4') {
        check.push(true)
    }
    else {
        check.push(false)
    }
    while (check[0]) {
    x = Math.floor(Math.random() * 13 + 1) 
    y = Math.floor(Math.random() * 13 + 1)
    id = `${x}; ${y}`
    if (id != '7; 7' || id === '7; 6' || id === '7; 5' || id === '7; 4') {
        check.pop()
        check.push(false)
    }
    }
    apple.xCoordinate = x
    apple.yCoordinate = y 
    const randomTile = document.getElementById(id)
    randomTile.style.backgroundColor = "red"

}

const spawnSnake = () => {
    document.getElementById("7; 7").style.backgroundColor = 'blue'
    document.getElementById("7; 6").style.backgroundColor = 'blue'
    document.getElementById("7; 5").style.backgroundColor = 'blue'
    document.getElementById("7; 4").style.backgroundColor = 'blue'
}

function moveSnakeR () {
    for (i = 0; i < snakeHead.len - 2; i++) {
        osnkP[i].xCoordinate = osnkP[i + 1].xCoordinate
    }
    osnkP[i].xCoordinate = snakeHead.xCoordinate
    renderTiles()
}

function renderTiles() {

}

spawnApple()
spawnSnake()

setTimeout(moveSnakeR, 1000)
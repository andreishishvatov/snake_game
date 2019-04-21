let apple = {} 

const convertCoordinates = (xC, yC) => {
    return `${yC}; ${xC}`
}

function renderTiles() {
    for (i = 0; i < osnkP.length; i++) {
        const id = convertCoordinates(osnkP[i].xCoordinate, osnkP[i].yCoordinate)
        document.getElementById(id).style.backgroundColor = 'blue'
    }
    const hid = convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate)
    document.getElementById(hid).style.backgroundColor = 'blue'
}

let snakeHead = {
    len: 4,
    xCoordinate: 7,
    yCoordinate: 7,
}

snakeHead.strlocation = convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate)

let osnkP = [{xCoordinate: 4, yCoordinate: 7}, {xCoordinate: 5, yCoordinate: 7}, {xCoordinate: 6, yCoordinate: 7}]

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

function moveSnake () { 
    for (i = 0; i < snakeHead.len - 2; i++) {
        const id = convertCoordinates(osnkP[i].xCoordinate, osnkP[i].yCoordinate)
        document.getElementById(id).style.backgroundColor = "green"
        osnkP[i].xCoordinate = osnkP[i + 1].xCoordinate
        osnkP[i].yCoordinate = osnkP[i + 1].yCoordinate
        osnkP[i].strlocation = convertCoordinates(osnkP[i].xCoordinate, osnkP[i].yCoordinate)
    }
    osnkP[i].xCoordinate = snakeHead.xCoordinate
    osnkP[i].yCoordinate = snakeHead.yCoordinate
}

function moveR() {
    if (snakeHead.xCoordinate != 13) { // if more game over
    moveSnake()
    snakeHead.xCoordinate = snakeHead.xCoordinate + 1
    renderTiles()
    }
}

function moveU() {
    if (snakeHead.yCoordinate != 13) {
    moveSnake()
    snakeHead.yCoordinate = snakeHead.yCoordinate + 1
    renderTiles()
    }
}

function moveD() {
    if (snakeHead.yCoordinate != 1) {
    moveSnake()
    snakeHead.yCoordinate = snakeHead.yCoordinate - 1
    renderTiles()
    }
}

function moveL() {
    if (snakeHead.xCoordinate != 1) {
    moveSnake()
    snakeHead.xCoordinate = snakeHead.xCoordinate - 1
    renderTiles()
    }
}

spawnApple()
spawnSnake()

document.querySelector('body').addEventListener('keydown', event => {
    if (event.key === 'w'){
        moveU()
    }
    else if (event.key === 'd') {
        moveR()
    }
    else if (event.key === 's') {
        moveD()
    }
    else if (event.key === 'a') {
        moveL()
    }
})

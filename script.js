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

function moveR() { //add if statements to specify conditions of moving
    if (snakeHead.xCoordinate != 13 && document.getElementById(convertCoordinates(snakeHead.xCoordinate + 1, snakeHead.yCoordinate)).style.backgroundColor != 'blue') {
    moveSnake()
    snakeHead.xCoordinate = snakeHead.xCoordinate + 1
    renderTiles()
    }
}

function moveU() {
    if (snakeHead.yCoordinate != 13 && document.getElementById(convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate + 1)).style.backgroundColor != 'blue') {
    moveSnake()
    snakeHead.yCoordinate = snakeHead.yCoordinate + 1
    renderTiles()
    }
}
 
function moveD() {
    if (snakeHead.yCoordinate != 1 && document.getElementById(convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate - 1)).style.backgroundColor != 'blue') {
    moveSnake()
    snakeHead.yCoordinate = snakeHead.yCoordinate - 1
    renderTiles()
    }
}

function moveL() {
    if (snakeHead.yCoordinate != 1 && document.getElementById(convertCoordinates(snakeHead.xCoordinate - 1, snakeHead.yCoordinate)).style.backgroundColor != 'blue') {
    moveSnake()
    snakeHead.xCoordinate = snakeHead.xCoordinate - 1
    renderTiles()
    }
}

spawnApple()
spawnSnake()
 
let intervalR
let intervalU
let intervalL
let intervalD



const contMoveR = () => {
    intervalR = setInterval(moveR, 400)
}

const contMoveU = () => {
    intervalU = setInterval(moveU, 400)
}

const contMoveL = () => {
    intervalL = setInterval(moveL, 400)
}

const contMoveD = () => {
    intervalR = setInterval(moveD, 400)
}



document.querySelector('body').addEventListener('keydown', event => {
    if (event.key === 'w'){
        clearInterval(intervalR)
        clearInterval(intervalL)
        clearInterval(intervalD)
        contMoveU()
    }
    else if (event.key === 'd') {
        clearInterval(intervalU)
        clearInterval(intervalL)
        clearInterval(intervalD)
        contMoveR()
    }
    else if (event.key === 's') {
        clearInterval(intervalR)
        clearInterval(intervalL)
        clearInterval(intervalU)
        contMoveD()
    }
    else if (event.key === 'a') {
        clearInterval(intervalR)
        clearInterval(intervalU)
        clearInterval(intervalD)
        contMoveL()
    }
})

contMoveR()

// if (snakeHead.xCoordinate === 13 || document.getElementById(convertCoordinates(snakeHead.xCoordinate + 1, snakeHead.yCoordinate)).style.backgroundColor === 'blue') {
//    clearInterval(interval)
//    console.log('hey')
// }
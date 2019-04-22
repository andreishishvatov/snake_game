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
    moveSnake()
    snakeHead.xCoordinate = snakeHead.xCoordinate + 1
    renderTiles()
}

function moveU() {
    moveSnake()
    snakeHead.yCoordinate = snakeHead.yCoordinate + 1
    renderTiles()
}
 
function moveD() {
    moveSnake()
    snakeHead.yCoordinate = snakeHead.yCoordinate - 1
    renderTiles()
}

function moveL() {
    moveSnake()
    snakeHead.xCoordinate = snakeHead.xCoordinate - 1
    renderTiles()
}

spawnApple()
spawnSnake()
 




const contMoveR = () => {
    let j = snakeHead.yCoordinate
    if (j1 != ) {
    setInterval(moveR, 1000)
    }
}

const contMoveU = () => {
    let i2 = 400
    let j2 = snakeHead.yCoordinate
    while(j2 != 13 && document.getElementById(convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate + 1)).style.backgroundColor != 'blue') {
    setTimeout(moveU, i2)
    i2 = i2 + 400 + 1
    j2++
    }
}

const contMoveL = () => {
    let i3 = 400
    let j3 = snakeHead.xCoordinate
    while(j3 != 1 && document.getElementById(convertCoordinates(snakeHead.xCoordinate - 1, snakeHead.yCoordinate)).style.backgroundColor != 'blue') {
    setTimeout(moveL, i3)
    i3 = i3 + 400 + 1
    j3++
    }
}

const contMoveD = () => {
    let i4 = 400
    let j4 = snakeHead.yCoordinate
    while(j4 != 1 && document.getElementById(convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate - 1)).style.backgroundColor != 'blue') {
    setTimeout(moveD, i4)
    i4 = i4 + 400 + 1
    j4++
    }
}



document.querySelector('body').addEventListener('keydown', event => {
    if (event.key === 'w'){
        contMoveU()
    }
    else if (event.key === 'd') {
        contMoveR()
    }
    else if (event.key === 's') {
        contMoveD()
    }
    else if (event.key === 'a') {
        contMoveL()
    }
})



contMoveR()
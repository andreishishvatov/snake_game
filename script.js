let apple = {} 
let gg = []
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

let spd = 150// setting speed

snakeHead.strlocation = convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate)

let osnkP = [{xCoordinate: 4, yCoordinate: 7}, {xCoordinate: 5, yCoordinate: 7}, {xCoordinate: 6, yCoordinate: 7}]

let lastTileX = osnkP[0].xCoordinate
let lastTileY = osnkP[0].yCoordinate

/*snakeHead.len++
osnkP.unshift({xCoordinate: lastTileX, yCoordinate: lastTileY}) // Code to implement (I suspect it is operationa;) */

snakeHead.strlocation = convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate)

const spawnApple = () => {
    let check = []
    let x = Math.floor(Math.random() * 13 + 1) 
    let y = Math.floor(Math.random() * 13 + 1)
    let id = `${x}; ${y}` 
    if (document.getElementById(id).style.backgroundColor === 'blue') {
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
    apple.id = id
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
        document.getElementById(id).style.backgroundColor = "purple"
        osnkP[i].xCoordinate = osnkP[i + 1].xCoordinate
        osnkP[i].yCoordinate = osnkP[i + 1].yCoordinate
        osnkP[i].strlocation = convertCoordinates(osnkP[i].xCoordinate, osnkP[i].yCoordinate)
    }
    osnkP[i].xCoordinate = snakeHead.xCoordinate
    osnkP[i].yCoordinate = snakeHead.yCoordinate
}

function moveR() { //add if statements to specify conditions of moving
    if (snakeHead.xCoordinate != 13 && document.getElementById(convertCoordinates(snakeHead.xCoordinate + 1, snakeHead.yCoordinate)).style.backgroundColor != 'blue' && gg[0] === undefined) {
    moveSnake()
    snakeHead.xCoordinate = snakeHead.xCoordinate + 1
    renderTiles()
    spd = spd - 0.2
    if (document.getElementById(apple.id).style.backgroundColor === 'blue') {
        snakeHead.len++
        osnkP.unshift({xCoordinate: lastTileX, yCoordinate: lastTileY})
        spawnApple()
        document.getElementById('count').innerHTML++
    }
    } else {
        gg[0] = true
        document.querySelector('.gameover').style.display = 'block'
    }
}

function moveU() {
    if (snakeHead.yCoordinate != 13 && document.getElementById(convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate + 1)).style.backgroundColor != 'blue' && gg[0] === undefined) {
    moveSnake()
    snakeHead.yCoordinate = snakeHead.yCoordinate + 1
    renderTiles()
    spd = spd - 0.2
    if (document.getElementById(apple.id).style.backgroundColor === 'blue') {
        snakeHead.len++
        osnkP.unshift({xCoordinate: lastTileX, yCoordinate: lastTileY})
        spawnApple()
        document.getElementById('count').innerHTML++
    }
    } else {
        gg[0] = true
        document.querySelector('.gameover').style.display = 'block'
    }
}
 
function moveD() {
    if (snakeHead.yCoordinate != 1 && document.getElementById(convertCoordinates(snakeHead.xCoordinate, snakeHead.yCoordinate - 1)).style.backgroundColor != 'blue' && gg[0] === undefined) {
    moveSnake()
    snakeHead.yCoordinate = snakeHead.yCoordinate - 1
    renderTiles()
    spd = spd - 0.2
    if (document.getElementById(apple.id).style.backgroundColor === 'blue') {
        snakeHead.len++
        osnkP.unshift({xCoordinate: lastTileX, yCoordinate: lastTileY})
        spawnApple()
        document.getElementById('count').innerHTML++
    }
    } else {
        gg[0] = true
        document.querySelector('.gameover').style.display = 'block'
    }
}

function moveL() {
    if (snakeHead.xCoordinate != 1 && document.getElementById(convertCoordinates(snakeHead.xCoordinate - 1, snakeHead.yCoordinate)).style.backgroundColor != 'blue' && gg[0] === undefined) {
    moveSnake()
    snakeHead.xCoordinate = snakeHead.xCoordinate - 1
    renderTiles()
    spd = spd - 0.2
    if (document.getElementById(apple.id).style.backgroundColor === 'blue') {
        snakeHead.len++
        osnkP.unshift({xCoordinate: lastTileX, yCoordinate: lastTileY})
        spawnApple()
        document.getElementById('count').innerHTML++
    }
    } else {
        gg[0] = true
        document.querySelector('.gameover').style.display = 'block'
    }
}

spawnApple()
spawnSnake()
 
let intervalR
let intervalU
let intervalL
let intervalD

const clrevthbR = () => {
    clearInterval(intervalU)
    clearInterval(intervalL)
    clearInterval(intervalD)
}

const clrevthbL = () => {
    clearInterval(intervalU)
    clearInterval(intervalR)
    clearInterval(intervalD)
}

const clrevthbD = () => {
    clearInterval(intervalU)
    clearInterval(intervalL)
    clearInterval(intervalR)
}

const clrevthbU = () => {
    clearInterval(intervalD)
    clearInterval(intervalL)
    clearInterval(intervalR)
}

let currentInterval

const contMoveR = () => {
    currentInterval = intervalR
    intervalR = setInterval(moveR, spd) // speed increments by 1 (spd++)
}

const contMoveU = () => {
    currentInterval = intervalU
    intervalU = setInterval(moveU, spd)
}

const contMoveL = () => {
    currentInterval = intervalL
    intervalL = setInterval(moveL, spd)
}

const contMoveD = () => {
    currentInterval = intervalD
    intervalD = setInterval(moveD, spd)
}

let cooldown = 0


document.querySelector('body').addEventListener('keydown', event => {
    
    if (event.key === 'w'){
        /*if (typeof currentInterval != 'undefined') {
        clearInterval(currentInterval)
        }*/
        clrevthbU()
        contMoveU()
        /*clearInterval(intervalR)
        clearInterval(intervalL)
        clearInterval(intervalD) */
        //contMoveU()
    }
    else if (event.key === 'd') {
        /*if (typeof currentInterval != 'undefined') {
        clearInterval(currentInterval)
        }*/
        clrevthbR()
        contMoveR()
        console.log(event.toString())
        /*clearInterval(intervalU)
        clearInterval(intervalL)
        clearInterval(intervalD)*/
        //contMoveR()
    }
    else if (event.key === 's') {
        /*if (typeof currentInterval != 'undefined') {
        clearInterval(currentInterval)
        }*/
        clrevthbD()
        contMoveD()
        /*clearInterval(intervalR)
        clearInterval(intervalL)
        clearInterval(intervalU)*/
        //contMoveD()
    }
    else if (event.key === 'a') {
        /*if (typeof currentInterval != 'undefined') {
        clearInterval(currentInterval)
        }*/
        clrevthbL()
        contMoveL()
        /*clearInterval(intervalR)
        clearInterval(intervalU)
        clearInterval(intervalD)*/
        //contMoveL()
    
}
})




// if (snakeHead.xCoordinate === 13 || document.getElementById(convertCoordinates(snakeHead.xCoordinate + 1, snakeHead.yCoordinate)).style.backgroundColor === 'blue') {
//    clearInterval(interval)
//    console.log('hey')
// }

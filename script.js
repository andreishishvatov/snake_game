let apple = {}

let snake = {
    strlocation: '7; 7',
    xCoordinate: 7,
    yCoordinate: 7,
    direction: 'R',
    length: 4,
}

const convertCoordinates = (xC, yC) => {
    return `${yC}; ${xC}`
}

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
    document.getElementById(snake.strlocation).style.backgroundColor = 'green'
    snake.xCoordinate = snake.xCoordinate + 1
    snake.strlocation = convertCoordinates(snake.xCoordinate, snake.yCoordinate)
    document.getElementById(snake.strlocation).style.backgroundColor = "blue"
}

spawnApple()
spawnSnake()

setTimeout(moveSnakeR, 1000)
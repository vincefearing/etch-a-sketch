let color = "white";
let red = 255;
let green = 255;
let blue = 255;
let click = false;

function createBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'black';
        board.insertAdjacentElement('beforeend', square);
    }
}

createBoard(16);

function setSize(input) {
    if (input >= 2 && input <= 100) {
        createBoard(input);
    } else {
        console.log("Too many squares");
    }
}

function colorSquare() {
    if (click) {
        this.style.backgroundColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
    }
}

function changeColor(choice) {
    if (choice === 'white') {
        red = 255;
        blue = 255;
        green = 255;
    } else if (choice === 'black') {
        red = 0;
        blue = 0;
        green = 0;
    } else if (choice === 'random') {
        randomColorGen();
    }
}

function randomNum() {
    return num = Math.floor(Math.random()* 255);
}

function randomColorGen() {
    red = randomNum();
    green = randomNum();
    blue = randomNum();
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor = 'black');
}

document.querySelector('.board').addEventListener('click', () => {
    click = !click;
    let draw = document.querySelector('#draw');
    draw.remove();
    let container = document.querySelector('.indicator');
    draw = document.createElement('p');
    draw.setAttribute('id', 'draw');
    if (click === true) {
        draw.textContent = "Click Off";
        container.appendChild(draw);
    } else if (click === false) {
        draw.textContent = "Click On";
        container.appendChild(draw);
    }
});
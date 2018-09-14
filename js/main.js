class BoardSquare {
    constructor(element, color) {
        this.element = element;

        // 1
        this.element.addEventListener("click", this, false);
        this.isFaceUp = false;
        this.isMatched = false;
        this.setColor(color);
    }
    // 1
    setColor(color) {
        // 2
        const faceUpElement = this.element.getElementsByClassName('faceup')[0];

        // 3
        this.color = color;
        // 4
        faceUpElement.classList.add(color);
    }

    // 1
    handleEvent(event) {
        // 2
        switch (event.type) {
            case "click":
                // 3
                console.log(this.color + ' square was clicked');
        }
    }
}

function generateHTMLForBoardSquares() {
    const numberOfSquares = 16;
    let squaresHTML = '';

    // generate HTML for board squares
    for (let i = 0; i < numberOfSquares; i++) {
        squaresHTML +=
            '<div class="col-3 board-square">\n' +
            '<div class="face-container">\n' +
            '<div class="facedown"></div>\n' +
            '<div class="faceup"></div>\n' +
            '</div>\n' +
            '</div>\n';
    }

    // insert squares HTML in DOM
    const boardElement = document.getElementById('gameboard');
    boardElement.innerHTML = squaresHTML;
}

// COLORS

const colorPairs = [];

function generateColorPairs() {
    if (colorPairs.length > 0) {
        return colorPairs;
    } else {
        // generates matching pair for each color
        for (let i = 0; i < 8; i++) {
            colorPairs.push('color-' + i);
            colorPairs.push('color-' + i);
        }

        return colorPairs;
    }
}

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shuffleColors() {
    const colorPairs = generateColorPairs()
    return shuffle(colorPairs);
}

const boardSquares = [];

function setupGame() {
    generateHTMLForBoardSquares();

    const randomColorPairs = shuffleColors();
    // 1 We use document.getElementsByClassName to retrieve an array of all the .board-square elements in our DOM. We'll need these in order to create each BoardSquare object.
    const squareElements = document.getElementsByClassName("board-square");

    // 2 Using a for-loop, we loop through each .board-square element in our #gameboard to create it's respective BoardSquare object.
    for (let i = 0; i < squareElements.length; i++) {
        const element = squareElements[i];
        const color = randomColorPairs[i];
        // 3 Create a new BoardSquare object using the DOM elements and shuffled colors at the specified position i.
        const square = new BoardSquare(element, color)

        // 4 Add the new BoardSquare object that was created into the boardSquares array.
        boardSquares.push(square);
    }
}

setupGame(); // DO NOT ERASE THIS OR GAME WILL NOT RUN

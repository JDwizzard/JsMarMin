const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
colors = ['plum', 'violet', 'orchid', 'blueviolet', 'darkviolet'
, 'darkorchid', 'darkMagneta', 'purple', 'indigo']

for (let index = 0; index < SQUARES_NUMBER; index++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    const ind = Math.floor(Math.random() * colors.length)
    return colors[ind]
}
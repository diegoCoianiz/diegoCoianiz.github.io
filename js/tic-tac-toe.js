let clientScore = 0
let machineScore = 0
let startingGameNumber = 0
let clientsMove = false
let firstMove

document.addEventListener("DOMContentLoaded", () => {
    console.clear()

    let populatedSquares = []
    let populatedMachineSquares = []
    let populatedClientSquares = []
    const grid = document.querySelector(".grid")
    const clientScoreDisplay = document.getElementById("yourScore")
    const machineScoreDisplay = document.getElementById("machineScore")
    const createBoardIcon = document.getElementById("createBoardIcon")
    createBoardIcon.setAttribute("onclick", `createBoard()`)
    createBoardIcon.onclick = function () { createBoard() }

    const createBoard = () => {

        whoMovesFirst()

        startingGameNumber++
        squares = []
        firstMove = true
        populatedSquares = []
        populatedMachineSquares = []
        populatedClientSquares = []

        while (grid.getElementsByTagName("div").length > 0) {
            grid.removeChild(grid.getElementsByTagName("div")[0])
        }

        for (let row = 0; row < 3; row++) {
            squares.push([])
            for (let column = 0; column < 3; column++) {
                const square = document.createElement("div")
                square.setAttribute("onclick", `clientNextMove(${row}, ${column})`)
                square.onclick = function () { clientNextMove(row, column) }
                square.classList.add("empty-square")
                squares[row].push(square)
                grid.appendChild(square)
            }
        }

        if (machineOpen() && firstMove) {
            squares[1][1].classList.remove("empty-square")
            squares[1][1].classList.add("machine-square")
            populatedSquares.push(5)
            populatedMachineSquares.push(5)
            clientsMove = true
            firstMove = false
        }
    }

    const clientNextMove = (row, col) => {

        if ((populatedSquares.length < 9) && (clientsMove || (!machineOpen && firstMove)) &&
            (squares[row][col].classList.contains("empty-square"))) {

            squares[row][col].classList.remove("empty-square")
            squares[row][col].classList.add("client-square")
            populatedSquares.push((row * 3) + (col + 1))
            populatedClientSquares.push((row * 3) + (col + 1))

            if (firstMove) firstMove = false

            checkVictory(populatedClientSquares.sort())
            machineNextMove()
            clientsMove = false
        }
    }

    const machineNextMove = () => {
        if (populatedSquares.length < 9) {
            counter = 0
            do {
                machineMovement = Math.floor(Math.random(10) * 10)
                if (machineMovement === 0) machineMovement++
                counter++
                if (counter === 10) {
                    for (let i = 1; i < 10; i++) {
                        if (populatedSquares.indexOf(i) === -1) {
                            machineMovement = i
                            break
                        }
                    }
                }

            } while (populatedSquares.indexOf(machineMovement) !== -1 && populatedSquares.length < 9);
            populatedSquares.push(machineMovement)
            populatedMachineSquares.push(machineMovement)

            setTimeout(() => {
                if (machineMovement % 3 === 0) {
                    squares[Math.floor(machineMovement / 3 - 1)][2].classList.remove("empty-square")
                    squares[Math.floor(machineMovement / 3 - 1)][2].classList.add("machine-square")
                } else {
                    squares[Math.floor(machineMovement / 3)][Math.floor(machineMovement % 3) - 1].classList.remove("empty-square")
                    squares[Math.floor(machineMovement / 3)][Math.floor(machineMovement % 3) - 1].classList.add("machine-square")
                }

                checkVictory(populatedMachineSquares.sort())
                clientsMove = !clientsMove
            }, 500)
        }

    }

    const checkVictory = (userSquare) => {

        if ((userSquare.length > 2) && ((userSquare.includes(3) && userSquare.includes(5) && userSquare.includes(7)) //diagonal
            || ((userSquare.includes(1) && userSquare.includes(2) && userSquare.includes(3)) || //rows
                (userSquare.includes(4) && userSquare.includes(5) && userSquare.includes(6)) ||
                (userSquare.includes(7) && userSquare.includes(8) && userSquare.includes(9)))
            || ((userSquare.includes(1) && userSquare.includes(4) && userSquare.includes(7)) || //columns
                (userSquare.includes(2) && userSquare.includes(5) && userSquare.includes(8)) ||
                (userSquare.includes(3) && userSquare.includes(6) && userSquare.includes(9)))
            || (userSquare.includes(1) && userSquare.includes(5) && userSquare.includes(9)))) { // diagonal

            while (populatedSquares.length < 10) populatedSquares.push("end")

            if(!clientsMove) machineScoreDisplay.innerHTML = ++machineScore
            else clientScoreDisplay.innerHTML = ++clientScore
        }
    }
    createBoard()
})

const machineOpen = () => {
    if (startingGameNumber % 2 === 0) {
        return false
    } else return true
}

const whoMovesFirst =() => {
    if (startingGameNumber % 2 === 0) {
        clientsMove = false
    } else clientsMove = true
}
clientScore = 0
machineScore = 0
startingGameNumber = 0

document.addEventListener("DOMContentLoaded", () => {

    clientsMove = true
    let emptySquares = []
    const grid = document.querySelector(".grid")
    const clientScoreDisplay = document.getElementById("yourScore")
    const machineScoreDisplay = document.getElementById("machineScore")
    const createBoardIcon = document.getElementById("createBoardIcon")
    createBoardIcon.setAttribute("onclick", `createBoard()`)
    createBoardIcon.onclick = function () { createBoard() }

    const createBoard = () => {

        startingGameNumber++
        console.log(machineOpen())

        squares = []
        firstMove = true
        clientsMove = !clientsMove
        emptySquares = []

        consola("INICIO")

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
            emptySquares.push(5)
            console.log("*** primera jugada de la maquina ****")
            clientsMove = true
            firstMove = false
        }

        console.log(emptySquares)
    }

    const clientNextMove = (row, col) => {
        if (clientsMove || (!machineOpen && firstMove)) {
            if (squares[row][col].classList.contains("empty-square")) {

                consola("CLIENTE SELECCIONA CASILLERO")

                squares[row][col].classList.remove("empty-square")
                squares[row][col].classList.add("client-square")

                clientsMove = false
                clientScore++
                clientScoreDisplay.innerHTML = clientScore
                emptySquares.push((row * 3) + (col + 1))

                if (firstMove) {
                    firstMove = false
                }

                consola("FIN CLIENTE SELECCIONA CASILLERO")
                machineNextMove()
            } else {
                consola("NO ENTRA SELECCION DE CASILLERO (casillero ya usado)")
                machineScore++
                machineScoreDisplay.innerHTML = machineScore
            }
        } else {
            consola("NO ENTRA 1° IF SELECCION DE CASILLERO. NO es el turno")
        }

        console.log(emptySquares)
    }

    const machineNextMove = () => {
        do {
            tryToMove = Math.floor(Math.random(10) * 10)
            if (tryToMove === 0) tryToMove++
            // console.log("la maquina intenta mover a ", tryToMove)
            // console.log(emptySquares.indexOf(tryToMove))
            // console.log(emptySquares.indexOf(tryToMove) < 0)
        } while (emptySquares.indexOf(tryToMove) !== -1);
        console.log("la maquina se movera a ", tryToMove)
        emptySquares.push(tryToMove)
        
        setTimeout( () => {
            if(tryToMove%3 === 0){
                console.log(tryToMove/3 - 1, 2)
                squares[Math.floor(tryToMove/3 - 1)][2].classList.remove("empty-square")
                squares[Math.floor(tryToMove/3 - 1)][2].classList.add("machine-square")
            } else {
                console.log(tryToMove/3, tryToMove%3 - 1)
                squares[Math.floor(tryToMove/3)][Math.floor(tryToMove%3)-1].classList.remove("empty-square")
                squares[Math.floor(tryToMove/3)][Math.floor(tryToMove%3)-1].classList.add("machine-square")
            }
            clientsMove = !clientsMove
        },500)

        console.log(emptySquares)

    }

    createBoard()

    consola("FIN DEL EVENTO")

})

const machineOpen = () => {
    if (startingGameNumber % 2 === 0) {
        return false
    } else return true
}

const consola = (posicion) => {
    console.log(posicion)
    console.log(`primer movimiento: ${firstMove}; cliente mueve: ${clientsMove} o arranca proxima partida :${machineOpen()},
    (turno de maquina?  ${!clientsMove || (machineOpen() && firstMove)}\n`)
}
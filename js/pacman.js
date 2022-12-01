document.addEventListener("DOMContentLoaded", () => {

    const grid = document.querySelector(".grid")
    const scoreDisplay = document.getElementById("score")
    const ghostEatenDisplay = document.getElementById("ghostEaten")
    const checkGameDisplay = document.getElementById("checkGame")
    const width = 28
    let score = 0
    coins = 0
    ghostEaten = 0

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        0, 0, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 2, 1, 1, 2, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    const squares = []
    // 0 - road
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    createBoard = () => {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement("div")
            grid.appendChild(square)
            squares.push(square)

            if (layout[i] === 0) {
                squares[i].classList.add("road")
                coins++
            } else if (layout[i] === 1) {
                squares[i].classList.add("wall")
            } else if (layout[i] === 2) {
                squares[i].classList.add("ghost-lair")
            } else if (layout[i] === 3) {
                squares[i].classList.add("power-pellet")
            }
        }
    }
    createBoard()

    pacmanCurrentIndex = 12
    squares[pacmanCurrentIndex].classList.add("pac-man")

    movePacman = (e) => {
        squares[pacmanCurrentIndex].classList.remove("pac-man")
        switch (e.keyCode) {
            case 37: // LEFT
                if (pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")) {
                    --pacmanCurrentIndex
                } else if (pacmanCurrentIndex === 364) {
                    pacmanCurrentIndex = 391
                } else if (pacmanCurrentIndex === 448) {
                    pacmanCurrentIndex = 279
                }

                break;
            case 38: //UP
                if (pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")) {
                    pacmanCurrentIndex -= width
                } else if (pacmanCurrentIndex === 12) {
                    pacmanCurrentIndex = 771
                }
                break;
            case 39: // RIGHT
                if (pacmanCurrentIndex % width < width - 1 &&
                    !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")) {
                    ++pacmanCurrentIndex
                } else if (pacmanCurrentIndex === 391) {
                    pacmanCurrentIndex = 364
                } else if (pacmanCurrentIndex === 279) {
                    pacmanCurrentIndex = 448
                }
                break;
            case 40: //DOWN
                if (pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
                    !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")) {
                    pacmanCurrentIndex += width
                } else if (pacmanCurrentIndex === 771) {
                    pacmanCurrentIndex = 12
                }
                break;
        }
        squares[pacmanCurrentIndex].classList.add("pac-man")

        pacDotEatean()
        theGhosts.forEach(ghost => ghostEaten(ghost))
        checkGame()
    }

    document.addEventListener("keyup", movePacman)

    pacDotEatean = () => {
        if (squares[pacmanCurrentIndex].classList.contains("road")) {
            score++
            coins--
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove("road")
            squares[pacmanCurrentIndex].classList.add("road-empty")
        } else if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
            score += 10
            theGhosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScaredGhosts, 100000)
            squares[pacmanCurrentIndex].classList.remove("power-pellet")
            squares[pacmanCurrentIndex].classList.add("road-empty")
        }
    }

    checkGame = () => {
        if (squares[pacmanCurrentIndex].classList.contains("ghost") &&
            !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
            theGhosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", movePacman)
            checkGameDisplay.innerHTML = " Game Over!!"
        } else if (coins === 0) {
            theGhosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", movePacman)
            checkGameDisplay.innerHTML = `YOU WON WITH A SCORE OF ${score} POINTS!! AMAZING!!`
        }
    }

    unScaredGhosts = () => {
        theGhosts.forEach(ghost => ghost.isScared = false)
    }

    ghostEaten = (ghost) => {
        if (ghost.isScared && squares[ghost.currentIndex].classList.contains("pac-man")) {
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
            ghost.currentIndex = ghost.lair
            score += 100
            ghostEaten++
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
            ghostEatenDisplay.innerHTML = ghostEaten
        }
    }

    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.timerId = NaN
            this.isScared = false
            this.lair = 348
        }
    }

    theGhosts = [
        new Ghost("blinky", 146, 250),
        new Ghost("pinky", 161, 400),
        new Ghost("inky", 665, 300),
        new Ghost("clyde", 650, 500),
        new Ghost("shadow", 398, 250),
        new Ghost("speedy", 357, 400),
        new Ghost("Bashful", 497, 300),
        new Ghost("Pokey", 482, 500),
    ]

    moveGhost = (ghost) => {
        const directions = [-1, +1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(() => {
            try {
                if (!squares[ghost.currentIndex + direction].classList.contains("wall") &&
                    !squares[ghost.currentIndex + direction].classList.contains("ghost")) {
                    squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                    ghost.currentIndex += direction
                    squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                } else if (ghost.currentIndex === 364) {
                    squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                    ghost.currentIndex = 391
                    squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                } else if (ghost.currentIndex === 448) {
                    squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                    ghost.currentIndex = 279
                    squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                } else if (ghost.currentIndex === 12) {
                    squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                    ghost.currentIndex = 771
                    squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                } else if (ghost.currentIndex === 391) {
                    squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                    ghost.currentIndex = 364
                    squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                } else if (ghost.currentIndex === 279) {
                    squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                    ghost.currentIndex = 448
                    squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                } else if (ghost.currentIndex === 771) {
                    squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                    ghost.currentIndex = 12
                    squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                } else direction = directions[Math.floor(Math.random() * directions.length)]
            } catch (e) {
                console.error(`error: ${e} \non Index ${ghost.currentIndex}`)
                squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
                ghost.currentIndex = ghost.lair
                squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
                console.log("returning to the Lair.")
            }

            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add("scared-ghost")
            }

            ghostEaten(ghost)
            checkGame()
        }, ghost.speed)
    }

    theGhosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add("ghost")
    });

    theGhosts.forEach(ghost => moveGhost(ghost))
})
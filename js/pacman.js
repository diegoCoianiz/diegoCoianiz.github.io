resultOfTheGame = [
    `
    <div class="title">
        <h3 class="mail-title" style="color:aliceblue; padding-left: 10px;"> You have been defeated, try again!!
        </h3>
        <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 416C291.3 416 320 387.3 320 352C320 316.7 291.3 288 256 288C220.7 288 192 316.7 192 352C192 387.3 220.7 416 256 416zM100.7 155.3L137.4 192L100.7 228.7C94.44 234.9 94.44 245.1 100.7 251.3C106.9 257.6 117.1 257.6 123.3 251.3L160 214.6L196.7 251.3C202.9 257.6 213.1 257.6 219.3 251.3C225.6 245.1 225.6 234.9 219.3 228.7L182.6 192L219.3 155.3C225.6 149.1 225.6 138.9 219.3 132.7C213.1 126.4 202.9 126.4 196.7 132.7L160 169.4L123.3 132.7C117.1 126.4 106.9 126.4 100.7 132.7C94.44 138.9 94.44 149.1 100.7 155.3zM292.7 155.3L329.4 192L292.7 228.7C286.4 234.9 286.4 245.1 292.7 251.3C298.9 257.6 309.1 257.6 315.3 251.3L352 214.6L388.7 251.3C394.9 257.6 405.1 257.6 411.3 251.3C417.6 245.1 417.6 234.9 411.3 228.7L374.6 192L411.3 155.3C417.6 149.1 417.6 138.9 411.3 132.7C405.1 126.4 394.9 126.4 388.7 132.7L352 169.4L315.3 132.7C309.1 126.4 298.9 126.4 292.7 132.7C286.4 138.9 286.4 149.1 292.7 155.3z"
                fill="rgb(128, 0, 0)"></path>
        </svg>
    </div>
    ` , 
    `
    <div class="title">
        <h3 class="mail-title" style="color:aliceblue; padding-left: 10px;"> You won, Awsomee!!!!
        </h3>
        <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM226.5 215.6C229.8 214.5 232 211.4 232 208C232 190.1 225.3 172.4 215.4 159.2C205.6 146.2 191.5 136 176 136C160.5 136 146.4 146.2 136.6 159.2C126.7 172.4 120 190.1 120 208C120 211.4 122.2 214.5 125.5 215.6C128.7 216.7 132.3 215.6 134.4 212.8L134.4 212.8L134.6 212.5C134.8 212.3 134.1 212 135.3 211.6C135.1 210.8 136.9 209.7 138.1 208.3C140.6 205.4 144.1 201.7 148.3 197.1C157.1 190.2 167.2 184 176 184C184.8 184 194.9 190.2 203.7 197.1C207.9 201.7 211.4 205.4 213.9 208.3C215.1 209.7 216 210.8 216.7 211.6C217 212 217.2 212.3 217.4 212.5L217.6 212.8L217.6 212.8C219.7 215.6 223.3 216.7 226.5 215.6V215.6zM377.6 212.8C379.7 215.6 383.3 216.7 386.5 215.6C389.8 214.5 392 211.4 392 208C392 190.1 385.3 172.4 375.4 159.2C365.6 146.2 351.5 136 336 136C320.5 136 306.4 146.2 296.6 159.2C286.7 172.4 280 190.1 280 208C280 211.4 282.2 214.5 285.5 215.6C288.7 216.7 292.3 215.6 294.4 212.8L294.4 212.8L294.6 212.5C294.8 212.3 294.1 212 295.3 211.6C295.1 210.8 296.9 209.7 298.1 208.3C300.6 205.4 304.1 201.7 308.3 197.1C317.1 190.2 327.2 184 336 184C344.8 184 354.9 190.2 363.7 197.1C367.9 201.7 371.4 205.4 373.9 208.3C375.1 209.7 376 210.8 376.7 211.6C377 212 377.2 212.3 377.4 212.5L377.6 212.8L377.6 212.8z" fill="rgb(255, 115, 0)"></path>
        </svg>
    </div>
    `
]

document.addEventListener("DOMContentLoaded", () => {

    firstMove = true
    const grid = document.querySelector(".grid")
    const scoreDisplay = document.getElementById("score")
    const ghostEatenDisplay = document.getElementById("ghostEaten")
    const checkGameDisplay = document.getElementById("checkGame")
    const width = 28
    let score = 0
    coins = 0
    ghostsEaten = 0

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

        if(firstMove === true) {
            firstMove = false
            theGhosts.forEach(ghost => moveGhost(ghost))
        }

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
            setTimeout(unScaredGhosts, 7000)
            squares[pacmanCurrentIndex].classList.remove("power-pellet")
            squares[pacmanCurrentIndex].classList.add("road-empty")
        }
    }

    checkGame = () => {
        if (squares[pacmanCurrentIndex].classList.contains("ghost") &&
            !squares[pacmanCurrentIndex].classList.contains("scared-ghost")) {
            theGhosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", movePacman)
            checkGameDisplay.innerHTML = resultOfTheGame[0]
        } else if (coins === 0) {
            theGhosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener("keyup", movePacman)
            checkGameDisplay.innerHTML = resultOfTheGame[1]
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
            ghostsEaten++
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
            ghostEatenDisplay.innerHTML = ghostsEaten
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
        new Ghost("bashful", 497, 300),
        new Ghost("pokey", 482, 500),
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
     
})

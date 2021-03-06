import Game from './game.js'


let canvas = document.getElementById("gameScreen");
let gameStart = 0;
let ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;



const GAME_WIDTH = 1000;
const GAME_HEIGHT = 600;
let lastTime = 0;

let game = new Game(GAME_WIDTH, GAME_HEIGHT)




function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = "#F0F0F0"
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}

    // game.start();
    requestAnimationFrame(gameLoop);

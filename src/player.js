import Animator from './animation.js'

export default class Player {

    constructor(game) {
        this.image = document.getElementById("adventurer");
        this.game = game;
        this.direction = 0;
        this.tile = this.game.tile
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.width = 30;
        this.height = 45;
        this.maxSpeed = 3;
        this.speed = 0;
        this.jumpVel = -.1;
        this.jumpAvailable = 2;
        this.position = {
            x: 25,
            y: 510 - this.height,
        }
        this.oldX = this.position.x;
        this.oldY = this.position.y;
        this.corners = {
            topLeft: [this.position.x, this.position.y],
            topRight: [this.position.x + this.width, this.position.y],
            botRight: [this.position.x + this.width, this.position.y + this.height],
            botLeft: [this.position.x, this.position.y + this.height]
        }

    }


 

    

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    draw(ctx) {
        // ctx.fillStyle = "#f00"
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    
    
    }

    jump() {
        if (this.jumpAvailable === 2) {
            this.jumpAvailable -= 1;
            // this.jumpVel /= 2;
            this.jumpVel += 6.5;
            this.updateCorners();

        }
        else if (this.jumpAvailable === 1) {
            this.jumpAvailable -= 1;
            this.jumpVel /= 4;
            this.jumpVel += 4.5;
            this.updateCorners();

        }
    }

    updateCorners() {
        this.corners.topLeft[0] = this.position.x
        this.corners.topRight[0] = this.position.x + this.width;
        this.corners.botRight[0] = this.position.x + this.width;
        this.corners.botLeft[0] = this.position.x
        this.corners.topLeft[1] = this.position.y;
        this.corners.topRight[1] = this.position.y;
        this.corners.botRight[1] = this.position.y + this.height;
        this.corners.botLeft[1] = this.position.y + this.height;

    }


    update(deltaTime) {
        //save old position
        this.oldX = this.position.x;
        //changes position
        this.position.x += this.speed;
        this.updateCorners();

        //handles jump velocity
        if (this.jumpVel != 0 || this.jumpAvailable < 2) {
            //save old position, then change position, set jumpVel
            this.oldY = this.position.y;
            this.position.y -= this.jumpVel;
            this.jumpVel -= .18;
            this.updateCorners();

        }
        //if player hits edges of screen
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x > 1000 - this.width) this.position.x = 1000 - this.width;
        if (this.position.y < 0) {
            this.position.y = 0;
            this.jumpVel = -1;
        }
        //handles double jump case for bottom screen
        if (this.position.y > 600 - this.height) {
            // this.position.y = 600 - this.height;
            // this.updateCorners();
            this.game.score = -1;
            this.game.levelCheck();
            this.jumpVel = -1;
            this.jumpAvailable = 2;
        };


    }
}
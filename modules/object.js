import {c, ctx} from "./canvas.js";
import {random} from "../tools/random.js";
var cHeight = c.height
var cWidth = c.width

class Object {

    constructor(x,y,vx,vy){

        this.Vx = vx
        this.Vy =vy

        this.dx = this.Vx
        this.dy = this.Vy

        this.x = x
        this.y = y

        this.width = 20
        this.height = 20

        this.friction = 0.95

        this.gravity = 5
        this.gravityAugmente = 1.05

        this.stop = false
        this.score = 0

        this.point = []
    }

    update(gameFrame){
        if (this.y +Math.round((this.dx - this.gravity)*100)/100 >= cHeight && gameFrame >= 10){
            this.stop = true
            this.y = cHeight
        }
        if (!this.stop){
            this.gravity = this.gravity * this.gravityAugmente
            this.dx = Math.round((this.dx * this.friction)*100)/100
            this.dy = Math.round((this.dy - this.gravity)*100)/100
            this.x += this.dx
            this.y -= this.dy
        }
    }

    draw(){
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
        ctx.fillRect(this.x,this.y-this.height,this.width,this.height)
    }
}

window.addEventListener("keydown", function(event) {
    switch(event.key){
        case "ArrowLeft":
            break
        case "ArrowRight":
            break
    }
});

window.addEventListener("keyup", function(event) {
    switch(event.key){
        case "ArrowLeft":
            break
        case "ArrowRight":
            break
    }
});

export {Object};

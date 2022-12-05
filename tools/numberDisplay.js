import {c, ctx} from "../modules/canvas.js";

//Environment.js
class DisplayNumber {
    constructor(x,y){
        this.x = x
        this.y = y
        this.spriteSheet = new Image()
        this.spriteSheet.src = "../assets/images/spriteSheet/spriteSheet.png"

        this.frameX = ""
        this.frameY = ""

        this.width = ""
        this.height = ""
    }
    draw(number){
        for (let i = 0; i < number.length;i++){
            switch (number[i]){
                case "1":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "2":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "3":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "4":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "5":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "6":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "7":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "8":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "9":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
                case "0":
                    c.getContext('2d').drawImage(
                        this.spriteSheet,
                        this.frameX,this.frameY,
                        this.width,this.height,
                        this.x,this.y,
                        this.width,this.height
                    );
                    break
            }
        }
    }
}
export {DisplayNumber};

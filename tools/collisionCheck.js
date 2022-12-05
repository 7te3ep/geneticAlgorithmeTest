import {c, ctx} from "../modules/canvas.js";

export function collisionCheck(
    object1_X,object1_Y,
    object1_width,object1_height,

    object2_X,object2_Y,
    object2_width,object2_height
    
    ){
        if (object1_X > object2_X + object2_width ||

            object1_X + object1_width < object2_X||

            object1_Y > object2_Y + object2_height ||

            object1_Y + object1_height < object2_Y
        ){
            return false
        }else {
            return true
        }
}

//===================================
// _____|IMPORT MODULE FILES| _____// 
//===================================

let canvas = document.getElementById('canvas')
var slider = document.getElementById("slider");
var populationSlider = document.getElementById("population");
var mutationSlider = document.getElementById("mutation");
import {c, ctx} from "./modules/canvas.js";
import {Object} from "./modules/object.js";
import {DisplayNumber} from "./tools/numberDisplay.js";
import { collisionCheck } from "./tools/collisionCheck.js";
import {random} from "./tools/random.js";
var cHeight = c.height
var cWidth = c.width

//=================================
// _____|DECLARE VARIABLES| _____// 
//=================================

let gameFrame = 1
let population = []
let populationSize = 50 
var generation = 0
let selection
let objective =1000
let mutationSize = 0.1
//==============================
// _____|HANDLE OBJECTS| _____// 
//==============================

function handleObjective(){
    ctx.fillStyle = "green"
    ctx.fillRect(objective,970,30,30)
}

function createPop(selection){
    population = []
    for (let i = 0;i <populationSize;i++){
        if (generation == 1){
            population.push( new Object(20,cHeight,random(0,190),random(0,110)))
        }else {
            var child1 = random(0,selection.length-1)
            var child2 = random(0,selection.length-1)
            var childVx = (selection[child1].Vx +selection[child2].Vx)/2
            var childVy = (selection[child1].Vy +selection[child2].Vy)/2
            population.push(new Object(20,cHeight,childVx,childVy))
            if (random(0,0+mutationSize) == 1){
                population[i].Vx = random(20,150)
                population[i].Vy = random(20,80)
            }
        }
    }
}

function calculateScoreOfEachObject(){
    handleObjective()
    population.forEach(function (item){
        item.score =Math.round((item.x - objective )*100)/100 
    })

    let  min = population[0]
    let max = population[0]
    population.forEach(function (item){
        if (item.score < 0){
            item.score = item.score *-1
        }
        if (item.score < min.score){
            min = item
        }
        if (item.score > max.score){
            max = item
        }
    })
    max -= min.score
    population.forEach(function (item){
        item.score -= min.score
    })
    population.sort((a, b) => (a.score > b.score ? 1 : -1));
    let selection = []
    for (let g = 0;g<population.length;g++){
        for (let i = 0;i < population.length-g;i++){
            selection.push(population[g])
        }
    }
    
    return selection
}

function handleObject(gameFrame){
    for (let i = 0; i <population.length; i++){
        population[i].update(gameFrame)
        population[i].draw()
    }
}

//=========================
// _____|GAME LOOP| _____// 
//=========================

play()

function play(){

    generation += 1
    let continuer = false
    gameFrame =0
    createPop(selection)
    let gameloop = setInterval(function(){
        continuer = false
        //CLEAR 
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    
        // HANDLE AND DRAW ALL
        handleObjective()
        handleObject(gameFrame)
        // UPDATE 
        gameFrame ++
    
        population.forEach(function (item){
            if (item.stop == false){
                continuer = true
            }
        })
        // END IF
        if (continuer == false){
            clearInterval(gameloop);
            selection = calculateScoreOfEachObject()
        }
    },32) 
}

document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        play()
    }
}

function reset(){
    generation = 0
    gameFrame = 0
}

slider.oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleObjective()
    handleObject(gameFrame)
    reset()
    objective = this.value;
}

populationSlider.oninput = function() {
    reset()
    populationSize = this.value;
}


mutationSlider.oninput = function() {
    reset()
    mutationSize = this.value;
}
//var populationSlider = document.getElementById("population");
//var mutationSlider = document.getElementById("mutation");
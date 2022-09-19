import{ Player } from "./player.js";
import {InputHandler} from './input.js';
// import { drawStatusText } from "./utils.js";


window.addEventListener("load", function(){
    const loading = this.document.getElementById("loading");
    loading.style.display = "none";
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;


    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }
        update() {
            this.player.update(this.input.key);
        }
        draw(context) {
            this.player.draw(context);
        }
    }


    const game = new Game(canvas.width, canvas.height);

   


    let lastTime = 0;
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
   
});


   
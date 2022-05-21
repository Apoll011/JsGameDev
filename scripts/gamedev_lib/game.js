class GameDev{
    canvas = document.getElementById("GameWindow");
    ctx = canvas.getContext('2d');
    constructor(update, start){

    }
    animate(update){
        requestAnimationFrame();
        update();
    }
}
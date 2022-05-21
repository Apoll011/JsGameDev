class GameDev{
    debug = true;
    canvas = document.getElementById("GameWindow");
    ctx = this.canvas.getContext('2d');
    constructor(update, start){
        this.startt(start);
        this.animate(update);
    }
    animate(update){
        requestAnimationFrame(animate);
        update();
    }
    startt(start)
    {
        if(debug)
        {
            console.log("Game Started");
        }
        start();
    }
}
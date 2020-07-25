class Roof{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400,320,800,40,options);
        this.width = 400;
        this.height = 40;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill(150);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 1,
            length: 200,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        
    }
    display(){
        var bodyA = this.rope.bodyA.position;
        var bodyB = this.rope.bodyB.position;
        strokeWeight(4);
        var Anchor2X = bodyB.x+this.offsetX;
        var Anchor2Y = bodyB.y+this.offsetY;

        line(bodyA.x,bodyA.y,Anchor2X,Anchor2Y);
    }
}
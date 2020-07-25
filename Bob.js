class Bob{
    constructor(x,y,radius){
        var c_options = {
            isStatic: false,
            restitution: 0.3,
            friction:1,
            density: 0.03
        }
        this.body = Bodies.circle(x,y,radius,c_options);
        this.radius = radius;
        //this.image = loadImage("sketches/paper.png");
        World.add(world,this.body)
    }
    display() {
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
};
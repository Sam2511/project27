class bob {
    constructor(x, y, r){

        var options = {isStatic: false, restitution: 1.3, friction: 0.5, density: 0.1}
        this.body = Matter.Bodies.circle(x, y, r ,options); 
        this.radius = r;
        

        World.add(world, this.body);
        }
        display(){
            ellipseMode(RADIUS);
            fill(255,255,0);
            ellipse(this.body.position.x, this.body.position.y, this.radius);
        }


}
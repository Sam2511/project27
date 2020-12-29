class rope{
    constructor(body1,body2,offSetX,offSetY){

        this.offSetX = offSetX;
        this.offSetY = offSetY;
        var options = {bodyA: body1 ,bodyB: body2 ,pointB:{x: this.offSetX, y:this.offSetY}};  
        this.rope = Constraint.create(options);
        World.add(world, this.rope);



    }
    display(){
        
        line(this.rope.bodyA.position.x ,this.rope.bodyA.position.y, this.rope.bodyB.position.x,this.rope.bodyB.position.y );
        
    }




    
}   
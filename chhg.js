class String{
    constructor(z,k){
        var pok ={bodyA: z , bodyB:k ,  length:200, stiffness:1 }
   this.string=Matter.Constraint.create(pok);
   World.add(world,this.string);
 
}



display(){
    push ()
    
    strokeWeight(5)
    line (this.string.bodyA.position.x,this.string.bodyA.position.y,this.string.bodyB.position.x,this.string.bodyB.position.y)
pop ()
}

}
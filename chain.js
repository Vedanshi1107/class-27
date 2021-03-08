class Chain{
   constructor(bodyA , bodyB){
       var options = {
           bodyA:bodyA,
           bodyB:bodyB,
           stiffness:0.04,
           length:10
       }
       this.chain = Constraint.create(options);
       World.add(world,this.chain);
   }

   display(){
       var pointC = this.chain.bodyA.position;
       var pointD = this.chain.bodyB.position;
       strokeWeight(4);
       line(pointC.x,pointC.y,pointD.x,pointD.y);
   }




























}
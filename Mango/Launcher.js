class launcher{
    constructor(body,archor){

    var option={bodyA:body,
        pointB:archor,
        stiffness:0.004,
        length:1
    }

    this.bodyA = body
    this.pointB = archor
    this.launcher = Constraint.create(option)
    World.add(world,this.launcher)

  }

  attach(body){
    this.launcher.bodyA = Body;
  }

  fly(){
    this.launcher.bodyA = null;
  }

  display(){

    if(this.launcher.bodyA){
      var pointA = this.bodyA.position;
      var pointB = this.pointB

      strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

  }

}
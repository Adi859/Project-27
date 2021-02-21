class Rope {


    constructor(bodyA,pointB) {

        

        var options = {
            
            isStatic : true , 
            bodyA : bodyA ,
            pointB : pointB, 
            stiffness : 0.04 ,
            length : 300
        }

        
        this.pointB = pointB ; 
        this.body = Constraint.create(options) ;
        World.add(world,this.body) ; 

    }

    display () {

        var point1 = this.body.bodyA.position
        var point2 =  this.body.pointB
        strokeWeight(2) ; 
        line(point1.x,point1.y,point2.x,point2.y) ; 
 
    }

}
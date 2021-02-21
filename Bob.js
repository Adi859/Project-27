class Bob  {

    constructor(x,y,radius) {

        var prop1 = {
         
            isStatic : false

        }

        this.radius = radius ;
        this.body = Bodies.circle(x,y,radius,prop1) ; 
        World.add(world,this.body) ; 
   

    }

    display () {

         ellipseMode(CENTER) ; 
         circle(this.body.position.x,this.body.position.y,this.radius)  ;

    }


}
class Roof {

    constructor(x,y,width,height) {

    var prop1 = {

        isStatic : true  
    }

    this.width = width ; 
    this.height = height ; 
    this.body = Bodies.rectangle(x,y,width,height,prop1) ;
    
    
    World.add(world,this.body) ;




    }

    display () {

       rectMode(CENTER) ; 

       rect(this.body.position.x, this.body.position.y, this.width, this.height) ; 
}

    }
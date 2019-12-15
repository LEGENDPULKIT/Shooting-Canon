class Tanker {
  constructor(x, y,width,height) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.rectangle(x,y,width,height);
     this.width=width;
     this.height=height;

     World.add(world,this.body);
    };

    display(){
      // Draw the tanker the way you like.
      var pos=this.body.position
      // You could also use an image if you want a specific look
        //Create the shooter from which the cannonballs will get dispersed
        rect(80, 455, this.width, this.height);
        
        //Create the semicircle above the two rectangles 
        
        arc(70, 485, 90, 100, 180,180);
        
        //Create the two rectangles below the semicircle
        rect(20, height-75, 100, 60);
        rect(20, height-55, 100, 20);

    };
}

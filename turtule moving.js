function demo() {
    hideTurtle();
    colour(0,0,255,1);
    for(s = 100; s > 0; s -= 10) {
       square(s);
       right(36);
    }
 }


 {
    var sideX = prompt("Side length:");
    
    pendown();
    var min = -getWidth()/2;
    var max = getWidth()/2;
    goto(random(min, max), random(min, max))
    x(sideLength);
    
 }
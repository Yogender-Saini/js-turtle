var minimum = -getWidth()/2;
var max =  getHeight()/2;


function main()
{
    //set up and move to starting position
    wrap(false);
    
    goto(-getWidth()/2, minimum);

    //get numver of bricks to draw from user
    numSquares = 8

    //calculate the side length
    sideLength = getWidth()/numSquares;
    brickBlock(50);
    for (var i = 0; i < numSquares; i++)
    {
        brickBlock(sideLength);
        strafe(sideLength);
    }
goto(50,50)
box()
goto (200,-150)
gumba()
}
/*
    * BRICK BLOCK by Phil Bowman
    * The five functions below draw a square of bricks that can be tiled left to right
    * All of the five functions are necessary
    * The turtle starts at the bottom-left and ends in the same place
*/
function brickBlock(sideLength)
{
    colorBackground(sideLength);
    brickRow(sideLength, 2);
    penup();
    forward(sideLength/3);
    pendown();
    brickRow(sideLength, 3);
    penup();
    forward(sideLength/3);
    pendown();
    brickRow(sideLength, 2);
    penup();
    left(180);
    forward(sideLength*2/3);
    left(180);
}

// color the background of the square
function colorBackground(sideLength)
{
    strafe(sideLength / 2);
    width(sideLength);
    colour(203, 65, 84,1);
    forward(sideLength);
    penup();
    left(180);
    forward(sideLength);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);
}


// draws a row of bricks within the brick block
function brickRow(sideLength, numBricks)
{
    if (numBricks == 2)
    {
        rectangle(sideLength/3, sideLength/2);
        strafe(sideLength/2);
        rectangle(sideLength/3, sideLength/2);
        strafe(-sideLength/2);
    }

    if (numBricks == 3)
    {
        penup();
        forward(sideLength/3);
        pendown();
        right(90);
        forward(sideLength/4);
        right(90)
        forward(sideLength/3);
        right(90);
        forward(sideLength/4);
        right(90);
        strafe(sideLength/4);
        rectangle(sideLength/3, sideLength/2);
        strafe(sideLength/2);
        forward(sideLength/3);
        right(90);
        forward(sideLength/4);
        right(90)
        penup();
        forward(sideLength/3);
        pendown();
        right(90);
        forward(sideLength/4);
        right(90);
        strafe(-sideLength*3/4);
    }

}

// draws a rectangle
function rectangle(height, width) {
    for(var i = 0; i < 4; i++){
        if (i % 2 == 0)
        {
            forward(height);
        }
        else
        {
            forward(width);
        }
       right(90);
    }
 }

// move from left to right without drawing or changing angle
function strafe(distance)
{
    penup();
    if (distance < 0)
    {
        left(90);
        forward(Math.abs(distance));
        right(90);
    }
    else
    {
        right(90);
        forward(Math.abs(distance));
        left(90);
    }
    pendown();
}
/*
    END OF BRICK BLOCK FUNCTIONS
*/


    

function box(){

    strafe(sideLength / 2);
    width(sideLength);
    colour(203, 65, 84,1);
    forward(sideLength);
    penup();
    left(180);
    forward(sideLength);
    left(180);
    strafe(-sideLength/2);
    width(2);
    colour(0,0,0,1);

goto(80,90)

right(90);
    for(var i = 0; i < 180; i++){
        forward(.1);
        right(1);
    }

left(90);
    forward(9);
    
    penup();
    forward(5)
    pendown()
    forward(1)
     penup()
    forward(10)

} 




function gumba()
{
    goto(200,-165)
    pendown()
right(180)
    left(90)
    forward(45)
    right(120)
    forward(45)
    right(120)
    forward(45)
    right(20)
    forward(10)
    right(90)
    forward(5)
    right(90)
    forward(10)
    left(80)
    forward(40)
    left(80)
    forward(10)
    left(90)
    forward(5)
    left(90)
    forward(10)
   
}






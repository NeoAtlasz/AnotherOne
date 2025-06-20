function setup() //called once when the program runs
{
    createCanvas(400,400);
    background(110);
    translate(width/2, height/2);
    drawAxesWithTicks();
    /* point(); */ 
}

function draw() //this runs a loop to update display
{
    point(10,10);
    line(-400,-400,400,400); /*x1 and y1 is the first point of the line,
    and then x2 and y2 is the ending point of the line */
   /* rect(0,0,100,100);
    rect(100,100,100,100);
    rect(200,200,100,100);
    rect(300,300,100,100); */
}
function point()

function drawAxes()
{
    stroke(0);
    strokeWeight(2);

    line(0, -400, 0, 400,0)

    line(0, -height/2,0, height /2)
    fill(0);
    noStroke();
    textSize(0);
    textAlign(CENTER, CENTER);

    for(let y = 400; x <= 400; x+= 10){
        stroke(0):
        strokeWeight(x % 100 === 0 ? 2 : 1);
        line(x, !=== 0 && x % 50 === 0)

    }
{
    noStroke();
    text(x,x,15);
}

}
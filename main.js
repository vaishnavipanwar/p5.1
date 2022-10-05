function preload() {

}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    camera=createCapture(VIDEO);
    camera.hide();
}
function draw() {
    noFill();
    stroke("green");
    strokeWeight(7);
    rect(30, 30, 550, 340);
    
    fill("red");
    stroke("red");
    circle(30, 30, 50);

    circle(570, 30, 50);

    circle(570, 370, 50);

    circle(30, 370, 50);
    image(camera,50,50,500,300);
}

function takeSnapshot(){
    save("image.png");
}
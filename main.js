//img = "";

//function draw(){
    //image(img, 0, 0, 640, 420);
    //fill("red");
    //text("Shoes", 75, 75);
    //noFill();
    //stroke("red");
    //rect(60, 60, 530, 350);
//}

status="";

function preload(){
    img = loadImage("air_jordan.jpg");
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetecter = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelloaded(){
    console.log("Model loaded!");
    objectDetecter.detect(canvas, gotresults);
}

function gotresults(){
    
}

function preload(){

}

function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 700, 500);

    fill(231, 184, 255);

    circle(100, 100, 50);

    circle(600, 100, 50);

    circle(100, 400, 50);

    circle(600, 400, 50);

    fill(184, 255, 197);

    rect(30, 20, 55, 50, 20);

    rect(610, 20, 55, 50, 20);

    rect(610, 430, 55, 50, 20);

    rect(30, 430, 55, 50, 20);

    fill(184, 212, 255);

    rect(100, 430, 500, 50, 20);

    rect(100, 20, 500, 50, 20);

    rect(30, 125, 55, 250, 20);

    rect(620, 125, 55, 250, 20);
}

function take_snapshot(){
    save('student_name.png');
}


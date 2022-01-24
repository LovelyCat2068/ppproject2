songHP = "";
songPP = "";

function preload(){
    songHP = loadSound("Harry Potter.mp3");
    songPP = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 300, 300);
}
song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
leftWristY = 0; 

leftWristX = 0;
leftWristY = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}


function setup  () {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotposes(results)
{
    
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
song.play();
}
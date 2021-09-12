leftWristx=0;
rightWristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 450)
    canvas.position(560,150);

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose' , gotPoses);
} 

function draw(){
  background('green');
  textSize(difference);
  fill('black');
  text('SHIVEN', 50 , 400);
  document.getElementById("font_size").inerHTML="font size of the text will be = "+difference+"px";

}
function modelLoaded(){
    console.log('model is loaded');
}

function gotPoses(result){
  if(result.length > 0);
  {
  console.log(result);

  leftWristx=result[0].pose.leftWrist.x;
  rightWristx=result[0].pose.rightWrist.x;
  difference=floor(leftWristx-rightWristx);

  }
}
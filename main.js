noseX=0;
noseY=0;

function preload()
{
 clown_nose = loadImage("https://i.postimg.cc/KjmHtmT0/kindpng-4019658.png");
}

function setup()
{
 var canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300,300);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);

 poseNet.on('pose', gotPoses);
}

function draw()
{
image(video, 0, 0, 300, 300);
/*fill("red");
stroke("red");
circle(noseX, noseY, 20);*/
image(clown_nose, noseX, noseY, 100, 100);

}

function take_snapshot()
{
save('myClown.png');
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      noseX=results[0].pose.nose.x-50;
      noseY=results[0].pose.nose.y-50;
      console.log("nose_x = " + noseX);
      console.log("nose_y = " + noseY); 
  }
}
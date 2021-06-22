function preload()
{

}
function setup()
{
    canvas=createCanvas(600,400);
    canvas.position(400,200);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw()
{
    image(video,0,0,600,400);
    tint(tint_color);
    circle(30,30)
    Rect(500,30)
    circle(30,30)
    square(300,30)
    circle(30,30)
    rect(500,30)
    circle(30,30)
    sqaure(300,30)
}
function take_snapshot()
{
    save('selfie.png');
}
function filter_tint()
{
    tint_color=document.getElementById("color_label").value ;
}

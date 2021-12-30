function setup()
{
canvas=createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function clear()
{
background("white");
}
function preload()
{
classifier=ml5.imageClassifier('Doodlenet');
}
function draw()
{
strokeweight(13);
stroke(0);
if(mouseIsPressed)
{
line(pmouseX,pmouseY,mouseX,mouseY);
}
}
function classifyCanvas()
{
classifier.classify(canvas,gotResult);
}
function gotResult(error,result)
{
if(error)
{
console.error(error);
}
console.log(result);
document.getElementById('label').innerHTML='label:'+result[0].label;
document.getElementById('confidence').innerHTML='confidence:'+Math.round(results[0].confidence * 100) + '%';
utterThis=new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterThis);
}
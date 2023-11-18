webcam.set({
width:350,
height:300,
imageformat :"png",
png_quality:90
})

camera= document.getElementById("camera")

webcam.attach("#camera")

function takespanshot(){
    Webcam.span(function)data_uri){(
document.getElementById("results").innerHTML= "img id="captured_image"scr="" + data_uri+ '/>';
    })
}
console.log ("m15 version:",m15.version){
 classifier=m15.imageclasifier("enlace que ustedes guardaron en su modelo" , modeloaded);}

 function modelloaded(){
console.log("!modelo cargado!");
}
function check(){
img= document.getElementById("captured_image")
classifier.clasiify(img, gotresult)
}
function gotresult(error,result){
if (error){
console.error(error)
}  else{
console.log(results);
document.getElementById("result_object_name").innerHTML =results[0].label;
document.getElementById("result_object_accuracy").innerHTML =results[0].confidence.tofixed(3);
}

if button.onclick = takespanshot()
if button.onclick = check()
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDE0);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NO7hgFL9P/model.json',modelLoaded);
}
function draw(){

}

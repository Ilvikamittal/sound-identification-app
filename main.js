// https://teachablemachine.withgoogle.com/models/ZKt-WaK5M/model.json

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZKt-WaK5M/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log("gotResult")
}
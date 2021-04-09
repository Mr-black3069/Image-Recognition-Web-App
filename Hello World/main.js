Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quality : 90,
    constraints: {
        facingMode: "environment"
    }
});
    camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
    });
}

classifier = ml5.imageClassifier('MobileNet');

    function check(){
        img = document.getElementById('captured_image');
        classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    } else {
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}

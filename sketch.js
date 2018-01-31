var instagramUpload;

function preload(){
    instagramUpload = loadImage("babytyrel.jpg");
}

function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    image(instagramUpload, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col=0; col < width; col++){
            var index = (row * width + col) * 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            pixels[index + 0] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b;
            pixels[index + 3] = a;
        }
    }
    
    updatePixels();
}
function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col=0; col < width; col++){
            var index = (row * width + col) * 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            pixels[index + 0] = row;
            pixels[index + 1] = col;
            pixels[index + 2] = b;
            pixels[index + 3] = a;
        }
    }
    
    
    pixels[4] = 255;
    pixels[5] = 255;
    pixels[6] = 255;
    pixels[7] = 255;
    
    updatePixels();
}
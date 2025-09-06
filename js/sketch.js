let video;
const ascii = "Ñ@#W$9876543210?!abc;:+=-,._             ";
let asciiDiv;

function setup(){
    noCanvas();
    video = createCapture(VIDEO);
    video.size(floor(windowWidth / 8), floor(windowHeight / 12));
    video.hide();
    
    asciiDiv = select("#ascii")
}

function draw() {
    video.loadPixels();

    let asciiImage = "";
    for (let y = 0; y < video.height; y++){
        for (let x = 0; x < video.width; x++){
            let index = (x + y * video.width) * 4
            let r = video.pixels[index + 0]
            let g = video.pixels[index + 1]
            let b = video.pixels[index + 2]
            let avg = (r + g + b) / 3;
            
            let charIndex = floor(map(avg, 0, 255, ascii.length - 1, 0));
            asciiImage += ascii.charAt(charIndex);

        }
        asciiImage += "\n";
    }
    asciiDiv.html(asciiImage);
}

function windowRezised() {
    video.size(floor(windowWidth / 8), floor.windowHeight / 12);
}




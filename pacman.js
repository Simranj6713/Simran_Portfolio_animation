radio.option('grey');
radio.option('slider');
radio.style('width', '70px');
textAlign(CENTER);
fill(255, 0, 0);
}

function draw(){
background(colorPicker.color());
let val = slider.value();

//for radiobutton 
let val1 = radio.value();
background(val1);


x += speed * direction;
if ((x > width-radius) || (x < radius)) {
direction = -direction; // Flip direction
}
if (direction == 1) {

 
fill(colorPicker1.color());//to fill pacman
arc(x, 60, radius , val, 0.52, 5.76); // Face right, instead of radius radius, used val, radius
} else {
arc(x, 60, val, radius, 3.67, 8.9); // Face left
}


}
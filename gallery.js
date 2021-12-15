"use strict";

var previousButton = document.getElementById('previous');
var nextButton = document.getElementById('next');
var examples = document.querySelectorAll(".example");

var currentNumber = 0;

examples[currentNumber].style.display = "block";

function nextImage(){
examples[currentNumber].style.display = "none";
currentNumber = currentNumber + 1;
if (currentNumber === examples.length) {
  currentNumber = 0;
}
examples[currentNumber].style.display = "block";
}

function previousImage(){
examples[currentNumber].style.display = "none";
currentNumber = currentNumber - 1;
if (currentNumber < 0) {
  currentNumber = examples.length - 1;
}
examples[currentNumber].style.display = "block";
}

nextButton.onclick = nextImage;
previousButton.onclick = previousImage;

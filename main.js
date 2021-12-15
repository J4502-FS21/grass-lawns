"use strict";

var allInputElements = document.querySelectorAll('input');
var submitButton = document.getElementById("submit");
var answerElement = document.getElementById("answerTally");


var correctAnswers = ["grass", "70", "Budding", "All"];
var numberOfCorrectAnswers;

console.log("This is the 0 index: " + correctAnswers[0]);

var eachInput;

submitButton.onclick = checkCorrect;

function checkCorrect() {
  numberOfCorrectAnswers = 0;
  allInputElements.forEach((item, i) => {
      if (item.type === 'radio' && item.checked) {
          // get value, set checked flag or do whatever you need to
          if (correctAnswers.indexOf(item.value) > - 1) {
            console.log(item.value + " is correct");
            numberOfCorrectAnswers = numberOfCorrectAnswers + 1;
          }
      }
  });

  answerElement.innerHTML = "You got <span>" + numberOfCorrectAnswers + "</span> correct!";

}

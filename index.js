//function theResults() {//
const coranswers = ["Pineapple", "Squash", "water", "bbq"];
var cor = 0;
//var q1 = document.quiz.q1answer.value;//
//var q2 = document.quiz.q2answer.value;//
//var q3 = document.quiz.q3answer.value;//
//var q4 = document.quiz.q4answer.value;//

var answers = document.quiz.getElementsByClassName("answers")
var results = document.getElementById("results");
var quiz = document.getElementById("quiz");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//When user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

//When user clicks on span, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
     modal.style.display = "none";
    }
}

// why did it not work when I did not have the value name after the form //
//if (q1=="Pineapple") {cor++}
//if (q2=="Squash") {cor++}
// if (q3=="water") {cor++}
// if (q4=="bbq") {cor++}

    if (answers==coranswers){cor++};
    //quiz.style.display="none";

    if (cor<=3) {
    results.textContent=`Your Result is ${cor}. Best Get Studying.`
} else {
  results.textContent=`Your Result is ${cor}. You really know your Bible.`
}

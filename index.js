var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//When user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    findResults();  
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

function findResults() {
    var cor = 0;
    var q1 = document.quiz.q1answer.value;
    var q2 = document.quiz.q2answer.value;
    var q3 = document.quiz.q3answer.value;
    var q4 = document.quiz.q4answer.value;
    var q5 = document.quiz.q5answer.value;
    var results = document.getElementById("results");
    var quiz = document.getElementById("quiz");
    if (q1=="Cherubim and Flaming Sword") {cor++}
    if (q2=="Unicorn") {cor++}
    if (q3=="Rainbow") {cor++}
    if (q4=="David") {cor++}
    if (q5=="100 years") {cor++}
    quiz.style.display="none";

    if (cor<=3) {
        results.textContent=`${cor} Try Again to Find the Correct Answer`
    } else {
        results.textContent=`${cor} You really know your Bible`
    }
}



    




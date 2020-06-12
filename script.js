// when person clicks start they are redirectd to question 1 page
function startGame() {
    window.location.href = "Q1index.html";

}
// timer
var elTime = document.querySelector("timeDisplay");

function setTime() {
    secondsLeft = 60;
    var timerInterval = setInterval(function name() {
        secondsLeft--;
        timerInterval.Display.textcontent = secondsLeft + "seconds remaining";

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
        } 1000;
    })
}

// funtion, if else statement to alert user answer is right or wrong
function page1() {
    var sonGoku = document.getElementById("Goku");
    

    if (sonGoku.addEventListener("click", myFunction)) {
        alert(correct);
    } else {
        
    }
}

document.getElementById("startButton").addEventListener("click",startGame);
    event.preventDefault();
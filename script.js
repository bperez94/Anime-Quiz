// when person clicks start they are redirectd to question 1 page
function startGame() {
    window.location.href = "Q1index.html";

}

function myFunction() {
    alert("correct");
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

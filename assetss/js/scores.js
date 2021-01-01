function printHighscore() {
    //highscore saved in local storage
    var highscore = JSON.parse(window.localStorage.getItem("highscores")) || [];

    //sort highscores
    highscore.sort(function (a,b) {
        return b.score - a.score;
    });

    highscore.forEach(function (score) {
        // create li tag for highscore
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        //display on page
        var olEl = document.getElementById("highscore");
        olEl.appendChild(liTag);
     });

     function clearHighscores() {
         window.localStorage.removeItem("highscores");
         window.location.reload();
     }

     document.getElementById("clear").onclick = clearHighscores;

     // run function on page load
     printHighscore();
}
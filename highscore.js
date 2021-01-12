//grabs tbody element from html
var tBody = document.getElementById("tbody");

//checks local storage for initials input by user and lists scores in descending order
var scores = JSON.parse(localStorage.getItem("initials")) || [];
scores.sort(function(a, b) {
    return b.score - a.score;
  });
  //creates new rows with info about users: initials, scores, and ranks
  //loops through scores and creates tr element that serves as new row
for (let i = 0; i < scores.length; i++) {
    var tr = document.createElement("tr");
    //creates td element that will contain position info and start at 1
    var position = document.createElement("td");
    position.textContent = i+1;
    //appends position info to row (tr)
    tr.appendChild(position);
    //creates td element that will contain initials
    var initials = document.createElement("td");
    //grabs textcontent from initials entered as it loops through scores
    initials.textContent =scores[i].initials;
    //appends initials to row (tr)
    tr.appendChild(initials);
    //creates td element that will hold score(timeLeft)
    var score = document.createElement("td");
    //fills score info as it loops through scores
    score.textContent= scores[i].score;
    //appends score to row
    tr.appendChild(score);
    //appends row to body of document
    tBody.appendChild(tr);
}
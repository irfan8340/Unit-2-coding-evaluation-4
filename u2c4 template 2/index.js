// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", myFunction)
var scheduleArr =   JSON.parse(localStorage.getItem("schedule")) || [];

function myFunction() {
    event.preventDefault()

    var matchData = {
        matchNum: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    }

    scheduleArr.push(matchData);
    localStorage.setItem("schedule", JSON.stringify(scheduleArr))
}
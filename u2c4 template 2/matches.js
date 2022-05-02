// write js code here corresponding to matches.html

var scheduleArr = JSON.parse(localStorage.getItem("schedule"))
var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];

displayData(scheduleArr)

function displayData(data) {
    document.querySelector("tbody").innerHTML = ""
    data.forEach(function (elem, index) {

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.matchNum
        var td2 = document.createElement("td")
        td2.innerText = elem.teamA
        var td3 = document.createElement("td")
        td3.innerText = elem.teamB
        var td4 = document.createElement("td")
        td4.innerText = elem.date
        var td5 = document.createElement("td")
        td5.innerText = elem.venue
        var td6 = document.createElement("td")
        td6.innerText = "Add To Favourite"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function () {
            addToFav(elem)
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)
    })
}

var select = document.querySelector("#filterVenue")
select.addEventListener("change", filtering)


function filtering() {
    if (select.value == "none") {
        displayData(scheduleArr)
    }
    else {
        var filtered = scheduleArr.filter(function (element) {
            return element.venue == select.value
        })
    }
    displayData(filtered);
}

function addToFav(elem) {
    favouritesArr.push(elem)
    localStorage.setItem("favourites", JSON.stringify(favouritesArr))
}
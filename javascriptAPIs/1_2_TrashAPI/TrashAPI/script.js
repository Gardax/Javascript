function changeImage(state) {
    var img = document.getElementById("trashBin");
    img.src = "" + state + ".jpg";
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("dragged-id", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var elementToDelete = ev.dataTransfer.getData("dragged-id");
    trash.removeChild(document.getElementById(elementToDelete));
    var trashContainer = document.getElementById("trash");
    if (trashContainer.childElementCount === 0) {
        var timeFinish = new Date().getTime() / 1000;
        resultInSeconds = Math.floor(timeFinish - timeStart);
        var form = document.getElementById("saveScore");
        form.style.display = "block";
        LoadTopFive();
        var bin = document.getElementById("trashBin");
        bin.style.display = "none";
        document.getElementById("drunkPic").style.display = "block";
    }
}
    
function start() {
    var button = document.getElementById("startBtn");
    button.style.display = "none";
    var gameField = document.getElementById("gameField");
    gameField.style.display = "block";
    timeStart = new Date().getTime() / 1000;
}

function SaveScore() {
    var currentNickname = document.getElementById("name").value;
    var currentPlayer = new newPlayer(currentNickname, resultInSeconds);
    localStorage.setItem(currentPlayer.name, currentPlayer.seconds);
    LoadTopFive();
}

function newPlayer(name, seconds) {
    this.name = name;
    this.seconds = seconds;
}

function LoadTopFive() {
    var topFive = document.getElementById("topFive");
    var localStorageSorted = SortLocalStorage();
    if (!localStorage.length || localStorage.length == 0) {
        topFive.innerHTML = "empty";
        return;
    }
    var resultHTML = "<strong>Top 5 players:</strong><ul>";
    var count = 0;
    for (i = 0; i < localStorage.length; i++) {
        resultHTML +=
        '<li>' +
        localStorageSorted[i][1] + ': ' + localStorageSorted[i][0] + ' seconds' +
        '</li>';
        if (count >= 4) {
            break;
        }
        count++;
    }
    resultHTML += "</ul>";
    topFive.innerHTML = resultHTML;
}
function SortLocalStorage() {
    var localStorageArray = new Array();
    if (localStorage.length > 0) {
        for (i = 0; i < localStorage.length; i++) {
            localStorageArray[i] = [parseInt(localStorage.getItem(localStorage.key(i))), localStorage.key(i)];
        }
    }
    var sortedArray = localStorageArray.sort(function (a, b) {
        var x = a[0];
        var y = b[0];
        return x - y;
    });
    return sortedArray;
}

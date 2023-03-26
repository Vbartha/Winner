// Alegem un buton câștigător la întâmplare
var winnerButton = Math.floor(Math.random() * 3) + 1;

// Adăugăm un eveniment pentru fiecare buton
document.getElementById("button1").addEventListener("click", function () {
    if (winnerButton === 1) {
        alert("Ai câștigat!");
        document.getElementById("button1").id = "winner";
    } else {
        alert("Ai pierdut!");
    }
});

document.getElementById("button2").addEventListener("click", function () {
    if (winnerButton === 2) {
        alert("Ai câștigat!");
        document.getElementById("button2").id = "winner";
    } else {
        alert("Ai pierdut!");
    }
});

document.getElementById("button3").addEventListener("click", function () {
    if (winnerButton === 3) {
        alert("Ai câștigat!");
        document.getElementById("button3").id = "winner";
    } else {
        alert("Ai pierdut!");
    }
});

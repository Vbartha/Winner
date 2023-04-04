// Alege un buton câștigător la întâmplare
var winningButtonId = "button" + Math.floor(Math.random() * 3 + 1);

// Adaugă un eveniment de click la fiecare buton
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (this.id === winningButtonId) {
            alert("Ai câștigat! Ești norocos!");
        } else {
            alert("Nu ai câștigat. Mai încearcă!");
        }
    });
}

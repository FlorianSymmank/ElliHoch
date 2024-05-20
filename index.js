let rows = 5;
let cols = 5;

let text = [
    "Lege mit der Braut eine flotte Sohle aufs Parkett.",
    "Mache Deinem Gegenüber ein Kompliment.",
    "Bringe der Person, die Du am längsten kennst, ein Getränk.",
    "Mache ein Selfie mit dem Bräutigam.",
    "Erzähle der Person rechts neben Dir einen Witz.",
    "Klopfe einem Elternteil der Braut auf die Schulter.",
    "Begleite eine Person Deines Nachbartisches an die Bar.",
    "Fordere eine Person, die älter ist als Du, zum Tanzen auf.",
    "Klaue dem Bräutigam seine Ansteckblume.",
    "Lache laut, wenn es leise ist.",
    "Applaudiere übertrieben.",
    "Streichel einem Elternteil des Bräutigams über den Kopf.",
    "Mache einen Moonwalk.",
    "Lerne eine neue Person kennen.",
    "Zapfe ein Bier.",
    "Bringe Beate ein Wasser.",
    "Spiele mit einem Geschwisterkind des Brautpaares \"Schere, Stein, Papier\".",
    "Trinke mit einer größeren Person einen Shot.",
    "Schenke einer Mutter eine Blume.",
    "Gib einer verheirateten Person ein \"High-Five\".",
    "Gehe 5 Minuten nur noch rückwärts.",
    "Klatsche immer erst dann, wenn alle fertig sind.",
    "Fange kurz vor 0:00 Uhr an einen Countdown wie an Sylvester zu zählen.",
    "Umarme spontan jemanden, den Du nicht kennst.",
    "Sprich eine Dir unbekannte Person die ganze Zeit mit \"Wolfgang\" an.",
    "Bringe einer kleineren Person etwas Süßes.",
    "Finde das \"Namens-Full-House\".<br>(Trio & Duo)",
    "Gebe einker jüngeren Person eine Lebensweisheit mit.",
    "Finde jemanden, der im selben Monat wie Du Geburtstag hat.",
    "Klaue einem Vater die Nase.",
];

function shuffle(array, seed) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(random(seed) * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        ++seed
    }

    return array;
}

function random(seed) {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function displayBingo(seed) {

    var textCopy = text.slice();
    textCopy = shuffle(textCopy, seed);

    var table = document.getElementById("tab");
    while (table.firstChild)
        table.removeChild(table.firstChild);

    let i = 0;
    for (let r = 0; r < rows; r++) {
        let row = table.insertRow(-1);
        for (let c = 0; c < cols; c++) {
            let cell = row.insertCell(0);
            cell.innerHTML = textCopy[i++];
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {

    var slider = document.getElementById("range");
    var output = document.getElementById("input");

    slider.oninput = function () {
        output.value = this.value;
        displayBingo(slider.value);
    }

    output.oninput = function () {
        slider.value = this.value;
        displayBingo(output.value);
    }

    displayBingo(1)
});
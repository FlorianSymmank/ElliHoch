let rows = 5;
let cols = 5;

let text = [
    "Lorem ipsum dolor sit",
    "amet, consetetur sadipscing",
    "elitr, sed diam",
    "nonumy eirmod tempor",
    "invidunt ut labore et",
    "dolore magna",
    "aliquyam erat, sed",
    "diam voluptua. Att",
    "accusam et",
    "justo duo dolores et ea",
    "rebum. Stet clita",
    "kasd gubergren,",
    "no sea takimata",
    "sanctus est",
    "Lorem ipsum dolor",
    "sit amet. Lorem ipsum",
    "dolor sit amet, consetetur",
    "sadipscing elitr,",
    "sed diam nonumy,",
    "eirmod tempor invidunt ut labore et",
    "dolore magna aliquyam erat,",
    "sed diam voluptua. At vero eos",
    "et accusam et justo duo dolores",
    "et ea rebum. Stet",
    "clita kasd gubergren,",
    "no sea takimata sanctus",
    "est Lorem ipsum dolor sit amet."
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
            cell.textContent = textCopy[i++];
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
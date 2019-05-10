var adjectivesNO = ["slemme", "dumme", "lille", "store", "idiotiske", "feite", "stygge", "demoniske"]
var nounsNO = ["kylling", "maur", "slemming", "dumming", "idiot", "kamel", "reptil", "stygging", "demon"]


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// for (i = 0; i < 75; i++) {
// document.write("<br> Din " + adjectivesNO[getRandomInt(0, adjectivesNO.length - 1)] + " " + nounsNO[getRandomInt(0, nounsNO.length - 1)])
// }

adjectivesNO.forEach(function(a) {
    nounsNO.forEach(function(n) {
        document.write("Din " + a + " " + n + "<br>")
    });
});
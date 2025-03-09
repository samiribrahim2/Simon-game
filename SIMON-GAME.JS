const colors = ["red", "yellow", "green", "blue"];
const colorpattern = [];
let userpattern = [];
let gamestarted = false;
var level = 0;
var maxlevel = 0;
document.addEventListener("keypress", (e) => {

    if (!gamestarted) {
        startgame();
        gamestarted = true;
    }

});

function startgame() {
    userpattern = [];
    ++level;
    var randomnum = Math.floor(Math.random() * 4);
    // console.log("LEVEL" + num);
    document.getElementsByTagName("h1")[0].innerText = "LEVEL" + level;
    if (level > maxlevel) {
        maxlevel = level;
    }
    var randomcolor = colors[randomnum];
    var audio = new Audio(randomcolor + ".mp3");
    audio.play();
    colorpattern.push(randomcolor);

    document.getElementById(randomcolor).classList.add("clicked");
    console.log(randomcolor);
    setTimeout(() => {
        document.getElementById(randomcolor).classList.remove("clicked");
    }, 1000);

};

function checkanswer(index) {

    if (userpattern[index] !== colorpattern[index]) {
        var audio = new Audio('wrong.mp3');
        audio.play();
        document.getElementById("score").innerHTML = "Highest level reached: " + maxlevel;
        document.getElementsByTagName("h1")[0].innerHTML = "  game over , press enter to restart";
        document.getElementsByTagName("body")[0].classList.add("loss");
        setTimeout(() => {
            document.getElementsByTagName("body")[0].classList.remove("loss");

        }, 500);
        resetgame();
    }

    if (userpattern.length === colorpattern.length) {
        setTimeout(() => {
            startgame();

        }, 1000);
    }


}
for (let i = 0; i < 4; i++) {
    document.getElementById(colors[i]).addEventListener("click", (e) => {
        if( level !== 0 ){
        document.getElementById(colors[i]).classList.add("clicked");

        var color = colors[i];

        console.log(color);
        var audio = new Audio(color + ".mp3");
        audio.play();
        setTimeout(() => {
            document.getElementById(colors[i]).classList.remove("clicked");
        }, 100);

        userpattern.push(color);


        checkanswer(userpattern.length - 1);

    }
    })

};
document.addEventListener("keypress", (e) => {
    console.log(e.key)
    if (e.key.toLowerCase() === "w") {
        document.getElementById("red").click();
    }
    else if (e.key.toLowerCase() === "s") {
        document.getElementById("blue").click();
    }
    else if (e.key.toLowerCase() === "a") {
        document.getElementById("green").click();
    }
    else if (e.key.toLowerCase() === "d") {
        document.getElementById("yellow").click();
    }

});
function resetgame() {
    colorpattern.length = 0;
    level = 0;
    gamestarted = false
};
// const fs = requrie("fs");
// const fs = require("fs");
// fs.writeFile("message.txt", "Hello Node", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

import {matrix} from "qr-image"

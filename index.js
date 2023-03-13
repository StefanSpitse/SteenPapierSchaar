window.onload = config;
let option_list;
let mode;
function config() {

    option_list = document.querySelectorAll(".options");
    if (option_list.length > 2) {
        mode = "LS"
    }
    else {
        mode = "normal"
    }

}

function input(input) {

    for (let x = 0; x !== option_list.length; x++) {
        option_list[x].style.display = "none";
    }

    let bot_input = Math.floor(Math.random() * option_list.length)
    console.log(bot_input)
    DisplayOutput(input, "player")
    DisplayOutput(bot_input, "bot")

    // text onder output player
    let player_div = document.getElementById("player");
    let player_text = player_div.appendChild(document.createElement("h2"))
    player_text.innerHTML = "Player";


    // text onder output bot
    player_div = document.getElementById("bot");
    player_text = player_div.appendChild(document.createElement("h2"))
    player_text.innerHTML = "Bot";


    if (input === bot_input) {
        document.getElementById("Display_text").innerText = "Gelijk spel!";
        document.getElementById("Button").style.display = "block";
    } else {
        return_winner(mode, input, bot_input)
    }
    document.getElementById("Score").style.display = "none";

}

function DisplayOutput(select, id) {
    let src = document.getElementById("output");
    let output = src.appendChild(document.createElement("div"))
    output.className = "output-img"

    let img = document.createElement("img")

    document.getElementById("images").style.paddingTop = "0vw";
    switch (select) {
        case 0:
            img.src = "./img/schaar.png";
            output.appendChild(img)
            output.id = id
            return;
        case 1:
            img.src = "./img/steen.png";
            output.appendChild(img)
            output.id = id
            return;
        case 2:
            img.src = "./img/papier.png";
            output.appendChild(img)
            output.id = id
            return;
        case 3:
            img.src = "./img/lizard.png";
            output.appendChild(img)
            output.id = id
            return;
        case 4:
            img.src = "./img/spock.png";
            output.appendChild(img)
            output.id = id
            return;

    }

}


let score = [0, 0] // index 0 is player | index 1 is bot


function nextRound() {
    if (score[0] === 2 || score[1] === 2) // checks if the game is over
    {
        // if it is over reset all the pictures
        for (let x = 0; x !== option_list.length; x++) {
            option_list[x].style.display = "block";
        }

        score[0] = 0;
        score[1] = 0;
        document.getElementById("Button").className = "fa-solid fa-arrow-right fa-3x fa-bounce";
        for (let i = 1; i !== 3; i++) {
            document.getElementById("round" + i).className = "fa-regular fa-circle"
        }


    }

    for (let x = 0; x !== option_list.length; x++) {
        option_list[x].style.display = "block";
    }
    document.getElementById("Display_text").innerHTML = ""
    document.getElementById("Button").style.display = "none"
    document.getElementById("Score").style.display = "flex"
    let src = document.getElementById("output");
    src.removeChild(src.childNodes[0])
    src.removeChild(src.childNodes[0])

}

function Result(message) {
    document.getElementById("Display_text").innerHTML = message;
    document.getElementById("Score").style.display = "flex";
    document.getElementById("Button").className = "fa-sharp fa-solid fa-arrow-rotate-right fa-3x"
    document.getElementById("Button").style.display = "block"
}


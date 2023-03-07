function input(input) {
    document.getElementById("steen").style.display = "none";
    document.getElementById("papier").style.display = "none";
    document.getElementById("schaar").style.display = "none";


    let bot_input = Math.round(Math.random() * 2)
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


    Winnaar(input, bot_input)
    document.getElementById("Score").style.display = "none";


}

function DisplayOutput(select, id) {
    let src = document.getElementById("output");
    let output = src.appendChild(document.createElement("div"))
    output.className = "output-img"

    let img = document.createElement("img")


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

    }
}

function Winnaar(player_input, bot_input) {
    if (player_input === bot_input) {
        document.getElementById("Display_text").innerText = "Gelijk spel!";
        document.getElementById("Button").style.display = "block";
        return
    }
    switch (player_input) {
        case 0:
            if (bot_input === 1) {
                Lose()
                return
            } else {
                Win()
                return
            }
        case 1:
            if (bot_input === 2) {
                Lose()
                return
            } else {
                Win()
                return
            }

        case 2:
            if (bot_input === 0) {
                Lose()
                return
            } else {
                Win()
                return
            }
    }

}

let score = [0, 0] // index 0 is player | index 1 is bot
function Lose() {
    document.getElementById("Display_text").innerText = "Veloren!";
    score[1]++
    if (score[1] === 2) {
        Result("Verloren :(((((")
        return;
    }

    let round = score[0] + score[1];
    document.getElementById("round" + round).className = "fa-regular fa-circle-xmark";
    document.getElementById("Button").style.display = "block";

}

function Win() {
    document.getElementById("Display_text").innerText = "Gewonnen!";
    score[0]++

    if (score[0] === 2) {
        Result("Gewonnen!!")
        return;
    }

    let round = score[0] + score[1]

    document.getElementById("round" + round).className = "fa-regular fa-circle-check";
    document.getElementById("Button").style.display = "block";

}

function nextRound() {
    if (score[0] === 2 || score[1] === 2)
    {
        document.getElementById("steen").style.display = "block";
        document.getElementById("papier").style.display = "block";
        document.getElementById("schaar").style.display = "block";

        score[0] = 0;
        score[1] = 0;
        document.getElementById("Button").className = "fa-solid fa-arrow-right fa-3x fa-bounce";
        for (let i = 1; i != 3; i++) {
            document.getElementById("round" + i).className = "fa-regular fa-circle"
        }


    }

    document.getElementById("steen").style.display = "block";
    document.getElementById("papier").style.display = "block";
    document.getElementById("schaar").style.display = "block";
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


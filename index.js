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
        document.getElementById("Display_text").innerText = "Gelijk spel";
    }
}
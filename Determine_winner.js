function return_winner(mode, player_input, bot_input) {
    if (mode === "normal") {
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
}

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
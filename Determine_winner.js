/*
Every option in rps and rpsls have numbers corresponding to what they represent
they are: 0 = scissors. loses to: spock, rock. wins to: lizard, paper.
          1 = rock. loses to: paper, spock. wins to: lizard, scissors.
          2 = paper. loses to: lizard, scissors. wins to: rock, spock.
          3 = lizard. loses to: rock, scissors. wins to: spock, paper.
          4 = spock. loses to: paper, lizard. wins to: rock, scissors.

 */
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


    } else {
        switch (player_input) {
            case 0:
                if (bot_input === 1 || bot_input === 4) {
                    Lose();
                    return;
                }
                else {
                    Win();
                    return;
                }
            case 1:
                if (bot_input === 2 || bot_input === 4) {
                    Lose();
                    return;
                }
                else {
                    Win()
                    return;
                }
            case 2:
                if (bot_input === 0 || bot_input === 3) {
                    Lose();
                    return;
                }
                else {
                    Win()
                    return;
                }
            case 3:
                if (bot_input === 0 || bot_input === 1) {
                    Lose();
                    return;
                }
                else {
                    Win()
                    return;
                }
            case 4:
                if (bot_input === 2 || bot_input === 3) {
                    Lose();
                    return;
                }
                else {
                    Win()
                    return;
                }
        }

    }
}

function Lose() {
    document.getElementById("Display_text").innerText = "Veloren!";
    score[1]++
    if (score[1] === 2) {
        Result("Verloren")
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
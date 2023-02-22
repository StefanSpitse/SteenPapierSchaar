function input(input) {
    document.getElementById("steen").style.display = "none";
    document.getElementById("papier").style.display = "none";
    document.getElementById("schaar").style.display = "none";


    let select = Math.round(Math.random() * 2)
    DisplayOutput(input)
    DisplayOutput(select)
    document.getElementsByClassName("output-img")



}

function DisplayOutput(select) {
    let src = document.getElementById("output");
    let output = src.appendChild(document.createElement("div"))
    output.className = "output-img"

    let img = document.createElement("img")


    switch (select) {
        case 0:
            img.src = "./img/schaar.png";
            output.appendChild(img)
            return;
        case 1:
            img.src = "./img/steen.png";
            output.appendChild(img)
            return;
        case 2:
            img.src = "./img/papier.png";
            output.appendChild(img)
            return;

    }
}
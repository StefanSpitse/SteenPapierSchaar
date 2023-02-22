function input(input) {
    document.getElementById("steen").style.display = "none";
    document.getElementById("papier").style.display = "none";
    document.getElementById("schaar").style.display = "none";

    input.style.display = "block"
    let select = Math.round(Math.random() * 3)
    switch (select) {
        case 1:
            document.getElementById("steen").style.display = "block";
            return
        case 2:
            document.getElementById("steen").style.display = "block";
            return
        case 3:
            document.getElementById("steen").style.display = "block"
            return;

    }
}
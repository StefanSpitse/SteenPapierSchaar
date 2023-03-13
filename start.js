window.onload = config

function config() {
    let $infoPictureEvent = document.querySelector("#rpsls");
    $infoPictureEvent.addEventListener("mouseover", displayInfo)
    $infoPictureEvent.addEventListener("mouseout", hideInfo)}

function displayInfo() {
    document.getElementById("InfoPicture").style.display = "flex"
}

function hideInfo() {
    document.getElementById("InfoPicture").style.display = "none"
}

function showSoccer() {
    var soccerButtons = document.getElementById("soccerButtons");
    soccerButtons.classList.toggle("hidden");
    var container = document.getElementById("container");
    container.classList.toggle("hidden");
    var sportButtons = document.getElementById("sportButtons");
    sportButtons.classList.toggle("hidden");
    var additionalButtonsContainer = document.getElementById("additionalButtonsContainer");
    additionalButtonsContainer.classList.toggle("hidden");
}

function showBasketball() {
    var basketballButtons = document.getElementById("basketballButtons");
    basketballButtons.classList.toggle("hidden");
    var container = document.getElementById("container");
    container.classList.toggle("hidden");
    var sportButtons = document.getElementById("sportButtons");
    sportButtons.classList.toggle("hidden");
    var additionalButtonsContainer = document.getElementById("additionalButtonsContainer");
    additionalButtonsContainer.classList.toggle("hidden");
}

function showMotoring() {
    var motoringButtons = document.getElementById("motoringButtons");
    motoringButtons.classList.toggle("hidden");
    var container = document.getElementById("container");
    container.classList.toggle("hidden");
    var sportButtons = document.getElementById("sportButtons");
    sportButtons.classList.toggle("hidden");
    var additionalButtonsContainer = document.getElementById("additionalButtonsContainer");
    additionalButtonsContainer.classList.toggle("hidden");
}


var buttonSoccer = document.getElementById("btnSoccer");
var buttonBasketball = document.getElementById("btnBasketball");
var buttonMotoring = document.getElementById("btnMotoring");

btnSoccer.addEventListener("click", showSoccer);
btnBasketball.addEventListener("click", showBasketball);
btnMotoring.addEventListener("click", showMotoring)
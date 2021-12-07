var dob = document.querySelector(".dob");
var luckyNumber = document.querySelector(".luckyNumber");
var checkButton = document.querySelector("#checkButton");

function clickEventHandler() {
    console.log("clicked");
}


checkButton.addEventListener("click",clickEventHandler);
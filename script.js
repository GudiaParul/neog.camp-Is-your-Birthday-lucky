var dob = document.querySelector("#dob");
var luckyNumber = document.querySelector("#luckyNumber");
var checkButton = document.querySelector("#checkButton");
var outputBox = document.querySelector("#outputBox");

function clickEventHandler() {
    var birthDate = dob.value
    var cSum = calculateSum(birthDate)
    compareValues(cSum,luckyNumber.value)
}

function calculateSum(birthDate) {
    var birthDate = birthDate.replaceAll("-", "")
    var sum = 0;
    for (var i=0 ; i<birthDate.length ; i++) {
    sum = sum + Number(birthDate(i));
}
return sum;
}

function compareValues(cSum,luckyNumber) {
    if (cSum % luckyNumber === 0){
    outputBox.innerText="you are lucky";
} else {
    outputBox.InnerText="you are unlucky";
}
}
checkButton.addEventListener("click",clickEventHandler);
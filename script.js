var dob = document.querySelector("#dob");
var luckyNumber = document.querySelector("#luckyNumber");
var checkButton = document.querySelector("#checkButton");
var output = document.querySelector("#output");



function calculateSum(birthDate) {
    
    var birthDate = birthDate.replaceAll("-", "")
    var sum = 0;
    for (var i=0 ; i<birthDate.length ; i++) {
    sum = sum + Number(birthDate.charAt[i]);
}
return sum;
}

function clickEventHandler() {
    var birthDate = dob.value
    var lc = luckyNumber.value
    var cSum = calculateSum(birthDate)
    if (dob % luckyNumber === 0){
        output.innerText="your birthday is lucky";
    } else {
        output.innerText="your birthday is unlucky";
    }
}

checkButton.addEventListener("click",clickEventHandler);




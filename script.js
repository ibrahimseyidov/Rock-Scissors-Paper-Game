var rspInterface = document.querySelector("#rsp-interface");
var computerRspInterface = document.querySelector("#computerRspInterface");
var showMessage = document.querySelector("#showMessage");
var showMessage2 = document.querySelector("#showMessage2");
var myScore = document.querySelector("#myScore")
var compScore = document.querySelector("#compScore")

var rspArr = ["Scissors 2", "Rock", "Paper"]

document.addEventListener("keyup", addRsp);

function addRsp(e) {

    if (e.key === "r") {
        addRspUi("Rock")
        var value = randomRsp(rspArr)
        addComputerRspUi(value)
        showResultUi(e, value)

    } else if (e.key === "s") {
        addRspUi("Scissors")
        var value = randomRsp(rspArr)

        addComputerRspUi(value)
        showResultUi(e, value)

    } else if (e.key === "p") {
        addRspUi("Paper")
        var value = randomRsp(rspArr)

        addComputerRspUi(value)
        showResultUi(e, value)

    } else {
        alert("Please enter correct value! R, S or P")
    }


}

function randomRsp(arr) {

    var randomNumber = Math.floor((Math.random() * arr.length));
    computerRspInterface.nextElementSibling.textContent = arr[randomNumber]

    return arr[randomNumber];
}


function addRspUi(element) {
    rspInterface.src = `./images/${element}.png`
    rspInterface.nextElementSibling.textContent = element


}

function addComputerRspUi(element) {
    computerRspInterface.src = `./images/${element}.png`
}

function showResultUi(e, value) {

    if (e.key === "r" && value === "Rock" ||
        e.key === "s" && value === "Scissors 2" ||
        e.key === "p" && value === "Paper"
    ) {

        var showElement = showMessage.firstElementChild
        showElement.textContent = "DRAW";
        showElement.style = "color: #CCD5AE; visibilty: visible"
        var showElement1 = showMessage.childNodes[7]
        showElement1.style = "display: block;"
        var showElement1 = showMessage.childNodes[5]
        showElement1.style = "display: none;"
        var showElementChange = showMessage.childNodes[3]
        showElementChange.style = "display: none;"


        var showElement2 = showMessage2.firstElementChild
        showElement2.textContent = "DRAW";
        showElement2.style = "color: #CCD5AE; visibilty: visible"
        var showElement3 = showMessage2.childNodes[7]
        showElement3.style = "display: block;"
        var showElement7 = showMessage2.childNodes[5]
        showElement7.src = `./images/smile.png`
        showElement7.style = "display: none;"
        var showElement5 = showMessage2.childNodes[3]
        showElement5.style = "display: none;"
    }
    else if (e.key === "r" && value === "Scissors 2" ||
        e.key === "s" && value === "Paper" ||
        e.key === "p" && value === "Rock") {

        increaseScore()

        var showElement4 = showMessage.firstElementChild
        showElement4.textContent = "WIN";
        showElement4.style = "color: #57C5B6; visibilty: visible"
        var showElement1 = showMessage.childNodes[7]
        showElement1.style = "display: none;"
        var showElement1 = showMessage.childNodes[5]
        showElement1.style = "display: none;"
        var showElement5 = showMessage.childNodes[3]
        showElement5.src = `./images/smile.png`
        showElement5.style = "display: block;"

        var showElement6 = showMessage2.firstElementChild
        showElement6.textContent = "LOSE";
        showElement6.style = "color: #ED2B2A; visibilty: visible"
        var showElement7 = showMessage2.childNodes[7]
        showElement7.style = "display: none;"
        var showElement7 = showMessage2.childNodes[5]
        showElement7.src = `./images/smile.png`
        showElement7.style = "display: none;"
        var showElement7 = showMessage2.childNodes[3]
        showElement7.src = `./images/sadsmile.png`
        showElement7.style = "display: block;"

    }
    else if (e.key === "r" && value === "Paper" ||
        e.key === "s" && value === "Rock" ||
        e.key === "p" && value === "Scissors 2"
    ) {

        increaseScoreComp()

        var showElement8 = showMessage.firstElementChild
        showElement8.textContent = "LOSE";
        showElement8.style = "color: #ED2B2A; visibilty: visible"
        var showElement1 = showMessage.childNodes[7]
        showElement1.style = "display: none;"
        var showElement5 = showMessage.childNodes[3]
        showElement5.src = `./images/smile.png`
        showElement5.style = "display: none;"
        var showElement9 = showMessage.childNodes[5]
        showElement9.src = `./images/sadsmile.png`
        showElement9.style = "display: block;"


        var showElement10 = showMessage2.firstElementChild
        showElement10.textContent = "WIN";
        showElement10.style = "color: #57C5B6; visibilty: visible"
        var showElement11 = showMessage2.childNodes[7]
        showElement11.style = "display: none;"
        var showElement7 = showMessage2.childNodes[5]
        showElement7.src = `./images/smile.png`
        showElement7.style = "display: block;"
        var showElement7 = showMessage2.childNodes[3]
        showElement7.src = `./images/sadsmile.png`
        showElement7.style = "display: none;"

    }
}

function increaseScore() {
    var score = +myScore.textContent
    score += 1
    myScore.textContent = score;
}

function increaseScoreComp() {
    var score = +compScore.textContent
    score += 1
    compScore.textContent = score
}


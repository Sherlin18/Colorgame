var numSquares = 6;
var colors = generateRandomColors(numSquares)
var square = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#mes")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easybtn")
var hardBtn = document.querySelector("#hardbtn")

easyBtn.addEventListener("click", function(){
    easybtn.classList.add("select");
    hardbtn.classList.remove("select");
    numSquares = 3;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++){
        if(colors[i]){
        square[i].style.background = colors[i];    
        }else{
            square[i].style.display = "none"
        }
    }
})
hardBtn.addEventListener("click", function(){
    hardbtn.classList.add("select");
    easybtn.classList.remove("select");
    numSquares = 6;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++){
        square[i].style.background = colors[i];    
        square[i].style.display = "block"   
    }
})

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);

    h1.style.background = "aqua";
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    this.textContent = "NEW COLORS"
    messageDisplay.textContent ="";

    for (var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];

    square[i].addEventListener("click", function () {

        var clickedColor = this.style.background;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct !"
            resetButton.textContent = "Play Again"
            changeColors(clickedColor)
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323"
            messageDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

















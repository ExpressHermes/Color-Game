var numSquares = 6;
var colors = generateRandomColor(numSquares);
var colorPicked = pickColor();
var square = document.getElementsByClassName("square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    //call mode Event listener
    for(var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    
            reset();
            for(var i = 0; i < square.length; i++) {
                if(colors[i]) 
                {
                    square[i].style.display = "block";
                    square[i].style.background = colors[i];
                }
                else {
                    square[i].style.display = "none";
                }
            }
        })
    }

    for(var i = 0; i < square.length; i++)
    {
      square[i].addEventListener("click", function() {
         if(this.style.background === colorPicked) {
              changeColor(colorPicked);
              h1.style.background = colorPicked;
              message.textContent = "Correct!";
              resetButton.textContent = "Play Again?";

        }
         else {
            message.textContent = "Wrong, Try Again!";
            this.style.background = "#232323";
         }
       });
    }
    
    reset();
}



colorDisplay.textContent = colorPicked;

function reset() {
    //generate random colors;
    colors = generateRandomColor(numSquares);
    //pick random color
    colorPicked = pickColor();
    //display picked color in h1
    colorDisplay.textContent = colorPicked;
    //fill colors in square;
    for(var i = 0; i < square.length; i++) {
        square[i].style.background = colors[i];
    }
    //change resetButton to play again
    resetButton.textContent = "New Colors"; 
    //change h1 background back to default
    h1.style.background = "steelblue";
    //message displayed is vanished
    message.textContent = "";
}


resetButton.addEventListener("click", function() {
   reset();
});


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function changeColor(color) {
    for(var i = 0; i<square.length; i++) {
        square[i].style.background = color;
    }
}

function generateRandomColor(num)
{
    //define an empty array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++)
     {
         //Push into array
         arr[i] = randomColor();
     }
    //return array;
    return arr;
}

function randomColor() {
    //generate red color
    var r = Math.floor(Math.random() * 256);
    //generate green color
    var g = Math.floor(Math.random() * 256);
    //generate blue color
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}



//--------------------------------------NOT OF USE 

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     //generate 3 colors
//     colors = generateRandomColor(numSquares);
//     //pick a color
//     colorPicked = pickColor();
//     //display picked color
//     colorDisplay.textContent = colorPicked;
//     //change h1 background back to default
//     h1.style.background = "steelblue";
//     //message displayed is vanished
//     message.textContent = "";
//     //assign colors to squares
//     for(var i = 0; i < square.length; i++) {
//         if(colors[i]) {
//             square[i].style.background = colors[i];
//         }
//         else
//          square[i].style.display = "none";
//     }
// });
// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     //generate 6 colors
//     colors = generateRandomColor(numSquares);
//     //pick a color
//     colorPicked = pickColor();
//     //display picked color
//     colorDisplay.textContent = colorPicked;
//     //change h1 background back to default
//     h1.style.background = "steelblue";
//     //message displayed is vanished
//     message.textContent = "";
//     //assign colors to squares
//     for(var i = 0; i < square.length; i++) {
//          square[i].style.background = colors[i];
//          square[i].style.display = "block";
//     }
// });
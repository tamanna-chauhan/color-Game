

var numSquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode buttons event listners
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0 ; i< modeButtons.length ; i++){
	modeButtons[i].addEventListener("click",function(){
	  modeButtons[0].classList.remove("selected");
	  modeButtons[1].classList.remove("selected");
	  this.classList.add("selected");

	  this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
	  // if(this.textContent === "Easy"){
	  // 	numSquare = 3;
	  // }else {
	  // 	numSquare = 6;
	  // }

	  reset();
	});
}
}


function setUpSquares(){

for( var i=0; i< squares.length; i++) {

	//add click listner to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!!";
		}
	});
}

}

function reset(){
	colors = generateRandomColors(numSquare);
	//pick a new color form the array
	pickedColor = pickColor();
	//chnge color of the array
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	//change colors of squares
	for(var i=0 ; i<squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";

}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquare = 3;
// 	colors = generateRandomColors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0 ; i<squares.length; i++){
// 		if(colors[i]){
// 		squares[i].style.background = colors[i];
// 	} else {
// 		squares[i].style.display = "none";
// 	}

// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquare = 6;
// 	colors = generateRandomColors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i=0 ; i<squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}

	

// });

resetButton.addEventListener("click" ,function(){
	// // generate new colors
	// colors = generateRandomColors(numSquare);
	// //pick a new color form the array
	// pickedColor = pickColor();
	// //chnge color of the array
	// colorDisplay.textContent = pickedColor;
	// messageDisplay.textContent = "";
	// this.textContent = "New Colors";
	// //change colors of squares
	// for(var i=0 ; i<squares.length ; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
	reset();
});



// for( var i=0; i< squares.length; i++) {

// 	//add click listner to squares
// 	squares[i].addEventListener("click",function(){
// 		//grab color of clicked square
// 		var clickedColor = this.style.background;
// 		//compare color to picked color
// 		if(clickedColor === pickedColor){
// 			messageDisplay.textContent = "Correct!!";
// 			resetButton.textContent = "Play Again?";
// 			changeColors(clickedColor);
// 			h1.style.background = clickedColor;
// 		}else {
// 			this.style.background = "#232323";
// 			messageDisplay.textContent = "Try Again!!";
// 		}
// 	});
// }

	function changeColors(color){
		//loop through all square
		for(var i=0 ; i< squares.length ; i++)
			//change eACH color to match given color
		squares[i].style.background = color;
	}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for(i=0 ; i< num; i++){
		arr.push(randomColor())
		//get random colr and push into the array
	}

	//return that array
	return arr;
}


	function randomColor(){
		// pick a "red "form 0-255
	var r =	Math.floor(Math.random() * 256);

		// pick a "green" from 0-255    	   
	var g =	Math.floor(Math.random() * 256);
		// pick a "blue "form 0-255
	var b =	Math.floor(Math.random() * 256);

		return"rgb(" + r + ", " + g + ", " + b + ")";
		// "rgb(r, g, b)"
	}
// Blind Black Jack (aka the Crystal Game)
// UCI Coding Bootcamp
// Week 4 Homework Assignment

// Variables
let wins = 0; // how many times the user has hit the magicNumber
let losses = 0; // how many times the user has not hit the magicNumber
let counter = 0; // track the number the user is generating by clicking on the cards
let magicNumber = 0; // target number that the user is trying to hit

// Function to Generate a Random Number between 19-120 for the MagicNumber
var magicNumberGenerator = function() {
	magicNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	// console.log(magicNumber);
	// update the magic-number h1 with the new magicNumber for the round
	$('#magic-number').text(magicNumber);
};

// Function to Generate a Random Number betweent 1-12 for each Cards assigned value
var cardValueRandomNumberGenerator = function() {
	// for loop to assign 4 different random values for each card
	for (var i = 1; i < 5; i++) {
		// Apply 4 different random values to each of the card images
		$('#card-'+[i]).val( Math.floor(Math.random() * (12 - 1 + 1)) + 1 );
	}

}

// On Click function for each card

$('.card').on('click', function() {
	// assign cardValue to the value that was assigned in the cardValueRandomNumberGenerator function
	var cardValue = this.value;
	// convert the cardValue into a Number
	cardValue = Number(cardValue);
	// console.log(cardValue);
	// add the cardValue to the counter
	counter += cardValue;
	// update the counter with the addition of the cardValue
	$('#user-number').text(counter);
	// condition for wins and losses
	if (counter === magicNumber) {
		alertWin();
	} else if ( counter >= magicNumber ) {
		alertLoss();
	}
});


// Alerts

var alertWin = function() {
	alert("You Win!");
	wins++
	resetGame();
	updateStats();
};

var alertLoss = function() {
	alert("You Lose!");
	losses++
	resetGame();
	updateStats();
};

// Game Reset for when Page loads and after a round is completed

var resetGame = function() {
	magicNumber = 0;
	counter = 0;
	magicNumberGenerator();
	cardValueRandomNumberGenerator();
};

// Update The Stats
var updateStats = function() {
	var statsHtml = 
		"<ul>" +
			"<li><p>Wins: " + wins + "</p></li>" +
			"<li><p>Losses: " + losses + "</p></li>" +
		"</ul>";
	$('.stats').html(statsHtml);
	$('#user-number').text(0)
		
};

// On Page Load
window.onload = function() {
	resetGame();
	updateStats();
};


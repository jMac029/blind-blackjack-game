// Blind Black Jack (aka the Crystal Game)
// UCI Coding Bootcamp
// Week 4 Homework Assignment

// Variables
let wins = 0;
let losses = 0;
let counter = 0;
let magicNumber = 0;

// Function to Generate a Random Number between 19-120 for the MagicNumber

var magicNumberGenerator = function() {
	magicNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	// console.log(magicNumber);
	$('#magic-number').text(magicNumber);
};


// Function to Generate a Random Number betweent 1-12 for each Cards assigned value
var cardValueRandomNumberGenerator = function() {
	for (var i = 1; i < 5; i++) {
		$('#card-'+[i]).val( Math.floor(Math.random() * (12 - 1 + 1)) + 1 );
	}
	// card1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	// card2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	// card3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	// card4Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	// console.log(card1Value, card2Value, card3Value, card4Value);

}




// On Click function for each card

$('.card').on('click', function() {
	var cardValue = this.value;
	cardValue = Number(cardValue);
	// console.log(cardValue);
	counter += cardValue;
	$('#user-number').text(counter);
	if (counter === magicNumber) {
		alertWin();
	} else if ( counter >= magicNumber ) {
		alertLoss();
	}
});

// $('#card-1').on('click', function() {
// 	counter += card2Value;
// 	$('#user-number').text(counter);
// 	if (counter === magicNumber) {
// 		alertWin();
// 	} else if ( counter >= magicNumber ) {
// 		alertLoss();
// 	}
// });

// $('#card-2').on('click', function() {
// 	counter += card2Value;
// 	$('#user-number').text(counter);
// 	if (counter === magicNumber) {
// 		alertWin();
// 	} else if ( counter >= magicNumber ) {
// 		alertLoss();
// 	}
// });

// $('#card-3').on('click', function() {
// 	counter += card3Value;
// 	$('#user-number').text(counter);
// 	if (counter === magicNumber) {
// 		alertWin();
// 	} else if ( counter >= magicNumber ) {
// 		alertLoss();
// 	}
// });

// $('#card-4').on('click', function() {
// 	counter += card4Value;
// 	$('#user-number').text(counter);
// 	if (counter === magicNumber) {
// 		alertWin();
// 	} else if ( counter >= magicNumber ) {
// 		alertLoss();
// 	}
// });

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


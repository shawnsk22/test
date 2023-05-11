// Generate a random number between 1 and 100
const number = Math.floor(Math.random() * 100) + 1;

// Get the input element and submit button from the HTML
const input = document.getElementById("guess");
const submit = document.getElementById("submit");

// Add click event listener to the submit button
submit.addEventListener("click", function() {
	// Get the value of the input element
	const guess = parseInt(input.value);

	// Check if the guess is correct, too low, or too high
	if (guess === number) {
		alert("Congratulations! You guessed the number!");
	} else if (guess < number) {
		alert("Your guess is too low. Try again.");
	} else {
		alert("Your guess is too high. Try again.");
	}
});

// Function to display result to the user
function displayResult(message) {
	// Get the display element from the HTML
	const display = document.getElementById("display");

	// Set the message as the text content of the display element
	display.textContent = message;
}

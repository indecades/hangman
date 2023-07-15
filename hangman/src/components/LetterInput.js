import React from "react";

const LetterInput = ({ handleLetter }) => {
	const handleGuess = (letter, e) => {
		e.target.disabled = true; // alphabet letters button is disabled if user clicks on it once during the game
		handleLetter(letter);
	};
	//array containing the alphabet letters
	const alphabet = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	return alphabet.map(
		(
			letter,
			index //displays the alphabet letters using a button
		) => (
			<button
				onClick={(e) => handleGuess(letter, e)}
				key={index}
				disabled={false}
			>
				{letter}
			</button>
			// button isnt disabled unless the user clicks on it and the boolean would change from false to true
		)
	);
};
export default LetterInput;

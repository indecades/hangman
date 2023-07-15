import React, { useState } from "react";
import "../css/words.css";
const Words = ({ getWord }) => {
	const [word, setWord] = useState("");
	//array contains the words which will be used to guess in the game
	const wordsArray = ["JAVASCRIPT", "REACT", "CSS"];

	const startWord = () => {
		// chooses a random word from the word array
		const guessWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
		setWord(guessWord);
		getWord(guessWord);
	};
	return (
		<div>
			{/* button starts the game */}
			<button
				className="startGame-button"
				onClick={startWord}
			>
				StartGame
			</button>
		</div>
	);
};

export default Words;

import React, { useState } from "react";
//importing css files
import "./App.css";
import "./css/app.css";
//importing components
import Head from "./components/Head";
import Rule from "./components/Rule";
import LetterInput from "./components/LetterInput";
//importing images into the js file
import Words from "./components/Words";
import state1 from "./images/state1.GIF";
import state2 from "./images/state2.GIF";
import state3 from "./images/state3.GIF";
import state4 from "./images/state4.GIF";
import state5 from "./images/state5.GIF";
import state6 from "./images/state6.GIF";
import state7 from "./images/state7.GIF";
import state8 from "./images/state8.GIF";
import state9 from "./images/state9.GIF";
import state10 from "./images/state10.gif";
import state11 from "./images/state11.GIF";
//combines imported images into array
const images = [
	state1,
	state2,
	state3,
	state4,
	state5,
	state6,
	state7,
	state8,
	state9,
	state10,
	state11,
];
function App() {
	let [word, setWord] = useState("");
	let [hiddenWord, setHiddenWord] = useState("");
	let [wrongGuesses, setWrongGuesses] = useState("");
	let [newGame, setNewGame] = useState(false);
	let [index, setIndex] = useState(0);
	let [gameState, setGameState] = useState("");

	//using useState to start a new game
	const handleNewGame = () => {
		setWord("");
		setHiddenWord("");
		setWrongGuesses("");
		setNewGame(false);
		setIndex(0);
		setGameState("");
	};

	const findWord = (items) => {
		setWord(items);
		// replaces the letters with underscores
		setHiddenWord(items.split("").fill("_").join());
		setNewGame(true);
	};

	const handleLetter = (items) => {
		//checks if the word contains the letter that the player selects
		if (word.includes(items)) {
			let guess = [];
			let newHiddenWord = hiddenWord.split("");
			//loops through word and guesses to determine if the guess and the word matches
			for (let i = 0; i < word.length; i++) {
				if (word[i] === items) {
					guess.push(items); // pushes correct guesses into an array
				} else if (newHiddenWord[i] !== "_") {
					guess.push(newHiddenWord[i]); //pushes only correct guesses into array
				} else {
					guess.push("_"); // pushes only '_' into array if guesses are wrong
				}
			}

			setHiddenWord(guess.join("")); //joins correct guesses if the letters all matched the word given to guess
			if (guess.join("") === word) {
				setGameState("Won"); //gamestate is thus set to won
			}
		} else {
			wrongGuesses += `${items}`;
			setWrongGuesses(wrongGuesses);
			setIndex(++index);
			if (wrongGuesses.length >= 11) {
				// if the wrong guesses is more than 11 and the man is hung at state11 gif
				setGameState("Lost"); // the gameState is set to lost and the user has lost the game
			}
		}
	};

	if (newGame) {
		// if new game all the components will run to create the game
		return (
			<div className="App">
				{/* head component */}
				<Head />
				<div className="split left">
					<div className="centered">
						{/* rule component */}
						<Rule />
					</div>
				</div>
				<div className="split right">
					<div className="centered">
						{/* images will changed depending on the guesses and will be looped through using the index to display the correct image */}
						<img
							src={images[index]}
							alt="images"
						/>
						{/* if the user clicks the restart button the game will restart and the user can start a new game */}
						<button
							className="restart-button"
							onClick={handleNewGame}
						>
							Restart
						</button>
						{/* hidden word will be displayed as '_' and as a heading 2 */}
						<h2>{hiddenWord}</h2>
						{/* wrong guesses will be displayed to the user as a string */}
						<h3 className="wrong-guesses-heading">
							Wrong Guesses:{wrongGuesses.toString()}
						</h3>
						{/* won or lost will be displayed to the user */}
						<h3 className="results">Results: {gameState}</h3>
						{/* letterInput container + prop being passed through */}
						<LetterInput handleLetter={handleLetter} />
					</div>
				</div>
			</div>
		);
	} else if (!newGame) {
		//if not new game
		return (
			<div>
				{/* the head and words component will be displayed  */}
				<Head />
				{/* word component + prop being passed through */}
				<Words getWord={findWord} />
			</div>
		);
	}
}

export default App;

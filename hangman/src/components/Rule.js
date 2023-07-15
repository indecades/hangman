import React from "react";
import "../css/rule.css";
const Rule = () => {
	return (
		<div>
			<div className="rules-conatiner">
				{/* heading on the page */}
				<h2 className="rules-heading">Rules:</h2>
				{/* sub heading */}
				<h3 className="rules-sub-heading">How to play</h3>
				{/* explains to the user how to play the game */}
				<p className="how-to-play">
					The player will guess a letter. If that letter is in the word then the
					system will add the letter in everywhere it would appear. If the
					letter isn't in the word then a body part will be added to the gallows
					and the letter will appear in wrong guesses (horisontal gallow,
					verticle gallow, head, body, left arm, right arm, left leg, right
					leg). The player will continue guessing letters until they can either
					solve the word or all six body parts are on the gallows.
				</p>
				{/* sub heading */}
				<h3 className="rules-sub-heading">To win</h3>
				{/* explains to the user how to win */}
				<p className="how-to-play">
					The executioner wins if the full body is hanging from the gallows. The
					guesser wins if they guess the word before the person is hung.
				</p>
			</div>
		</div>
	);
};

export default Rule;

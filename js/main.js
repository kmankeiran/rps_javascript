(()=> {
	// this is the same as print() in python
	// console.log is the same as print
	console.log('loaded!');

	//same as an array in Python
	var choices = ["Rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("#play");
	var status = document.querySelector(".winlose");

	function play_game() {
		console.log("called game function");

		//generate a random number and use that to pick a weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		console.log(computer);

		var player_choice = player.value;
		console.log(player_choice)

		if (computer.toLowerCase() == player_choice.toLowerCase()) {
			//tie
			console.log("tie");
			status.textContent = `Tie! you live to shoot another day!`
		}

		else if (player_choice.toLowerCase() == "rock") {
			if (computer.toLowerCase() == "scissors") {
				console.log("win");
				status.textContent = `You won! ${player_choice} beats ${computer}!`
			} else {
				console.log("lose");
				status.textContent = `You Lose! ${computer} beats ${player_choice}!`
			}
		}

		else if (player_choice.toLowerCase() == "paper") {
			if (computer.toLowerCase() == "rock") {
				console.log("win");
				status.textContent = `You won! ${player_choice} beats ${computer}!`
			} else {
				console.log("lose");
				`You Lose! ${computer} beats ${player_choice}!`
			}
		}

		else if (player_choice.toLowerCase() == "scissors") {
			if (computer.toLowerCase() == "paper") {
				console.log("win");
				status.textContent = `You won! ${player_choice} beats ${computer}!`
			} else {
				console.log("lose");
				`You Lose! ${computer} beats ${player_choice}!`
			}
		} 

		else {
			alert("Input a valid selection")
		}
	}

	trigger.addEventListener("click", play_game);


})();
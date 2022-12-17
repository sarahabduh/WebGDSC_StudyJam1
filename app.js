const game = () => {
	
	// fungsi untuk awal game
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissor']
		
		playerOptions.forEach(options => {
			options.addEventListener('click',function(){
				
				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText,computerChoice);
			})
		})
	}

	// fungsi untuk menentukan pemenang
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		let logo1 = document.getElementById("logo-1");
		let logo2 = document.getElementById("logo-2");

		player = player.toLowerCase();
		computer = computer.toLowerCase();
		
		if(player == 'rock'){
			logo1.src = "assets/rock.png";
			if(computer == 'paper'){
				document.body.style.background = "#DE5759";
				result.textContent = 'Computer Won';
				logo2.src = "assets/paper.png"
			}else if(computer == 'scissor'){
				document.body.style.background = "#89BB7A";
				result.textContent = 'Player Won';
				logo2.src = "assets/scissors.png"
			}
			else{
				document.body.style.background = "#F0F5F5";
				result.textContent = 'Tie';
				logo2.src = "assets/rock.png"
			}
		}
		else if(player == 'scissor'){
			logo1.src = "assets/scissors.png";
			if(computer == 'rock'){
				document.body.style.background = "#DE5759";
				result.textContent = 'Computer Won';
				logo2.src = "assets/rock.png"
			}else if(computer == 'paper'){
				document.body.style.background = "#89BB7A";
				result.textContent = 'Player Won';
				logo2.src = "assets/paper.png"
			}
			else{
				document.body.style.background = "#F0F5F5";
				result.textContent = 'Tie';
				logo2.src = "assets/scissors.png"
			}
		}
		else if(player == 'paper'){
			logo1.src = "assets/paper.png";
			if(computer == 'scissor'){
				document.body.style.background = "#DE5759";
				result.textContent = 'Computer Won';
				logo2.src = "assets/scissors.png"
			}else if(computer == 'rock'){
				document.body.style.background = "#89BB7A";
				result.textContent = 'Player Won';
				logo2.src = "assets/rock.png"
			}
			else{
				document.body.style.background = "#F0F5F5";
				result.textContent = 'Tie';
				logo2.src = "assets/paper.png"
			}
		}
	}

	playGame();
	
}

game();

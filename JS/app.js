//TO FINISH BUT WORKS A BIT


let playOfUser;
let playOfComputer;


const pokemonGame = {
	deck: [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}],
	playedCards:[],
	rounds: 5,
	scoreBoard:{},
	
	shuffle(){
		// Iterates through deck and randomizes cards
		for(i = this.deck.length -1; i > 0; i --){
			let randomizer = Math.floor(Math.random() * (i + 1));

			let tempNum = this.deck[i];

			this.deck[i] = this.deck[randomizer];

			this.deck[randomizer] = tempNum;

			console.log(this.deck[i]);

		}
		 	this.dealer(this.deck);
	},	
	dealer(shuffledDeck){
		if((shuffledDeck.length)/2 >= 3){
			for(let i = 0; i < 3; i ++){
				MJ.cards.push(shuffledDeck[i]);
				shuffledDeck.splice([i],1);
				computer.cards.push(shuffledDeck[i]);
				shuffledDeck.splice([i],1);
			}

		}


	},
	deckDecrement(){

	},
	playedCardsIncrement(){

	},
	whoWon(damage1,damage2){
		if(damage1 > damage2){
			console.log(MJ.username + " won!");
			MJ.incrementScore();

		

		}
		else if(damage2 > damage1){
			console.log(computer.username + ' won!');
			computer.incrementScore();
		}
		else{console.log('Draw');}

		this.scoreBoard[MJ.username] = MJ.score;
		this.scoreBoard[computer.username] = computer.score;
		console.log(this.scoreBoard);


	}

	

}





class Player{

	constructor(name){
		this.username = name;
		this.score = 0;
		this.cards =[];
		this.roundsWon =0;
	}
	seeHand(){
		console.log(this.cards);
		
		for(let element of this.cards){
			console.log(element);
		}

		let selection = prompt();
			
		this.playCard(selection);

	}

	playCard(pick){
		console.log(this.username + " selected " + this.cards[pick].name + ' with ' + this.cards[pick].damage + ' damage.');
		playOfUser = this.cards[pick].damage;
		this.computerPlay();
	}
	computerPlay(){
		for(i = this.cards.length -1; i > 0; i --){
			let randomizer = Math.floor(Math.random() * (i + 1));

			let tempNum = this.cards[i];

			this.cards[i] = this.cards[randomizer];

			this.cards[randomizer] = tempNum;

		}	

		console.log('Computer Picked: ' + this.cards[i].name + ' with '+ this.cards[i].damage + ' damage.');
		
		
		playOfComputer = this.cards[i].damage;


		pokemonGame.whoWon(playOfUser,playOfComputer);

		
	}

	incrementScore(){
		
			this.score += 1;
	
	}

	clearHand(){
		for(let i = 0; i < this.cards.length; i ++){
			this.cards.splice([i],1);
		}
	}
	incrementRoundWon(){
		this.roundsWon += 1;
	}


}


const MJ = new Player('The Crusher');

const computer = new Player('Computer');






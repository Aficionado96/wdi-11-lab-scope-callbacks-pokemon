const pokemonGame = {
	deck: [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}],
	playedCards:[],
	rounds: 5,
	scoreBoard:[],
	
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
				shuffledDeck[i]
			}
		}


	},
	deckDecrement(){

	},
	playedCardsIncrement(){

	},
	whoWon(){

	}
	

}


class Player{

	constructor(name){
		this.username = name;
		this.score = 0;
		this.cards =[];
		this.roundsWon =0;
	}

	playCard(pick){
		this.cards[pick];
	}

	incrementScore(win){
		if(win){
			this.score += 1;
		}
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









// const pokemonGame = {

// 	deckOfCards:[{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}],

// 	playerCards:[],

// 	computerCards:[],

// 	dealForPlayer(){
// 		if((this.deckOfCards.length/2) >= 3){
// 			for(let i = 0; i < 3; i ++){
// 				this.playerCards.push(this.deckOfCards[i]);
// 				this.deckOfCards.splice([i],1)
// 			}
// 			return this.playerCards;
// 		}
// 	},
// 	dealForComputer(){
// 		if((this.deckOfCards.length/2) >= 3){
// 			for(let i = 3; i < 6; i++){
// 				this.computerCards.push(this.deckOfCards[i]);
// 				this.deckOfCards.splice([i],1)
// 			}
// 		}
// 	},



// }





// console.log(pokemonGame.deckOfCards);
// console.log(pokemonGame.dealForPlayer());

// pokemonGame.dealForComputer();



// console.log(pokemonGame.playerCards);
// console.log(pokemonGame.computerCards);

// console.log(pokemonGame.deckOfCards);


const pokemonGame = {

	deckOfCards:[{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}],

	playerCards:[],

	computerCards:[],

	dealForPlayer(){
		if((this.deckOfCards.length/2) >= 3){
			for(let i = 0; i < 3; i ++){
				this.playerCards.push(this.deckOfCards[i]);
				this.deckOfCards.splice([i],1)
			}
			return this.playerCards;
		}
	},
	dealForComputer(){
		if((this.deckOfCards.length/2) >= 3){
			for(let i = 3; i < 6; i++){
				this.computerCards.push(this.deckOfCards[i]);
				this.deckOfCards.splice([i],1)
			}
		}
	},



}

console.log(pokemonGame.deckOfCards);
console.log(pokemonGame.dealForPlayer());

pokemonGame.dealForComputer();



console.log(pokemonGame.playerCards);
console.log(pokemonGame.computerCards);

console.log(pokemonGame.deckOfCards);


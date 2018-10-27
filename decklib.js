class Deck {
    constructor (){
        this.deck=[],
        this.deal_cards=[]
    }
    generate_deck(){
        let card = (suit, value) => {
            this.name = value + 'of' + suit
            this.suit = suit
            this.value = value

            return {name:this.name, suit:this.suit, value:this.value}
        }
        let values = ['The Fast and The Furious', '2 Fast 2 Furious','Tokyo Drift','Fast and Furious','Fast Five','Fast and Furious 6', 'Furious 7', 'The Fate of the Furious']
        let suits = ['']

        for (let s=0; s < suits.length; s++){
            for ( let v = 0; v < values.length; v++){
                this.deck.push(card(suits[s], values[v]))
            }
        }
        print_deck (){
            if (this.deck.length == 0){
                console.log('All curent Movies')
            }
            else {
                for (c= 0; c < this.deck.length; c++){
                    console.log(this.deck[e])
                }
            }
        }


    }
}

deck = new Deck()

deck.generate_deck();
deck.print_deck();
Node.decklib.js



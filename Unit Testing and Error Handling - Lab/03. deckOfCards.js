function printDeckOfCards(cards) {

    let deck = [];

    for (let card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);
        try {
            let card = playingCards(face, suit);
            deck.push(card);
        } catch (error) {
            deck = [`Invalid card: ${card}`];
        }
    }

    console.log(deck.join(' '))

    function playingCards(cardFace, cardSuit) {

        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validCardSuits = ['S', 'H', 'D', 'C'];

        if (!validCardFaces.includes(cardFace)) {
            throw new Error('Error')
        }

        if (!validCardSuits.includes(cardSuit)) {
            throw new Error('Error')
        }


        switch (cardSuit) {
            case 'S': cardSuit = '\u2660'; break;
            case 'H': cardSuit = '\u2665'; break;
            case 'D': cardSuit = '\u2666'; break;
            case 'C': cardSuit = '\u2663'; break;
        }

        return {
            cardFace,
            cardSuit,
            toString() {
                return this.cardFace + this.cardSuit
            }
        }
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
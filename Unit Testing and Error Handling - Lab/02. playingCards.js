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
console.log(playingCards('A', 'S').toString())
console.log(playingCards('10', 'H').toString())
console.log(playingCards('1', 'C').toString())
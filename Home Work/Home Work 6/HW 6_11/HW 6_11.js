const suits = ['spade', 'diamond', 'heart', 'club'];
const values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value:value};
        if (suit === 'hear' || suit === 'diamond') {
            card.color = 'red';
        }else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

const reduce = cards.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
            case 'club':
                accumulator.club.push(card);
                break;
                case 'heart':
                    accumulator.heart.push(card);
                    break;
    }
    return accumulator;
},{
    spades: [],
    diamonds: [],
    club: [],
    heart: [],
});
console.log(reduce);





























import _ from 'underscore';

/**
 * 
 * @param {Array<String>} typeCard Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specialType Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const createDeck = (typeCard, specialType ) => {
    if (!typeCard || typeCard.length === 0) throw new Error('Tipo de carta es obligatorio como un arreglo de strings');
    if (!specialType || specialType.length === 0) throw new Error('Tipo de carta especial es obligatorio como un arreglo de strings');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let type of typeCard) {
            deck.push(`${i}${type}`);
        }
    }

    for (let type of typeCard) {
        for (let especial of specialType) {
            deck.push(`${especial}${type}`);
        }
    }

    return _.shuffle(deck);
}
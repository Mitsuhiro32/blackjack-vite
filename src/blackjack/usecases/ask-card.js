/**
 * Esta función pide una carta del deck y la retorna.
 * @param {Array<String>} deck El deck de cartas
 * @returns {String} Retorna la carta pedida
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}
/**
 * Crea una carta y la añade al turno del jugador
 * @param {String} carta Ejemplo: '2H', '10D', 'AS', 'KH'
 * @returns {HTMLElement} Retorna la imagen carta creada
 */

export const crearCarta = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('card');

    return imgCarta;
}
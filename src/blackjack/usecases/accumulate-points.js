import { valorCarta } from "./";
/**
 * Acumula los puntos del jugador según la carta recibida
 * @param {String} carta Ejemplo: '2H', '10D', 'AS', 'KH'
 * @param {HTMLElement} puntosHTML Elemento HTML donde se mostrará el puntaje
 * @param {Array<Number>} puntosJugadores Arreglo con los puntos de los jugadores
 * @param {Number} turno Índice del jugador
 * @returns {Number} puntos acumulados del jugador
 */

export const acumularPuntos = (carta, puntosHTML, puntosJugadores, turno) => {
    if (!carta) throw new Error('La carta es necesaria');
    if (!puntosHTML) throw new Error('Los puntos son necesarios');
    if (typeof turno !== 'number') throw new Error('El turno es necesario');

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}
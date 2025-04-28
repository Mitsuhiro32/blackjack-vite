import { pedirCarta, acumularPuntos, crearCarta, determinarGanador} from "./";
/**
 * Turno de la computadora
 * @param {Number} puntosMin puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML donde se mostrará el puntaje
 * @param {Array<Number>} puntosJugadores Arreglo con los puntos de los jugadores
 * @param {HTMLElement} playersCards Elemento HTML donde se añadirán las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMin, puntosHTML, puntosJugadores, playersCards, deck) => {
    if (!puntosMin) throw new Error('Puntos mínimos es necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosHTML, puntosJugadores, puntosJugadores.length - 1);
        const imgCarta = crearCarta(carta);
        playersCards[puntosJugadores.length - 1].append(imgCarta);
    } while ((puntosComputadora < puntosMin) && (puntosMin <= 21));

    determinarGanador(puntosJugadores);
}
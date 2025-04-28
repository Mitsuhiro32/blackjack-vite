/**
 * Determina el ganador de la partida de Blackjack.
 * @param {Array<Number>} puntosJugadores Arreglo con los puntos de los jugadores
 */

export const determinarGanador = (puntosJugadores) => {
    const [puntosJugador, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosJugador) {
            alert('Empate!');
        } else if (puntosJugador > 21) {
            alert('Perdiste!');
        } else if (puntosComputadora > 21) {
            alert('Ganaste!');
        } else {
            alert('Perdiste!');
        }
    }, 100);
}
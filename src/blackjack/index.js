import _ from 'underscore';
import { createDeck, pedirCarta, acumularPuntos, turnoComputadora, crearCarta} from './usecases/index.js';

// * Patrón Módulo
const miModulo = (() => {
    'use strict'

    /*
    * C = Clubs (Tréboles)
    * D = Diamonds (Diamantes)
    * H = Hearts (Corazones)
    * S = Spades (Picas)
    */
    let deck = [];
    const types = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    // Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnIniciar = document.querySelector('#btnIniciar');

    const playersCards = document.querySelectorAll('.divCards'),
        puntosHTML = document.querySelectorAll('small');

    let puntosJugadores = [];

    const iniciarJuego = (numJugadores = 2) => {
        deck = createDeck(types, especiales);

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerHTML = 0);
        playersCards.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, puntosHTML, puntosJugadores, 0);

        let imgCarta = crearCarta(carta);
        playersCards[0].append(imgCarta); // Añadir carta al jugador

        if (puntosJugador > 21) {
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML, puntosJugadores, playersCards, deck);
        } else if (puntosJugador === 21) {
            console.warn('21, Genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML, puntosJugadores, playersCards, deck);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], puntosHTML, puntosJugadores, playersCards, deck);
    });

    btnIniciar.addEventListener('click', () => {
        iniciarJuego();
    });

    return {
        nuevoJuego: iniciarJuego
    }
})()

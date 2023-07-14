import React, { useEffect } from 'react';
import styles from './Pad.module.css';
import audio1 from '../../assets/Heater-1.mp3';
import audio2 from '../../assets/Heater-2.mp3';
import audio3 from '../../assets/Heater-3.mp3';
import audio4 from '../../assets/Heater-4_1.mp3';
import audio5 from '../../assets/Heater-6.mp3';
import audio6 from '../../assets/Dsc_Oh.mp3';
import audio7 from '../../assets/Kick_n_Hat.mp3';
import audio8 from '../../assets/RP4_KICK_1.mp3';
import audio9 from '../../assets/Cev_H2.mp3';




const Pad = () => {
  /*


  1. Crear una función que se ejecute al hacer click en un botón se reproduzca el sonido asociado a ese botón.
  Para eso tengo que recoger el id del boton que se ha pulsado y reproducir el sonido asociado a ese id.
  El sonido está asociado a un audio con la clase clip y el id del boton es el mismo que el id del audio.

  2. Funcion que controle el volumen del audio. El volumen se controla con un input de tipo range.

  3. Cuando se presiona una tecla del teclado se reproduce el sonido asociado a esa tecla.
  */

  const botones = [
    {
      id: 'Heater-1',
      key: 'Q',
      src: audio1
    },
    {
      id: 'Heater-2',
      key: 'W',
      src: audio2
    },
    {
      id: 'Heater-3',
      key: 'E',
      src: audio3
    },
    {
      id: 'Heater-4',
      key: 'A',
      src: audio4
    },
    {
      id: 'Clap',
      key: 'S',
      src: audio5
    },
    {
      id: 'Open-HH',
      key: 'D',
      src: audio6
    },
    {
      id: "Kick-n'-Hat",
      key: 'Z',
      src: audio7
    },
    {
      id: 'Kick',
      key: 'X',
      src: audio8
    },
    {
      id: 'Closed-HH',
      key: 'C',
      src: audio9 
    }
  ]

  const handleKeyDown = (event) => {
    const keyPressed = event.key.toUpperCase();
    const boton = botones.find((boton) => boton.key === keyPressed);
    
    if (boton) {
      let audio = document.getElementById(boton.key);
      audio.play();
      let display = document.getElementById('display');
      display.innerHTML = boton.id;
    }

  }
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, [])

  const handleClick = (event) => {

    let audioId = botones.find((boton) => boton.id === event.target.id)

    
    let audio = document.getElementById(audioId.key);
    audio.play();

    let display = document.getElementById('display');
    display.innerHTML = audioId.id;
  }

  return (
    <div className={styles.midi} id='drum-machine'>
      <div className={styles.botonera}>
        {botones.map((boton) => (
          <div 
            id={boton.id} 
            className={`drum-pad ${styles.cajaBoton}`}
            onClick={handleClick}
            key = {boton.id}            
          >
            <p>{boton.key}</p>
            <audio className='clip' id={boton.key} src={boton.src}></audio>
          </div>
        ))}
      </div>
      <div className={styles.controles}>
        <div className={styles.displayBox}>
          <div className={styles.display} id='display'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pad;

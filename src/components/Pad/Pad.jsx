import React, { useEffect } from 'react';
import styles from './Pad.module.css';

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
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      id: 'Heater-2',
      key: 'W',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      id: 'Heater-3',
      key: 'E',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      id: 'Heater-4',
      key: 'A',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      id: 'Clap',
      key: 'S',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      id: 'Open-HH',
      key: 'D',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      id: "Kick-n'-Hat",
      key: 'Z',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      id: 'Kick',
      key: 'X',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      id: 'Closed-HH',
      key: 'C',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
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

    let audioId = botones.find((boton) => boton.key === event.target.id)

    
    let audio = document.getElementById(audioId[0].key);
    audio.play();

    let display = document.getElementById('display');
    display.innerHTML = audioId[0].id;
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

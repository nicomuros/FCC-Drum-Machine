import React, { useEffect, useRef } from 'react';
import styles from './Pad.module.css';
import { datos } from '../../data/data.js';

const Pad = () => {
  const audioRefs = useRef({});

  const handleKeyDown = (event) => {
    const keyPressed = event.key.toUpperCase();
    const boton = datos.find((boton) => boton.key === keyPressed);

    if (boton) {
      playAudioById(boton);
      refreshDisplay(boton);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClick = (event) => {
    const audioId = getIdFromEvent(event);
    playAudioById(audioId);
    refreshDisplay(audioId);
  };

  const getIdFromEvent = (event) => {
    return datos.find((boton) => boton.id === event.target.id);
  };

  const playAudioById = (audioId) => {
    const audio = audioRefs.current[audioId.key];

    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const refreshDisplay = (audioId) => {
    const display = document.getElementById('display');
    display.innerHTML = audioId.id;
  };

  return (
    <div className={styles.midi} id='drum-machine'>
      <div className={styles.botonera}>
        {datos.map((boton) => (
          <div
            id={boton.id}
            className={`drum-pad ${styles.cajaBoton}`}
            onClick={handleClick}
            key={boton.id}
          >
            <p>{boton.key}</p>
            <audio
              className='clip'
              id={boton.key}
              src={boton.src}
              ref={(audio) => (audioRefs.current[boton.key] = audio)}
            ></audio>
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

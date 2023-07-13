import React from 'react';
import styles from './Pad.module.css';

const pad = () => {
  return (
    <div className={styles.midi} id='drum-machine'>
      <div className={styles.botonera}>
        <div id='Heater-1' className={`drum-pad ${styles.cajaBoton}`}>
          <p>Q</p>
          <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        </div>
        <div id='Heater-2' className={`drum-pad ${styles.cajaBoton}`}>
          <p>W</p>
          <audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        </div>
        <div id='Heater-3' className={`drum-pad ${styles.cajaBoton}`}>
          <p>E</p>
          <audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        </div>
        <div id='Heater-4' className={`drum-pad ${styles.cajaBoton}`}>
          <p>A</p>
          <audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        </div>
        <div id='Clap' className={`drum-pad ${styles.cajaBoton}`}>
          <p>S</p>
          <audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        </div>
        <div id='Open-HH' className={`drum-pad ${styles.cajaBoton}`}>
          <p>D</p>
          <audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        </div>
        <div id="Kick-n'-Hat" className={`drum-pad ${styles.cajaBoton}`}>
          <p>Z</p>
          <audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        </div>
        <div id='Kick' className={`drum-pad ${styles.cajaBoton}`}>
          <p>X</p>
          <audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        </div>
        <div id='Closed-HH' className={`drum-pad ${styles.cajaBoton}`}>
          <p>C</p>
          <audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
        </div>
      </div>
      <div className={styles.controles}>
        <div className={styles.displayBox}>
          <div className={styles.display} id='display'>
            Texto de prueba
          </div>
        </div>
        <div className={styles.volumeControl}>
          <p>Volumen</p>
          <input
            type='range'
            min='0'
            max='100'
            className={styles.slider}
            id='volumen'
          ></input>
        </div>
      </div>
    </div>
  );
};

export default pad;

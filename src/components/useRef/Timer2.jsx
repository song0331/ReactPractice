import { useEffect, useRef } from "react";
import { useState } from "react"
import styles from './Timer2.module.css';

export default function Test2() {

  const [nextTime, setNextTime] = useState(0);

  const timer = useRef(0);
  let now = Date.now();

  const handleTimerPlay = () => {
    console.log('play')

    timer.current = setInterval(() => {
      setNextTime((Date.now() - now) / 100)
    }, 10);
  }

  const handleTimerPause = () => {
    console.log('pause')
    clearInterval(timer.current);
  }

  const handleTimerStop = () => {
    console.log('stop')
    setNextTime(0)
    timer.current = null
  }


  return (
    <>
      <div>
        <div className={styles.timer}>{nextTime}</div>
        <div>
          <button type="button" onClick={handleTimerPlay} className={styles.btn} >시작</button>
          <button type="button" onClick={handleTimerPause} className={styles.btn} >일시정지</button>
          <button type="button" onClick={handleTimerStop} className={styles.btn} >멈춤</button>
        </div>
      </div>
    </>
  );
}
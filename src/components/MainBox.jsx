import { useRef } from 'react';
import Box from './Box';
import style from './MainBox.module.css'

const MainBox = () => {

  const boxRef = useRef(null);
  const handleChange = () => {
    const w = boxRef.current.style.width;
    if (w > '400px') boxRef.current.style.width = '400px';
    else boxRef.current.style.width = '700px';
  }

  return (
    <div ref={boxRef} className={style.container} >
      <button onClick={handleChange} className={style.btn}>작아져라</button>
      mainBox
      <Box />
    </div>
  );
};

export default MainBox;
import { useState } from 'react'
import classes from './Accordion.module.css'

// 부모
export default function Accordion() {

  const [openIndex, setOpenIndex] = useState(0);
  const handleShow = (idx) => {
    setOpenIndex(idx);
  }

  return (
    <div>
      <h2>상태 끌어올리기</h2>
      <div className={classes.container}>
        <Btn handleShow={handleShow} idx={0} openIndex={openIndex === 0} />
        <Btn handleShow={handleShow} idx={1} openIndex={openIndex === 1} />
      </div>
    </div>
  )
}

// 자식
function Btn({ handleShow, idx, openIndex = false }) {
  return (
    <div>
      <button className={classes.btn} type='button' onClick={() => handleShow(idx)}>
        {openIndex ? '닫음' : '열림'}
      </button>
      {openIndex ? <p>아코디언 {idx}</p> : null}
    </div>
  )
}
import classes from './Tab.module.css';
import data from './../data/newjeans.json';
import { useState } from 'react';


export default function Tab() {

  const [open, setOpen] = useState(0);
  const handleOpen = (idx) => {
    setOpen(idx)
  }

  return (
    <>
      <div className={classes.container} role='group'>
        {
          data.map((item, index) => {
            return (
              <Button key={item.id} item={item} handleOpen={handleOpen} index={index} />
            )
          })
        }
      </div>
      <figure>
        <img src={data[open].imgURL} alt={data[open].name} />
        <figcaption className={classes.sr_only}>{data[open].name}</figcaption>
      </figure>
    </>
  )
}

function Button({ item, handleOpen, index }) {
  return (
    <button className={classes.btn} onClick={() => handleOpen(index)}>{item.name}</button>
  )
}
/* eslint-disable */
import { useState } from 'react';
import data from './../data/newjeans.json'
import classes from './Newjeans.module.css'

export default function Newjeans() {

  const [member, setMember] = useState(data);
  const deleteMember = memberId => setMember(member.filter(item => item.id !== memberId))
  // const deleteMember = memberId => setMember(member => member.filter(mem => mem.id !== memberId))

  const addMember = () => {
    const newMember = {
      ...data[0],
      id: crypto.randomUUID(),
    }
    setMember([...member, { ...newMember }])
  }

  const like = (memberId) => {
    console.log(11)

    member.map((item) => {
      if (item.id === memberId) {
        item.like + 1;
      }
    })
  }

  return (
    <section>
      <button className={classes.addBtn} onClick={addMember} >+ 추가</button>
      {
        member.map((item) => {
          return (
            <figure key={item.id}>
              <img src={item.imgURL} alt={`뉴진스 ${item.name}`} />
              <h4>{item.name}</h4>
              <p>생일: <span>{item.birth}</span></p>
              <p>MBTI: <span>{item.MBTI}</span></p>
              <div className={classes.btn_wrapper} role='none'>
                <button onClick={() => like(item.id)} type='button' className={classes.btn}>👍좋아요 {item.like}</button>
                <button className={classes.deleteBtn} onClick={() => deleteMember(item.id)} >삭제</button>
              </div>
              <figcaption className='sr_only'>{`뉴진스 ${item.name}`}</figcaption>
            </figure>
          )
        })
      }
    </section>
  )
}
import styles from './ContextEx.module.css'
import { useContext, useState } from 'react'
import { UserContext } from './UserContext';

export default function ContextEx() {
  return (
    <>
      <Page />
    </>
  )
}

function Page() {
  return (
    <>
      <UserContext.Provider value='하니'>
        <Best />
        <Women />
        <Men />
        <Kid />
      </UserContext.Provider>
    </>
  )
}


function Best() {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <div className={styles.best}>
      <h2>Best 페이지</h2>
      <div>회원정보: {data}</div>
    </div>
  )
}

function Women() {
  const data = useContext(UserContext);
  return (
    <div className={styles.women}>
      <h2>Women 페이지</h2>
      <div>회원정보: {data}</div>
    </div>
  )
}

function Men() {
  const data = useContext(UserContext);
  return (
    <div className={styles.men}>
      <h2>Men 페이지</h2>
      <div>회원정보: {data}</div>
    </div>
  )
}

function Kid() {
  const data = useContext(UserContext);
  return (
    <div className={styles.kid}>
      <h2>Kid 페이지</h2>
      <div>회원정보: {data}</div>
    </div>
  )
}
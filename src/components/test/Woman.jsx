import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Woman() {
  return (
    <>
      <div>Woman</div>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none' }}>
        <li>
          <Link to='/woman/outer'>outer</Link>
        </li>
        <li>
          <Link to='/woman/pants'>pants</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default Woman
import React from 'react'
import { Link, Outlet, useLocation, useOutletContext } from 'react-router-dom'

const Man = () => {
  const location = useLocation();
  // console.log(location.state);
  const PBdata = useOutletContext()
  // console.log(PBdata)
  return (
    <>
      <div>Man</div>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none' }}>
        <li>
          <Link to='/man/outer'>outer</Link>
        </li>
        <li>
          <Link to='/man/pants'>pants</Link>
        </li>
      </ul>
      <Outlet />
      {
        PBdata.map((item, index) => {
          return (
            <p key={index} style={{ fontSize: '10px' }}>{item.product_name}</p>
          )
        })
      }
    </>
  )
}

export default Man
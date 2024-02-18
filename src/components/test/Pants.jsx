import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Pants = () => {

  const params = useParams();
  const { pathname } = useLocation();

  // console.log(params)
  // console.log(Object.keys(params).length)
  // console.log(pathname)


  return (
    <div>Pants</div>
  )
}

export default Pants
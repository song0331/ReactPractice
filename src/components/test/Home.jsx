import React, { useEffect, useState } from 'react'
import PocketBase from 'pocketbase'
import { Link, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { FaApple, FaAndroid } from "react-icons/fa6";

const Home = () => {

  const [data, setData] = useState(10);
  const navigate = useNavigate()

  // useEffect(() => {
  // }, [])

  const PBdata = useLoaderData();
  // console.log(PBdata)
  // const PBdata = 10

  return (
    <>
      <div>Home<FaApple /> <FaAndroid /></div>
      <button onClick={() => {
        navigate('/man/outer', { state: data });
      }}>이동</button>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none' }}>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/man'>man</Link>
        </li>
        <li>
          <Link to='/woman'>woman</Link>
        </li>
        <li>
          <Link to='/test'>test</Link>
        </li>
      </ul>
      <Outlet context={PBdata} />
    </>
  )
}

export default Home

export async function loader() {
  const url = 'https://lifeishard.pockethost.io/'
  const client = new PocketBase(url);

  const records = await client.collection('product').getFullList();
  // console.log(records)

  return records
  // return 'DB에서 데이터 가져옴'
}
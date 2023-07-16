import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

  const location = useLocation();
  console.log(location)
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

  if(!isMenuOpen)
    return null;

  return (
    <div className="z-25 top-0 h-screen w-[200px] text-lg bg-white text-black p-5 shadow-lg">
      <ul>
          <li className={'p-2' + (location.search === '' ? ' bg-black text-white rounded-md' : '')}><Link to="/">Home</Link> </li>
          <Link to={"search_query?v="+"Shorts"}><li className={'p-2' + (location.search === '?v=Shorts' ? ' bg-black text-white rounded-md' : '')}>Shorts</li></Link>
          <Link to={"search_query?v="+"Videos"}><li className={'p-2' + (location.search === '?v=Videos' ? ' bg-black text-white rounded-md' : '')}>Videos</li></Link>
          <Link to={"search_query?v="+"Live"}><li className={'p-2' + (location.search === '?v=Live' ? ' bg-black text-white rounded-md' : '')}>Live</li></Link>
        </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
          <Link to={"search_query?v="+"Music"}><li className={'p-2' + (location.search === '?v=Music' ? ' bg-black text-white rounded-md' : '')}>Music</li></Link>
          <Link to={"search_query?v="+"Sports"}><li className={'p-2' + (location.search === '?v=Sports' ? ' bg-black text-white rounded-md' : '')}>Sports</li></Link>
          <Link to={"search_query?v="+"Gaming"}><li className={'p-2' + (location.search === '?v=Gaming' ? ' bg-black text-white rounded-md' : '')}>Gaming</li></Link>
          <Link to={"search_query?v="+"Movies"}><li className={'p-2' + (location.search === '?v=Movies' ? ' bg-black text-white rounded-md' : '')}>Movies</li></Link>
        </ul>      
    </div>
  )
}

export default Sidebar
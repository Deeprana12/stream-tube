import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import SearchBar from './SearchBar';
import useSearch from '../utils/customHooks/useSearch';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {

  const dispatch = useDispatch();

  const { searchTerm, handleSearch, suggestions } = useSearch();      

  const toggleMenuHandler = () =>{    
    dispatch(toggleMenu())
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex lg:flex-row flex-wrap px-5 py-4 bg-white text-black z-10'>
          <div className='flex py-1 cursor-pointer w-[10%]'>
            <img className='h-6' alt="hamburger_menu" onClick={()=>toggleMenuHandler()}
            src="https://static.vecteezy.com/system/resources/thumbnails/021/190/402/small_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
            <Link to="/"><img className="h-5 object-cover mx-2 w-28" alt="logo"
            src="https://www.streamlike.eu/wp-content/uploads/2023/02/strealike-logo-streamtube.svg" /></Link>
          </div>
          <div className='cursor-pointer w-[85%]'>
              <SearchBar props={[searchTerm, handleSearch, suggestions]}/>            
          </div>
          <div className='py-1 cursor-pointer w-[5%]'>
              <img className="h-6" alt="user_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJzvwGX_2AoP6sVrqOl4h3CHNrLOGj6ExpjvxfYZnILimKkCckX6mBsa-cfFlRt47Mrs" />
          </div>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Header
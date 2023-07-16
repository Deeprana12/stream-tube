import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {defaultOpenMenu} from '../utils/appSlice'
import Header from './Header'

const Body = () => {  

  const dispatch = useDispatch();  

  useEffect(() => {
      dispatch(defaultOpenMenu())
  }, [])
  

  return (
    <div className='flex flex-col'>
      <div className='fixed justify-center w-full z-30'>
        <Header/>
      </div>              
      <div className='mt-16 bg-white'>
        <Outlet />      
      </div>                    
    </div>
  )
}

export default Body
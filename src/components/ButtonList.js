import React from 'react'
import { Link } from 'react-router-dom'

const ButtonList = () => {

  const suggestions = [
    "All", "Thrillers", "Music", "Mixes", "Sitcoms", "Watched", "New"
  ]

  return (
    <div className='flex justify-start ml-14 mt-2 flex-wrap'>
        {
          suggestions.map((suggestion) => {
            return <Link to={"search_query?v="+suggestion}><button className='border border-black px-2 py-1 mx-2 rounded-lg hover:text-white hover:bg-black' type='button' key={suggestion}>{suggestion}</button></Link>
          })
        }
    </div>
  )
}

export default ButtonList
import { useState, useMemo, useEffect } from 'react';
import {YOUTUBE_SEARCH_API} from '../constants'
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../searchSlice';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [suggestions, setSuggestions] = useState([]); 

  const dispatch = useDispatch();
  
  const getSearchSuggestion = async () =>{        
    const data = await fetch(YOUTUBE_SEARCH_API + searchTerm) ;    
    const json = await data.json();
    setSuggestions(json[1])
    dispatch(
      cacheResults({[searchTerm]:json[1]})
    )
  }
  
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {    
      searchTerm && searchCache[searchTerm] ? setSuggestions(searchCache[searchTerm]) :getSearchSuggestion();
    }, 200);

    return () =>{
      clearTimeout(timer)
    }
  }, [searchTerm]);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };
    
  return {    
    searchTerm,
    handleSearch,
    suggestions    
  };
};

export default useSearch;

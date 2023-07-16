import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const SearchBar = ({ props }) => {
  const [searchTerm, handleSearch, suggestions] = props;
  const [showSuggestions, setShowSuggestions] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  const searchBarRef = useRef(null);
  const suggestionsRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target) &&
      (!suggestionsRef.current || !suggestionsRef.current.contains(event.target))
    ) {
      setShowSuggestions(false);
    }
  };

  const handleQuery = (e) => {
    e.preventDefault()
    if(location.pathname === '/seach_query'){
      navigate(`/search_query?v=${searchTerm}`, {replace: true})
    }else{
      navigate(`/search_query?v=${searchTerm}`)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);
 

  return (
    <div ref={searchBarRef} className='w-full'>
      <form onSubmit={handleQuery} className='w-full flex flex-row flex-wrap justify-center'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => setShowSuggestions(true)}        
        className="border w-[36%] border-gray-200 rounded-l-full p-1"
      />
      <button className="border border-gray-200 rounded-r-full px-5 py-1 bg-gray-100">🔍</button>
      </form>      
      {searchTerm && showSuggestions && (
        <div ref={suggestionsRef} className='top-14 fixed bg-white w-[30%] lg:left-[36%] left-[33%] shadow-lg rounded-md'>
          <ul className='m-1 py-2 shadow-sm border-gray-10 overflow-y-auto'>
            {suggestions.map((suggestion) => (
              <Link to={"search_query?v="+suggestion}><li
                key={suggestion}
                className='py-3 px-3 shadow-2 hover:bg-gray-100'                
              >
                🔍 {suggestion}
              </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      </div>
  );
};

export default SearchBar;

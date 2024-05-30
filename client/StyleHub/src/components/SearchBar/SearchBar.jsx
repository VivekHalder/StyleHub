import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useFilterContext } from '../../context/FilterProvider';

function Display() {

  const {
    filterDispatch
  } = useFilterContext();

  const [ searchQuery, setSearchQuery ] = useState('');

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearch = () => {
    if( searchQuery === "" ) return ;
    else {
      filterDispatch({
        type: "FILTER_BY_SEARCH",
        payload: searchQuery
      })
    }
  }

  return (
    <div className='h-1/6 w-full flex justify-center'>
      <div className='w-4/5 m-4 flex justify-center'>
        <select name="categories" id="categories" style={{outline: 'none'}} className='text-xl bg-gray-100 px-1 rounded-sm'>
          <option value="All categories">All Categories</option>
          <option value="Tops">Tops</option>
          <option value="Bottoms">Bottoms</option>
          <option value="Dresses">Dresses</option>
          <option value="Outerwear">Outerwear</option>
          <option value="Activewear">Activewear</option>
        </select>
        <div className='relative flex flex-grow'>
          <input 
            className='w-full py-2 text-xl px-2'
            type="input"
            placeholder='Search StyleHub' 
            value={ searchQuery }
            onChange={handleQueryChange}
            style={{outline: '1px solid #ccc'}}
          />
          <button 
            className='rounded-sm absolute right-0 top-0 h-full flex items-center px-4 text-white bg-black'
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Display;

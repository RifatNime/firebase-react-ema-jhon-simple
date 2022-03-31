import React from 'react';

const Search = (props) => {
    return (
        <div>
            <input onChange={props.handleChange}  type="text" class="px-2 py-1 h-8 border border-solid  border-pink-600 rounded-full text-sm leading-snug text-pink-700 bg-pink-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-pink-300" placeholder="Search pink" />
            <button onClick={() => props.handleSearch(props.input)} className="search-btn ">Search</button>
        </div>
    );
};

export default Search;
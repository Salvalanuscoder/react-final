import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        console.log("Search term:", event.target.value);
    };

    const handleSearchClick = async () => {
        if (!searchTerm) return;

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
            if (!response.ok) {
                console.error('Error fetching Pokemon data');
                return;
            }
            const pokemonData = await response.json();
            console.log("Pokemon data:", pokemonData);
            onSearch(pokemonData);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Buscar por nombre o número"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button onClick={handleSearchClick}>Buscar</button>
        </div>
    );
};

export default SearchBar;

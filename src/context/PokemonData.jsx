import { createContext, useState } from 'react';

export const PokemonDataContext = createContext(undefined)

export const PokemonDataProvider = ({ children }) => {

    const [pokemonData, setPokemonData] = useState([]);

    return <PokemonDataContext.Provider value={{ pokemonData, setPokemonData }}>
        {children}
    </PokemonDataContext.Provider>;
}
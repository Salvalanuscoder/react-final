import { createContext, useState } from 'react';

export const PokemonIdContext = createContext(undefined);

export const PokemonIdProvider = ({ children }) => {

    const [pokemonId, setPokemonId] = useState(1);

    return <PokemonIdContext.Provider value={{ pokemonId, setPokemonId }}>
        {children}
    </PokemonIdContext.Provider>;
}
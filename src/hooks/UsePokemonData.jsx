import { useContext } from 'react';
import { PokemonDataContext } from '../context/PokemonId';

const UsePokemonData = () => {
    return useContext(PokemonDataContext)
        
}

export default UsePokemon;
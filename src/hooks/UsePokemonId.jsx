import { useContext } from 'react';
import { PokemonIdContext } from '../context/PokemonId';

const UsePokemonId = () => {
    return useContext(PokemonIdContext)
        
}

export default UsePokemonId;
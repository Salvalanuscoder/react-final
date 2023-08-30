import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const PokemonCard = ({ pokemon }) => (
  <div className="home-pokemon-card">
    <img src={pokemon.image} alt={pokemon.name} />
    <p>{pokemon.name}</p>

    <div className="button-container">
    <button className="Add-Cart-Btn" onClick={() => handleAddToCart(pokemon.name)}>Add Cart</button>
    {/* <button className="btn-viewstatus" onClick={() => handleViewStats(pokemon.name)}>View Status</button> */}
 
    <Link to="/pokedex">
      <button className="Btn-Stats">Stats</button>
    </Link>
</div>
  </div>
);

export const Home = () => {
  const [pagina, setPagina] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);

  const cargarPokemones = async () => {
    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${(pagina - 1) * 9}`);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        const pokemonList = datos.results.map((pokemon, index) => ({
          id: (pagina - 1) * 9 + index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(pagina - 1) * 9 + index + 1}.png`
        }));
        setPokemonData(pokemonList);
      } else {
        console.log('Hubo un error y no sabemos qué pasó.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarPokemones();
  }, [pagina]);

  const handlePaginaAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const handlePaginaSiguiente = () => {
    if (pagina < 17) { 
      setPagina(pagina + 1);
    }
  };

  return (
    <>
      <div className='home-pokemon-contenedor'>

   
      <div className="home-pokemon-grid">
        {pokemonData.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className="paginacion">
        <button id="btnAnterior" onClick={handlePaginaAnterior}>Anterior</button>
        <button id="btnSiguiente" onClick={handlePaginaSiguiente}>Siguiente</button>
      </div>
      </div>
    </>
  );
};
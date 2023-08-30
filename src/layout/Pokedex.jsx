
import { useState } from "react";
// import { pokeCard } from "./pokeCard"; 
import FetchData from "../utils/FetchData";
import getColorByType from "../utils/GetColorByType";
import SearchBar from '../components/Search/SearchBar'; // Ajusta la ruta según tu estructura
import { useParams } from 'react-router-dom';


const Pokedex = () => {
    const [id, setId] = useState(1);
    const [loading, setLoading] = useState(false);
    const [searchId, setSearchId] = useState(1);

    const handleNext = () => id < 151 && setId(id + 1);
    const handlePrev = () => id > 1 && setId(id - 1);
    // const handleSearch = (e) => {
    //     const value = parseInt(e.target.value);
    //     if (typeof value !== "number" || value < 1 || value > 151) return setSearchId(id);
    //     setSearchId(() => value);
    // }

    // const handleSearch = (searchValue) => {
    //     const parsedSearchValue = parseInt(searchValue);
    //     if (!isNaN(parsedSearchValue)) {
    //         setId(parsedSearchValue);
    //     } else {
    //         // Implementa la búsqueda por nombre aquí si el valor no es un número válido
    //     }
    // };
    const handleSearch = async (searchValue) => {
        if (!isNaN(searchValue)) {
            setSearchId(parseInt(searchValue));
        } else {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`);
                const data = await response.json();
                setId(data.id);
                // Aquí también puedes actualizar otros datos relacionados con el Pokémon, como el nombre, las estadísticas, etc.
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        }
    };
    return (
        <div className="container my-5">
            <h2>Pokedex</h2>
            {/* <SearchBar onSearch={(searchId) => setSearchId(searchId)} /> */}
            {/* <input type="number" onChange={(e) => handleSearch(e)} /> */}
            {/* <button onClick={() => setId(() => searchId)}>Search</button> */}
           
            <FetchData url={`https://pokeapi.co/api/v2/pokemon/${id}`} arr={[id]} setLoading={setLoading}>
                {(pokemon) => (
                    <>
                        {
                            pokemon && pokemon.sprites &&
                            <>
                                {
                                    loading ?
                                        <div>Loading</div>
                                        :
                                        <div className="pokedex-card">
                                             <div className="idPokemon"> Id: {id}</div>
                                            <h4 className="namePokemon">{pokemon.name}</h4>
                                            <div className="pokedex-card-types">
                                                {pokemon.types.map((t, i) => {
                                                    const colorType = getColorByType(t.type.name)
                                                    return <div className="pokedex-card-type" style={{ "backgroundColor": colorType }} key={`${t.type.name}-${i}`}>{t.type.name}</div>
                                                })}
                                            </div>
                                            <div className="pokedex-card-img">
                                                <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0"  fill="none"></rect><g transform="translate(481.4876463233601 283.19279657176486)"><path d="M153.2 -189.6C177.8 -161.9 162.8 -94 158.9 -39.3C155.1 15.3 162.4 56.7 153.6 104.5C144.9 152.4 120 206.8 77.9 228.4C35.8 250 -23.5 238.7 -64.9 209.9C-106.3 181.1 -129.8 134.8 -161.8 88.8C-193.8 42.9 -234.3 -2.8 -229.6 -42.4C-225 -82.1 -175.1 -115.7 -129.4 -139.7C-83.6 -163.6 -41.8 -177.8 11.2 -191.2C64.3 -204.6 128.6 -217.2 153.2 -189.6" fill={`${getColorByType(pokemon.types[0].type.name)}5e`}></path></g></svg>
                                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                                <div>HP: {pokemon.stats[0].base_stat}</div>
                                                <div>Atk: {pokemon.stats[1].base_stat}</div>
                                                <div>Def: {pokemon.stats[2].base_stat}</div>
                                            </div>
                                            <div className="pokedex-card-btn">
                                                <button onClick={() => handlePrev()} className="btn-anterior">Anterior</button>
                                                <button onClick={() => handleNext()} className="btn-siguiente">Siguiente</button>
                                            </div>
                                            <>
                                                <button className="Add-Cart-Btn">Agregar al carrito</button>
                                            </>
                                            
                                        </div>

                                }
                            </>
                        }
                    </>
                )}
            </FetchData>
        </div>
    );
};

export default Pokedex;

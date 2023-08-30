// import React from 'react';
// import './Header.css'
// import { Link } from 'react-router-dom'
// import SearchBar from '../Search/SearchBar.jsx';

// export const Header = () => {

//     return (
//         <header className="Header">
//             <div className='header-container'>
//                 {/* <img src={reactIcon} alt="react Icon" /> */}
//                 <img className='logo' src="/logo.png" alt="Logo" />
//                 <img className='VerDetallesPokemon' src="/pokemon.png" alt="imagen Pokemon" />
// {/* <img src={reactLogo} alt="logo" /> */}
//                     <nav className="navbar">
//                         <Link className="navbar-link" to="/">inicio</Link>
//                         <Link className="navbar-link" to="/pokedex">pokedex</Link>

//                     </nav>
//                     <SearchBar />
//             </div>
//         </header>
//     )
// }

// import React from 'react';
// import './Header.css'
// import { Link, useLocation } from 'react-router-dom'; // Importa useLocation

// import SearchBar from '../Search/SearchBar.jsx';

// export const Header = () => {
//     const location = useLocation(); // Obtiene la ruta actual

//     // Verifica si la ruta actual es "/pokedex"
//     const isPokedexPage = location.pathname === "/pokedex";

//     return (
//         <header className="Header">
//             <div className='header-container'>
//                 <img className='logo' src="/logo.png" alt="Logo" />
//                 <img className='VerDetallesPokemon' src="/pokemon.png" alt="imagen Pokemon" />
//                 <nav className="navbar">
//                     <Link className="navbar-link" to="/">inicio</Link>
//                     <Link className="navbar-link" to="/pokedex">pokedex</Link>
//                 </nav>
//                 {isPokedexPage && <SearchBar />} {/* Renderiza SearchBar solo en la página de Pokedex */}
//             </div>
//         </header>
//     );
// }


import React from 'react';
// import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../Search/SearchBar.jsx';

export const Header = ({ onSearch }) => {
    const location = useLocation();

    const isPokedexPage = location.pathname === "/pokedex";

    return (
        <header className="Header">
            <div className='header-container'>
                <img className='logo' src="/logo.png" alt="Logo" />
                <img className='VerDetallesPokemon' src="/pokemon.png" alt="imagen Pokemon" />
                <nav className="navbar">
                    <Link className="navbar-link" to="/">inicio</Link>
                    <Link className="navbar-link" to="/pokedex">pokedex</Link>
                </nav>
                {isPokedexPage && <SearchBar onSearch={onSearch} />} {/* Pasa la función onSearch */}
            </div>
        </header>
    );
}

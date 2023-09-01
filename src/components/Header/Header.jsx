import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../Search/SearchBar.jsx';
import CartWidget from '../CartWidget/CartWidget.jsx';
// import "../../scss/components/header.scss";

export const Header = ({ onSearch }) => {
    const location = useLocation();

    const isPokedexPage = location.pathname === "/pokedex";

    return (
        <header className="Header">
            <div className='header-container'>
                <img className='logo' src="/logo.png" alt="Logo" />
                <div className="cart-section">
        <CartWidget /> 
      </div>
                {isPokedexPage ? (
                    <nav className="navbar">
                        <Link className="navbar-link" to="/">inicio</Link>
                        <Link className="navbar-link" to="/pokedex">pokedex</Link>
                    </nav>
                ) : (
                    <>
                        <Link to="/pokedex">
                            <img className='VerDetallesPokemon' src="/pokemon.png" alt="imagen Pokemon" />
                        </Link>
                        <nav className="navbar">
                            <Link className="navbar-link" to="/">inicio</Link>
                            <Link className="navbar-link" to="/pokedex">pokedex</Link>
                        </nav>
                    </>
                )}
                {isPokedexPage && <SearchBar onSearch={onSearch} />}
            </div>
        </header>
    );
};

// import React, { useState } from 'react';
// // import './SearchBar.css'; // Si deseas agregar estilos
// import { Link } from 'react-router-dom';

// const SearchBar = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]); // Resultados de búsqueda

//     const handleSearchChange = (event) => {
//         const newSearchTerm = event.target.value;
//         setSearchTerm(newSearchTerm);

//         // Aquí puedes implementar la lógica de búsqueda y actualizar setSearchResults
//     };
//     const handleSearchClick = () => { };

//     return (
//         <div className="search-container">
//             <input
//                 type="text"
//                 placeholder="Buscar por nombre o número"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//             />
//              <button onClick={handleSearchClick}>Buscar</button>
//             <div className="search-results">
//                 {searchResults.map((pokemon) => (
//                     <div key={pokemon.id}>
//                         <Link to={`/detalles/${pokemon.id}`}>{pokemon.name}</Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default SearchBar;


import React, { useState } from 'react';
// import './SearchBar.css'; // Si deseas agregar estilos

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
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

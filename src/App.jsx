
import { PokemonIdProvider } from './context/PokemonId';
import { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './scss/index.scss';
import { Home } from './layout/Home';
import Root from './utils/Root';
import Pokedex from './layout/Pokedex';
import { Header } from './components/Header/Header'; 
import { CartProvider } from './components/CartContext/CartContext';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true
        },
        {
          path: "/pokedex",
          element: <Pokedex/>,
        }
      ]
    }
  ]);
  useEffect(() => {
<Header/>
    const fetchData = () => {
      for (let i = 0; i < 151; i++) {
        fetchDataById(i);
      }
    }
    const fetchDataById = async (id) => {
      const res = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = res.json();
      return data
    }
  }, []);
  return (<>
    <PokemonIdProvider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </PokemonIdProvider>
  </>)
}

export default App

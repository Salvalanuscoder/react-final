import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PokemonDataProvider } from './context/PokemonData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <PokemonDataProvider/>
  </React.StrictMode>,
)

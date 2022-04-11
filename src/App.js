import React from 'react'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonsData } from './api';
import './style.css';

const {useState, useEffect} = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () =>{
    try{
      const data = await getPokemons();
      setPokemons(data.results);
      const promises = data.results.map(async(pokemon) => {
      return await getPokemonsData(pokemon.url)
      })
      const results =await Promise.all(promises)
      setPokemons(results)
    } catch(err){

    }
  }
  
  
  useEffect(()=>{
      fetchPokemons();
  }, [])

  return (
    <div>
      <NavBar/>
      <div className='app'/>
      <SearchBar/>
      <Pokedex pokemons={pokemons}/>   
    </div>
  )
}

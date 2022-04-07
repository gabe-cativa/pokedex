import React from 'react';
import { searchPokemon } from '../api';
const {useState} = React;

const SearchBar = () => {
const [search, setSearch] = useState('');  
const [pokemon, setPokemon] = useState();

const onChange =(e) =>{
  setSearch (e.target.value);
}

const onClick = async (e) =>{
  const data = await searchPokemon(search);
  setPokemon(data)
}


    return (
    <div>
        <div>
         <input placeholder='Buscar pokemon...' onChange={onChange}/>   
        </div>
        <div>
        <button onClick={onClick}>Buscar</button>
        </div>
        <div>
          {pokemon &&
          <div>
            <div>{pokemon.name}</div>
            <div>{pokemon.weight}</div>
            <img src={pokemon.sprites.front_default}/>
          </div>
        }
        </div>
    </div>
  )
}


export default SearchBar;
import React from 'react'

const  Pokemon = (props) => {
  const {pokemon} = props; 
    return (
    <div className='pokemon-card'>
        <div className='pokemon-img'/>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
        <div>
            <div>
                <h3>{pokemon.name}</h3>
            </div>
            <div># {pokemon.id}</div>
            <div>{pokemon.types.map((type,idx) =>{
                return(
                    <div key={idx}>{type.name}</div>
                )
            })}</div>
            <div>💗</div>
        </div>
    </div>
  );
};


export default  Pokemon;
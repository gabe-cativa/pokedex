import React from 'react'

const NavBar = () => {
let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    
return (
  <nav>
      <div />
      <div>
        <img src={imgUrl} alt="poke-api-logo" className="navbar-image" />
      </div>
      <div>💗</div>
    </nav>
  )
}



export default NavBar;
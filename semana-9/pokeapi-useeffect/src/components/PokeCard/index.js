import React, { useState, useEffect } from 'react';
import axios from "axios";

function PokeCard (props) {

  const [pokemon, setPokemon ] = useState({})
    // guarda infos e foto do pokemon

    useEffect(() => {
    
      if (pokemon.name !== props.poke) {
        pegaPokemon(props);
      }
    })

  // bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.poke}`)
      .then(response => {
        // guarda as infos do pokemon 
        setPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };


    return (
      <div>
        <p>{props.poke}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}

export default PokeCard;

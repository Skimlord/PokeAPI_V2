import React, { createContext, useState, useEffect } from "react";
import axios from "axios"

export const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
    const [allPokemons, setAllPokemons] = useState([]);
    useEffect(() => {
      axios({
        url: "https://pokeapi.co/api/v2/pokemon?limit=12",
      })
        .then((response) => {
          setAllPokemons(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setAllPokemons]);
  return (
    <PokemonContext.Provider value={{ allPokemons }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;

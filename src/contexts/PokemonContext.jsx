import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const initialState = {
  count: 0,
};

export const PokemonContext = createContext(initialState);

const PokemonContextProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  useEffect(() => {
    axios({
      url: "https://pokeapi.co/api/v2/pokemon?limit=151",
    })
      .then((response) => {
        setAllPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setAllPokemons]);

  const paginatedPokemons = () => {
    return allPokemons.slice(currentPage.count, currentPage.count  + 12)
  };

  const [currentPage, setCurrentPage] = useState(initialState);

  const nextPage = (currentPage) => {
    setCurrentPage((current) => ({
      ...current,
      count: currentPage < 144 ? current.count + 12 : current.count + 0
    }));
  };

  const previousPage = (currentPage) => {
    setCurrentPage((current) => ({
      ...current,
      count: currentPage > 0 ? current.count - 12 : current.count - 0,
    }));
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        count: currentPage.count,
        currentPage,
        paginatedPokemons,
        nextPage,
        previousPage
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;

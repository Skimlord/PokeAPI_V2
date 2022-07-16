import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const PokemonList = () => {
  const { searchPokemon } = useContext(PokemonContext);
  return (
    <div className="p-5">
      <div className="flex flex-row flex-wrap justify-around border-solid border-8 rounded-2xl border-[#737384] p-3 bg-white">
        {searchPokemon().map((pokemon, index) => (
          <div className="w-1/4 cursor-pointer p-3 rounded-2xl hover:bg-[#737384]" key={index}>
            <Link to={`/pokemons/${index + 1}`}>
              <img
                className="w-full rounded-lg"
                src={`https://img.pokemondb.net/sprites/yellow/normal/${pokemon.name}.png`}
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;

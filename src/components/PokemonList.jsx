import { useContext, useState } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const PokemonList = () => {
  const { allPokemons } = useContext(PokemonContext);
  const [over, setOver] = useState(false);
  return (
    <div className="p-5">
      <div className="flex flex-row flex-wrap border-solid border-8 rounded-2xl border-[#737384] p-3 bg-white">
        {allPokemons.map((pokemon, index) => (
          <div className="w-1/4 cursor-pointer" key={index}>
            <img
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
              className="w-full"
              src={
                over
                  ? `https://img.pokemondb.net/sprites/yellow/normal/${pokemon.name}.png`
                  : `https://img.pokemondb.net/sprites/red-blue/normal/${pokemon.name}.png`
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;

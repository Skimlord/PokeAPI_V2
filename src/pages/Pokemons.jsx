import PokemonList from "../components/PokemonList";
import PokemonPagination from "../components/PokemonPagination";

const Pokemons = () => {
  return (
    <div className="flex justify-center font-pokemon">
      <div className="w-[50rem] bg-neutral-200">
        <PokemonPagination />
        <PokemonList />
      </div>
    </div>
  );
};

export default Pokemons;

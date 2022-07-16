import PokemonList from "../components/PokemonList";
import PokemonPagination from "../components/PokemonPagination";
import PokemonSearch from "../components/PokemonSearch";

const Pokemons = () => {
  return (
    <div className="flex justify-center font-pokemon">
      <div className="w-[50rem] bg-neutral-200">
        <PokemonSearch />
        <PokemonPagination />
        <PokemonList />
      </div>
    </div>
  );
};

export default Pokemons;

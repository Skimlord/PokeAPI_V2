import { Routes, Route, Outlet, Link } from "react-router-dom";
import PokemonContextProvider from "../contexts/PokemonContext";
import Home from "../pages/Home";
import Info from "../pages/Info";
import Pokemons from "../pages/Pokemons";
import Pokemon from "../components/Pokemon";

const MainLayout = () => {
  return (
    <div>
      <PokemonContextProvider>
        <div className="flex justify-center text-center font-pokemon">
          <nav className="flex flex-row items-center justify-between w-[50rem] p-5 bg-white">
            <img
              src="/src/assets/logo.png"
              alt="Poke API Logo"
              className="w-64"
            />
            <ul className="flex flex-col justify-evenly w-96 md:flex-row">
              <li className="hover:underline cursor-pointer">
                <Link to="/">Inicio</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/pokemons">Pokemones</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/info/191223">Info</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="info/191223" element={<Info />} />
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="pokemons/:pokemonName" element={<Pokemon />} />
        </Routes>
        <Outlet />
      </PokemonContextProvider>
    </div>
  );
};

export default MainLayout;

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PokemonContextProvider from "../contexts/PokemonContext";
import Home from "../pages/Home";

import Info from "../pages/Info";
import Pokemons from "../pages/Pokemons";
import Pokemon from "../components/Pokemon";

const MainLayout = () => {
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
  return (
    <div>
      <PokemonContextProvider>
        <div className="flex justify-center text-center font-pokemon">
          <nav className="flex flex-row items-center justify-between w-[50rem] p-5 bg-white">
            <img
              src="./src/assets/logo.png"
              alt="Poke API Logo"
              className="w-1/4"
            />
            <ul className="flex flex-col justify-evenly w-2/4 md:flex-row">
              <li className="hover:underline cursor-pointer text-sm md:text-base">
                <Link to="/">{t("nav_home")}</Link>
              </li>
              <li className="hover:underline cursor-pointer text-sm md:text-base">
                <Link to="/pokemons">{t("nav_pokemons")}</Link>
              </li>
              <li className="hover:underline cursor-pointer text-sm md:text-base">
                <Link to="/info/191223">{t("nav_info")}</Link>
              </li>
            </ul>
            <div className="link-container flex flex-col justify-between h-10">
              <img
                src="/src/assets/mexicoflag.png"
                onClick={() => changeLaguage("es")}
              />
              <img
                src="/src/assets/usaflag.png"
                onClick={() => changeLaguage("en")}
              />
            </div>
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

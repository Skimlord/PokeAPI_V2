import { t } from "i18next";
import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const PokemonSearch = () => {
    const { getSearch } = useContext(PokemonContext);
    return (
    <div className="flex flex-row flex-wrap items-center justify-between p-5 bg-[#A6A6A6]">
      <input
        type="text"
        placeholder={t("search_input")}
        className="w-full sm:w-1/2 md:w-3/5 p-3 border-solid border-8 rounded-2xl border-[#737384]"
        onChange={(event) => getSearch(event.target.value)}
      />
      <div className="w-full sm:w-1/2 md:w-1/3 flex justify-center items-center mx-auto p-3">
        {t("searchbox_text")}
      </div>
    </div>
  );
};

export default PokemonSearch;

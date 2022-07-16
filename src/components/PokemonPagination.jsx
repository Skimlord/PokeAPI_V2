import { t } from "i18next";
import { useContext, useState } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import rightArrow from "../assets/arrow-right.png"
import leftArrow from "../assets/arrow-left.png"

const PokemonPagination = () => {
  const { nextPage, previousPage, count } = useContext(PokemonContext);

  return (
    <div className="flex flex-row justify-between p-5">
      <div className="p-3 border-solid border-8 rounded-2xl border-[#737384] w-20 flex justify-center align-center shrink-0 bg-[#ffffff] cursor-pointer">
        <img src={leftArrow} alt="" onClick={() => previousPage(count)}/>
      </div>
      <div className="p-7 border-solid border-8 rounded-2xl border-[#737384] w-4/5 mx-5 text-base md:text-xl text-center bg-[#ffffff]">
        {t("pagination_box")}
      </div>
      <div className="p-3 border-solid border-8 rounded-2xl border-[#737384] w-20 flex justify-center align-center shrink-0 bg-[#ffffff] cursor-pointer">
        <img src={rightArrow} alt="" onClick={() => nextPage(count)}/>
      </div>
    </div>
  );
};

export default PokemonPagination;

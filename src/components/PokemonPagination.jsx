const PokemonPagination = () => {
  return (
    <div className="flex flex-row justify-between p-5">
      <div className="p-3 border-solid border-8 rounded-2xl border-[#737384] w-20 flex justify-center align-center shrink-0 bg-[#ffffff] cursor-pointer">
        <img src="/src/assets/arrow-left.png" alt="" />
      </div>
      <div className="p-7 border-solid border-8 rounded-2xl border-[#737384] w-4/5 mx-5 text-2xl text-center bg-[#ffffff]">
        Box 1
      </div>
      <div className="p-3 border-solid border-8 rounded-2xl border-[#737384] w-20 flex justify-center align-center shrink-0 bg-[#ffffff] cursor-pointer">
        <img src="/src/assets/arrow-right.png" alt="" />
      </div>
    </div>
  );
};

export default PokemonPagination;

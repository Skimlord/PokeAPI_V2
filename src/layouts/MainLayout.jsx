const MainLayout = () => {
  return (
    <div>
      <div className="flex justify-center text-center font-pokemon">
        <navbar className="flex flex-row items-center justify-between w-[50rem] p-5">
          <img
            src="src/assets/PokeAPILogo.png"
            alt="Poke API Logo"
            className="w-64"
          />
          <ul className="flex flex-row justify-evenly w-64">
            <li className="hover:underline cursor-pointer">Inicio</li>
            <li className="hover:underline cursor-pointer">Acerca de</li>
          </ul>
        </navbar>
      </div>
    </div>
  );
};

export default MainLayout;

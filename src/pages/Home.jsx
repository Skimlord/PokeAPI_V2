import { t } from "i18next";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center font-pokemon my-16">
      <div className="w-[50rem] text-center">
        <img src="/src/assets/logo.png" alt="" className="w-2/3 md:w-1/2 mx-auto p-5 mb-5" />
        <p className="w-full text-xl mb-5">{t("home_title")}</p>
        <p className="w-full mb-10">{t("home_message")}</p>
        <p className="w-full text-xl cursor-pointer font-bold hover:underline"><Link to="/pokemons">{t("home_message_")}</Link></p>
    </div>
    </div>
  );
};

export default Home;

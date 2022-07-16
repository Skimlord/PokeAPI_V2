import { t } from "i18next";

const Info = () => {
  return (
    <div className="flex justify-center font-pokemon my-16">
      <div className="w-[50rem] text-center">
        <h1 className="text-2xl mb-10">Info</h1>
        <img src="/src/assets/ghost.png" alt="" className="w-1/2 md:w-1/3 mx-auto p-5 mb-10" />
        <p className="w-full">{t("info_title")}</p>
        <p className="w-full mb-10 font-bold">Eduardo Hiram Rubio Flores</p>
        <p className="w-full">{t("info_student_id")}</p>
        <p className="w-full mb-10 font-bold">191223</p>
        <p className="w-full">{t("info_class")}</p>
        <p className="w-full font-bold">9-A</p>
      </div>
    </div>
  );
};

export default Info;

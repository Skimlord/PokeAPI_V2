import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../pages/Home";
import Info from "../pages/Info";

const MainLayout = () => {
  return (
    <div>
      <div className="flex justify-center text-center font-pokemon">
        <nav className="flex flex-row items-center justify-between w-[50rem] p-5">
          <img
            src="/src/assets/logo.png"
            alt="Poke API Logo"
            className="w-64"
          />
          <ul className="flex flex-row justify-evenly w-64">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Inicio</Link>
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
      </Routes>
      <Outlet />
    </div>
  );
};

export default MainLayout;

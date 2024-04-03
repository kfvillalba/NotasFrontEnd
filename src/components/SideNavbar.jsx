import React from "react";
import { useNavigate } from "react-router-dom";
import LogOutIcon from "../assets/LogOutIcon";

const SideNavbar = () => {
  const Navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    console.log(localStorage);
    Navigate("/login");
  };
  return (
    <nav className="bg-purple-dark object-cover h-full text-gray-300 relative flex flex-col">
      <section className="flex-wrap">
        <h1 className="p-2 text-center shadow-md shadow-black text-purple-light text-5xl ">
          TaskApp
        </h1>
        <header className="Profile flex flex-wrap items-center p-5  shadow-sm shadow-black ">
          <img
            className="rounded-full shadow-sm shadow-white"
            src={localStorage.getItem("photoURL")}
            alt="avatar"
            style={{ width: "64px", height: "64px" }}
          />
          <div className="ml-3">
            <p className="text-lg">{localStorage.getItem("displayName")}</p>
            <p className="text-sm">{localStorage.getItem("email")}</p>
          </div>
        </header>
        <h1 className="py-3 shadow-sm shadow-black">Navegación Principal</h1>
      </section>
      <section className="h-full [&>footer>ul>li]:mx-3 [&>header>ul>li]:mx-3 flex flex-col relative">
        <header className="overflow-y-auto h-1 flex flex-col flex-grow shadow-sm shadow-black"></header>
        <footer className="my-1">
          <ul>
            <li>
              <button onClick={Logout} className="btn__menu">
                <LogOutIcon clases={"mr-3  size-7"} />
                LogOut
              </button>
            </li>
          </ul>
        </footer>
      </section>
    </nav>
  );
};

export default SideNavbar;

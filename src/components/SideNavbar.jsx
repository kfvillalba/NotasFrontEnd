import React from "react";
import DashboardIcon from "../assets/DashboardIcon";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <nav className="bg-purple-dark object-cover h-full text-gray-300 relative flex flex-col">
      <section className="flex-wrap">
        <h1 className="p-2 text-center text-purple-light items-center text-5xl ">
          MyStock
        </h1>
        <header className="Profile flex flex-wrap items-center p-2 m-3 ">
          <img
            className="rounded-full"
            src="https://placehold.co/64"
            alt="avatar"
          />
          <div className="ml-3">
            <p className="text-lg">Kevin Villalba</p>
            <p className="text-sm">kevinvillalba@gmail.com</p>
          </div>
        </header>
        <h1 className="py-3">Navegación Principal</h1>
      </section>
      <section className="h-full [&>footer>ul>li]:mx-3 [&>header>ul>li]:mx-3 flex flex-col relative">
        <header className="flex flex-col flex-grow">
          <ul>
            <li>
              <Link to={"/dashboard"}>
                <button className="btn__menu bg-purple-light">
                  <DashboardIcon clases={"mr-3 w-8"} />
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/proveedores"}>
                <button className="btn__menu">
                  <DashboardIcon clases={"mr-3 w-8"} />
                  Proveedores
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/clientes"}>
                <button className="btn__menu">
                  <DashboardIcon clases={"mr-3 w-8"} />
                  Clientes
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/productos"}>
                <button className="btn__menu">
                  <DashboardIcon clases={"mr-3 w-8"} />
                  Productos
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/controlexistencias"}>
                <button className="btn__menu">
                  <DashboardIcon clases={"mr-3 w-8"} />
                  Crontrol Existencias
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/reportes"}>
                <button className="btn__menu">
                  <DashboardIcon clases={"mr-3 w-8"} />
                  Reportes
                </button>
              </Link>
            </li>
          </ul>
        </header>
        <footer className="mb-3">
          <ul>
            <li>
              <Link to={"/login"}>
                <button className="btn__menu">
                  <DashboardIcon clases={"mr-3 w-10"} />
                  LogOut
                </button>
              </Link>
            </li>
          </ul>
        </footer>
      </section>
    </nav>
  );
};

export default SideNavbar;

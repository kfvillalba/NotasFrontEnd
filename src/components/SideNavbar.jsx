import React, { useState } from "react";
import DashboardIcon from "../assets/DashboardIcon";
import { Link } from "react-router-dom";
import ProveedoresIcon from "../assets/ProveedoresIcon";
import ClienteIcon from "../assets/ClienteIcon";
import ProductosIcon from "../assets/ProductosIcon";
import ControlExistenciasIcon from "../assets/ControlExistenciasIcon";
import ReportesIcon from "../assets/ReportesIcon";
import LogOutIcon from "../assets/LogOutIcon";
import DropDown from "./DropDown";

const SideNavbar = () => {
  return (
    <nav className="bg-purple-dark object-cover h-full text-gray-300 relative flex flex-col">
      <section className="flex-wrap">
        <h1 className="p-2 text-center shadow-md shadow-black text-purple-light text-5xl ">
          MyStock
        </h1>
        <header className="Profile flex flex-wrap items-center p-5  shadow-sm shadow-black ">
          <img
            className="rounded-full shadow-sm shadow-white"
            src="https://placehold.co/64"
            alt="avatar"
          />
          <div className="ml-3">
            <p className="text-lg">Kevin Villalba</p>
            <p className="text-sm">kevinvillalba@gmail.com</p>
          </div>
        </header>
        <h1 className="py-3 shadow-sm shadow-black">Navegación Principal</h1>
      </section>
      <section className="h-full [&>footer>ul>li]:mx-3 [&>header>ul>li]:mx-3 flex flex-col relative">
        <header className="flex flex-col flex-grow shadow-sm shadow-black">
          <ul>
            <li>
              <Link to={"/dashboard"}>
                <button className="btn__menu">
                  <DashboardIcon clases={"mr-3 size-7"} />
                  Dashboard
                </button>
              </Link>
            </li>

            <li>
              <Link to={"/clientes"}>
                <button className="btn__menu">
                  <ClienteIcon clases={"mr-3 size-7"} />
                  Clientes
                </button>
              </Link>
            </li>
            <li>
              <DropDown
                nombre={"Gestión de Productos"}
                Icon={<ProductosIcon clases={"mr-3 size-7"} />}
              />
            </li>
            <li>
              <Link to={"/controlexistencias"}>
                <button className="btn__menu">
                  <ControlExistenciasIcon clases={"mr-3 size-7"} />
                  Crontrol Existencias
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/reportes"}>
                <button className="btn__menu">
                  <ReportesIcon clases={"mr-3 size-7"} />
                  Reportes
                </button>
              </Link>
            </li>
          </ul>
        </header>
        <footer className="mb-3 ">
          <ul>
            <li>
              <Link to={"/login"}>
                <button className="btn__menu">
                  <LogOutIcon clases={"mr-3  size-7"} />
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

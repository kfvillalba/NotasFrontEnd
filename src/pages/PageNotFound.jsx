import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center bg-slate-500 h-screen">
      <h1 className="font-extrabold text-9xl my-10">404</h1>
      <h1 className="mb-10">Pagina no Encontrada</h1>
      <Link to={"/dashboard"}>
        <button className="rounded-lg w-32 hover:bg-purple-light py-2 my-1 text-white bg-purple-dark">
          Regresar
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;

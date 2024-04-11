import React from "react";
import AddIcon from "../assets/AddIcon";
import SearchIcon from "../assets/SearchIcon";

const Notas = ({ categorias }) => {
  return (
    <>
      <div className="flex flex-col h-full">
        <section className="flex items-center justify-evenly mx-9">
          <section className="flex flex-col">
            <span className="text-3xl font-semibold">DevOps</span>
            <span className="text-lg text-gray-600 font-semibold">
              {categorias[0].notas.length} notas
            </span>
          </section>
          <button>
            <AddIcon clases={"size-10"}></AddIcon>
          </button>
        </section>
        <section className="flex justify-center mt-2">
          <SearchIcon clases={"size-10"}></SearchIcon>
          <input type="text"></input>
        </section>
        <section className="overflow-y-auto h-1 flex flex-col flex-grow  mt-2">
          {categorias[0].notas.map((nota, index) => {
            return (
              <button
                key={index}
                className="border border-gray-500 flex flex-col font-semibold px-2 "
              >
                <span className="text-gray-500 text-[.8rem] self-end ">
                  {nota.fecha}
                </span>
                <span className="text-xl font-semibold">{nota.nombre}</span>
                <span className="font-normal text-sm text-start text-gray-600 line-clamp-2">
                  {nota.descripcion}
                </span>
              </button>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Notas;

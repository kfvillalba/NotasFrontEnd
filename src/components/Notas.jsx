import React, { useState } from "react";
import AddIcon from "../assets/AddIcon";
import SearchIcon from "../assets/SearchIcon";
import ModalEliminarNota from "./ModalEliminarNota";
import ModalRegisterCategoria from "./ModalRegisterCategoria";

const Notas = ({ categoriaSeleccionada, setNotaSeleccionada }) => {
  const [selectedNota, setSelectedNota] = useState(null);
  const [formRegister, setformRegister] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full">
        <ModalRegisterCategoria
          open={formRegister}
          onClose={() => {
            setformRegister(false);
          }}
          registrar={(dataForm) => {
            setData([...data, dataForm]);
          }}
        />
        <ModalEliminarNota
          open={!!selectedNota}
          onClose={() => setSelectedNota(null)}
          onDelete={() => {
            // Aquí puedes eliminar la nota de tu lista y actualizar el estado de notas
            setSelectedNota(null); // Cierra el modal después de eliminar la nota
          }}
          notaNombre={selectedNota ? selectedNota.nombre : ""}
        />
        <section className="flex items-center justify-between mx-6">
          <section className="flex flex-col">
            <span className="text-3xl font-semibold">
              {categoriaSeleccionada.nombre}
            </span>
            <span className="text-lg text-gray-600 font-semibold">
              {categoriaSeleccionada.notas.length} notas
            </span>
          </section>

          <button onClick={() => setformRegister(true)}>
            <AddIcon clases={"size-10"}></AddIcon>
          </button>
        </section>
        <section className="flex justify-center relative mx-6">
          <div className="absolute text-gray-500 inset-y-0 left-0 ml-2 flex items-center ">
            <SearchIcon clases={"size-5 "}></SearchIcon>
          </div>
          <input
            placeholder="Buscar Tarea"
            className="p-1 w-full mt-0  rounded-full outline-none border pl-8 border-gray-500"
            type="text"
          ></input>
        </section>
        <section className="overflow-y-auto h-1 flex flex-col flex-grow mt-2">
          {categoriaSeleccionada.notas.map((nota, index) => {
            return (
              <button
                key={index}
                className="border border-gray-500 flex flex-col font-semibold px-2"
                onContextMenu={(e) => {
                  e.preventDefault(); // Evita que aparezca el menú contextual del navegador
                  setSelectedNota(nota);
                }}
                onClick={() => setNotaSeleccionada(nota)}
              >
                <span className="text-gray-500 text-[.8rem] self-end">
                  {nota.fecha}
                </span>
                <span className="text-xl font-semibold">{nota.nombre}</span>
                <p
                  dangerouslySetInnerHTML={{ __html: nota.descripcion }}
                  className="font-normal text-sm text-start text-gray-600 line-clamp-2"
                ></p>
              </button>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Notas;

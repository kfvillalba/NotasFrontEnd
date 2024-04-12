import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

const NotasEdit = ({ notaSeleccionada }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [descripcion, setDescripcion] = useState();
  const [nombre, setNombre] = useState();

  useEffect(() => {
    setDescripcion(() => notaSeleccionada.descripcion);
    setNombre(() => notaSeleccionada.nombre);
    reset();
  }, [notaSeleccionada]);

  return (
    <>
      <form
        className=" object-cover h-full  relative flex flex-col"
        onSubmit={handleSubmit((data) => {
          data.descripcion = descripcion;
          console.log(data);
        })}
      >
        <section className="h-full flex flex-col relative">
          <section className="flex flex-col">
            <span className="text-gray-500 text-[.8rem]">
              {notaSeleccionada.fecha}
            </span>
            <input
              className="mb-3 text-3xl font-semibold bg-transparent border-none"
              type="text"
              defaultValue={nombre}
              {...register("nombre", { required: "Nombre Requerido" })}
            ></input>
            <span className="message">{errors?.nombre?.message}</span>
          </section>
          <EditorToolbar toolbarId={"t1"} />
          <header className="overflow-y-auto h-1 flex flex-col flex-grow  mt-2">
            <section>
              <div className="overflow-y-auto mt-1">
                <ReactQuill
                  theme="snow"
                  name="descripcion"
                  value={descripcion}
                  onChange={setDescripcion}
                  placeholder={"Escribe la descripción aquí..."}
                  modules={modules("t1")}
                  formats={formats}
                />
                <span className="message">{errors?.descripcion?.message}</span>
              </div>
            </section>
          </header>

          <footer className="flex justify-center gap-6 mt-5">
            <button type="submit" variant="contained" className="bnt__primary">
              Guardar
            </button>
          </footer>
        </section>
      </form>
    </>
  );
};

export default NotasEdit;

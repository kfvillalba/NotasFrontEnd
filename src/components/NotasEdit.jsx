import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

const NotasEdit = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("descripcion");
  }, [register]);

  const ondescription = (editorState) => {
    setValue("descripcion", editorState);
  };
  const editorContent = watch("descripcion");

  return (
    <>
      <form
        className=" object-cover h-full  relative flex flex-col"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <section className="h-full flex flex-col relative">
          <section className="flex flex-col">
            <span className="text-gray-500 text-[.8rem]">25-03-2026</span>
            <input
              className="mb-3 text-3xl font-semibold bg-transparent border-none"
              type="text"
              value={"DevOps"}
              {...register("nombre", { required: "Campo Obligatorio" })}
            />
            <span>{errors?.text?.message}</span>
          </section>
          <EditorToolbar toolbarId={"t1"} />
          <header className="overflow-y-auto h-1 flex flex-col flex-grow  mt-2">
            <section>
              <div className="overflow-y-auto mt-1">
                <ReactQuill
                  theme="snow"
                  name="descripcion"
                  value={editorContent}
                  onChange={ondescription}
                  placeholder={"Escribe la descripción aquí..."}
                  modules={modules("t1")}
                  formats={formats}
                />
              </div>
            </section>
          </header>

          <footer className="flex justify-center gap-6 mt-5">
            <button type="submit" variant="contained" className="bnt__primary">
              Guardar
            </button>
            <button type="reset" variant="contained" className="bnt__danger">
              Cancelar
            </button>
          </footer>
        </section>
      </form>
    </>
  );
};

export default NotasEdit;

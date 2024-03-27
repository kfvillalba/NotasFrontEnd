import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ModalEditCategoria = ({ open, onClose, editar }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    editar(data);
    onClose();
    reset();
    Swal.fire({
      icon: "success",
      title: "Categoria guardada",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  if (!open) return null;
  return (
    <div className="fixed w-full top-0 left-0 h-full z-10 flex items-center justify-center bg-black/50">
      <div className="">
        <form
          className="bg-white rounded-lg shadow-sm p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="nombre" className="label__form">
              Nombre de la categoria
            </label>
            <input
              id="nombre"
              type="text"
              className="input__form"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "El nombre es obligatorio",
                },
              })}
            />
            <span className="message">{errors?.nombre?.message}</span>
          </div>
          <div className="flex gap-4 justify-center">
            <button type="submit" className="bnt__primary mt-3">
              Editar
            </button>
            <button
              onClick={() => {
                reset(), onClose();
              }}
              className="bnt__danger mt-3 "
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditCategoria;

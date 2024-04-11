import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ModalRegisterCategoria = ({ open, onClose, registrar }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://localhost:7127/api/Categorias/Agregar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        registrar(data);
        onClose();
        reset();
        Swal.fire({
          icon: "success",
          title: "Categoria guardada",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Error al guardar la categoría");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error al guardar la categoría",
        text: error.message,
      });
    }
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
              Aceptar
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

export default ModalRegisterCategoria;

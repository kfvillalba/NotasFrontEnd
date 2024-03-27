import React, { useState } from "react";
import PanelDivisor from "../components/PanelDivisor";
import DeleteIcon from "../assets/DeleteIcon";
import EditIcon from "../assets/EditIcon";
import ModalRegisterCategoria from "../components/ModalRegisterCategoria";
import Swal from "sweetalert2";
import ModalEditCategoria from "../components/ModalEditCategoria";

const Page = () => {
  const [data, setData] = useState([
    { id: "1112", nombre: "aseo" },
    { id: "1122", nombre: "papeles" },
    { id: "1132", nombre: "dulces" },
    { id: "1142", nombre: "arroz" },
    { id: "122", nombre: "ropa" },
  ]);
  const [formRegister, setformRegister] = useState(false);
  const [formEdit, setformEdit] = useState(false);

  const eliminarCategoria = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podra deshacer este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          text: "Se ha borrado con exito",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <ModalRegisterCategoria
        open={formRegister}
        onClose={() => {
          setformRegister(false);
        }}
        registrar={(dataForm) => {
          setData([...data, dataForm]);
        }}
      />
      <ModalEditCategoria
        open={formEdit}
        onClose={() => {
          setformEdit(false);
        }}
        editar={(dataForm) => {
          console.log(dataForm);
          //con esta dataForm modifican
        }}
      />
      <div className="p-5  shadow-md rounded-sm shadow-black h-full">
        <h3>Lista Categorias</h3>
        <section>
          <button
            onClick={() => setformRegister(true)}
            className="bnt__primary"
          >
            Agregar Categoria
          </button>
        </section>

        <section className="flex flex-col my-5">
          <label className="label__form" htmlFor="textBuscarCategoria">
            Buscar Categoria
          </label>
          <input className="input__form" id="textBuscarCategoria" type="text" />
        </section>

        <div className="h-3/4 overflow-y-auto snap-y shadow-sm shadow-black rounded-sm">
          <table className="w-full ">
            <thead className="[&>tr>th]:sticky [&>tr>th]:top-0 [&>tr>th]:py-2 [&>tr>th]:bg-purple-light [&>tr>th]:text-white">
              <tr>
                <th className="text-start pl-3">Nombre</th>
                <th className="text-center w-28">Editar</th>
                <th className="text-center w-28">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {data.map((Categoria, index) => {
                return (
                  <tr className="even:bg-slate-100" key={index}>
                    <td className="pl-3">{Categoria.nombre}</td>
                    <td className="text-center text-blue-800">
                      <button onClick={() => setformEdit(true)}>
                        <EditIcon clases={"size-7 cursor-pointer"} />
                      </button>
                    </td>
                    <td className="text-center text-red-800">
                      <button onClick={eliminarCategoria}>
                        <DeleteIcon clases={"size-7 cursor-pointer"} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
const PageCategorias = () => {
  return <PanelDivisor Page={<Page />} />;
};

export default PageCategorias;

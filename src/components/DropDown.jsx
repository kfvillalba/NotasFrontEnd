import React, { useState } from "react";
import ArrowDownIcon from "../assets/ArrowDownIcon";
import ArrowUpIcon from "../assets/ArrowUpIcon";
import { Link } from "react-router-dom";
import ProductosIcon from "../assets/ProductosIcon";
import ProveedoresIcon from "../assets/ProveedoresIcon";
import CategoriasIcon from "../assets/CategoriasIcon";

const DropDown = ({ nombre, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        className="btn__menu flex "
      >
        {Icon}

        <div className="flex flex-grow justify-between ">
          {nombre}
          {!isOpen ? (
            <ArrowDownIcon clases={"size-7 "} />
          ) : (
            <ArrowUpIcon clases={"size-7 "} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="w-ful relative pl-10">
          <Link to={"/categorias"}>
            <button className="btn__menu">
              <CategoriasIcon clases={"mr-3 size-7"} />
              Categorias
            </button>
          </Link>
          <Link to={"/productos"}>
            <button className="btn__menu">
              <ProductosIcon clases={"mr-3 size-7"} />
              Productos
            </button>
          </Link>
          <Link to={"/proveedores"}>
            <button className="btn__menu">
              <ProveedoresIcon clases={"mr-3 size-7"} />
              Proveedores
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropDown;

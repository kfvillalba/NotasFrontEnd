import React from "react";
import PanelDivisor from "../components/PanelDivisor";

const PageProveedores = () => {
  const Page = () => {
    return <div className="w-4/5">Proveedores</div>;
  };
  return <PanelDivisor Page={<Page />} />;
};

export default PageProveedores;

import React from "react";
import PanelDivisor from "../components/PanelDivisor";

const Page = () => {
  return <div className="w-4/5">Productos</div>;
};
const PageProduct = () => {
  return <PanelDivisor Page={<Page />} />;
};

export default PageProduct;

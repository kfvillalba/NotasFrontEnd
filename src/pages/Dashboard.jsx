import React from "react";
import SideNavbar from "../components/SideNavbar";
import CardDashboard from "../components/CardDashboard";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/5">
        <SideNavbar />
      </div>
      <div className="w-4/5">
        <section className="flex flex-wrap gap-5 p-5">
          <CardDashboard nombre={"Clientes"} />
          <CardDashboard nombre={"Proveedores"} />
          <CardDashboard nombre={"Productos"} />
          <CardDashboard nombre={"Ventas"} />
          <CardDashboard nombre={"Compras"} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

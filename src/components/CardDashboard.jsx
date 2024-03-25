import React from "react";
import DashboardIcon from "../assets/DashboardIcon";
import ClienteIcon from "../assets/ClienteIcon";

const CardDashboard = ({ nombre }) => {
  return (
    <div className="border-2 rounded-lg border-purple-dark flex w-fit h-fit items-center hover:bg-purple-light hover:cursor-pointer">
      <div>
        <ClienteIcon clases={"w-32"} />
      </div>
      <div className="mr-2">
        <h1>{nombre}</h1>
        <p className="text-center">3</p>
      </div>
    </div>
  );
};

export default CardDashboard;

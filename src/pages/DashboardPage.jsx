import React from "react";
import PanelDivisor from "../components/PanelDivisor";

const Page = () => {};
const DashboardPage = () => {
  return <PanelDivisor Page={<Page />} />;
};

export default DashboardPage;

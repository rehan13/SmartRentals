import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [cityFilter, setCityFilter] = useState("");

  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Header setCityFilter={setCityFilter} />
      <Outlet context={{ cityFilter }} /> 
    </div>
  );
}

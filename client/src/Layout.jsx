import Header from "./Header";
import { Outlet, useOutletContext } from "react-router-dom";

export default function Layout() {
  const { handleSearch } = useOutletContext();

  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      <Outlet />
    </div>
  );
}

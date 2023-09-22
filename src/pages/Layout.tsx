import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import MenuCategoriesProvider from "../providers/MenuCategoriesProvider";

const Layout = () => {
  return (
    <>
      <MenuCategoriesProvider>
        <NavBar />
      </MenuCategoriesProvider>
      <Outlet />
    </>
  );
};

export default Layout;

import { useContext } from "react";
import MenuCategoriesContext from "../contexts/MenuCategoriesContext";

const useMenuCategories = () => useContext(MenuCategoriesContext);

export default useMenuCategories;

import React from "react";

export interface Category {
  title: string;
  route: string;
}

interface MenuCategoriesContextType {
  movieCategories: Category[];
  tvShowCategories: Category[];
  personCategories: Category[];
}

const MenuCategoriesContext = React.createContext<MenuCategoriesContextType>(
  {} as MenuCategoriesContextType
);

export default MenuCategoriesContext;

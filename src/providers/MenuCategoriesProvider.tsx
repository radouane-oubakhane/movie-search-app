import { ReactNode } from "react";
import MenuCategoriesContext, {
  Category,
} from "../contexts/MenuCategoriesContext";

interface Props {
  children: ReactNode;
}

const MenuCategoriesProvider = ({ children }: Props) => {
  const movieCategories: Category[] = [
    { title: "popular", route: "popular" },
    { title: "top rated", route: "top-rated" },
    { title: "upcoming", route: "upcoming" },
    { title: "now playing", route: "now-playing" },
  ];
  const tvShowCategories: Category[] = [
    { title: "popular", route: "popular" },
    { title: "top rated", route: "top-rated" },
    { title: "on tv", route: "on-the-air" },
    { title: "airing today", route: "airing-today" },
  ];

  const personCategories: Category[] = [{ title: "popular", route: "popular" }];
  return (
    <MenuCategoriesContext.Provider
      value={{
        movieCategories,
        tvShowCategories,
        personCategories,
      }}
    >
      {children}
    </MenuCategoriesContext.Provider>
  );
};

export default MenuCategoriesProvider;

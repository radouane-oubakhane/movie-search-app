import { MenuItemOption, MenuOptionGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  route: string;
  categories: { title: string; route: string }[];
}

const ToggleMenuOptionGroup = ({ title, route, categories }: Props) => {
  return (
    <MenuOptionGroup title={title} type="radio">
      {categories.map((category, index) => (
        <Link key={index} to={`/${route}/${category.route}`}>
          <MenuItemOption textTransform="capitalize">
            {category.title}
          </MenuItemOption>
        </Link>
      ))}
    </MenuOptionGroup>
  );
};

export default ToggleMenuOptionGroup;

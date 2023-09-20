import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  route: string;
  categories: { title: string; route: string }[];
}

const CategorySelector = ({ title, route, categories }: Props) => {
  return (
    <Menu>
      <MenuButton>
        <Heading as="b" size="sm" whiteSpace="nowrap">
          {title}
        </Heading>
      </MenuButton>
      <MenuList>
        {categories.map((category, index) => (
          <Link key={index} to={`/${route}/${category.route}`}>
            <MenuItem textTransform="capitalize">{category.title}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategorySelector;

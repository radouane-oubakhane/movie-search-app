import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import ToggleMenuOptionGroup from "./ToggleMenuOptionGroup";

interface Props {
  categories: { title: string; route: string }[][];
}

const ToggleMenu = ({ categories }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList minWidth="240px">
        <ToggleMenuOptionGroup
          title="Movies"
          route="movie"
          categories={categories[0]}
        />
        <ToggleMenuOptionGroup
          title="TV Shows"
          route="tv"
          categories={categories[1]}
        />
        <ToggleMenuOptionGroup
          title="People"
          route="person"
          categories={categories[2]}
        />
        <MenuItem
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ToggleMenu;



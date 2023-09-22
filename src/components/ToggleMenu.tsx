import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import useMenuCategories from "../hooks/useMenuCategories";
import ToggleMenuOptionGroup from "./ToggleMenuOptionGroup";

const ToggleMenu = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { movieCategories, tvShowCategories, personCategories } =
    useMenuCategories();
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
          categories={movieCategories}
        />
        <ToggleMenuOptionGroup
          title="TV Shows"
          route="tv"
          categories={tvShowCategories}
        />
        <ToggleMenuOptionGroup
          title="People"
          route="person"
          categories={personCategories}
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

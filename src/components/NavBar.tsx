import { Center, HStack, Hide, Image, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg.png";
import CategorySelector from "./CategorySelector";
import ColorModeSwitch from "./ColorModeSwitch";
import ToggleMenu from "./ToggleMenu";
import useMenuCategories from "../hooks/useMenuCategories";

const NavBar = () => {
  const { movieCategories, tvShowCategories, personCategories } = useMenuCategories();

  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack justifyContent="space-between" spacing={10}>
        <Center boxSize="60px">
          <Link to="/">
            <Image src={logo} alt="logo" />
          </Link>
        </Center>
        <Hide below="md">
          <CategorySelector
            title="Movies"
            route="movie"
            categories={movieCategories}
          />
          <CategorySelector
            title="TV Shows"
            route="tv"
            categories={tvShowCategories}
          />
          <CategorySelector
            title="People"
            route="person"
            categories={personCategories}
          />
        </Hide>
      </HStack>
      <Hide below="md">
        <ColorModeSwitch />
      </Hide>
      <Show below="md">
        <ToggleMenu />
      </Show>
    </HStack>
  );
};

export default NavBar;

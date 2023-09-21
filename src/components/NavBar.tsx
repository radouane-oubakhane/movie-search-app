import { Center, HStack, Hide, Image, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg.png";
import CategorySelector from "./CategorySelector";
import ColorModeSwitch from "./ColorModeSwitch";
import ToggleMenu from "./ToggleMenu";

const NavBar = () => {
  const movieCategories = [
    { title: "popular", route: "popular" },
    { title: "top rated", route: "top-rated" },
    { title: "upcoming", route: "upcoming" },
    { title: "now playing", route: "now-playing" },
  ];
  const tvShowCategories = [
    { title: "popular", route: "popular" },
    { title: "top rated", route: "top-rated" },
    { title: "on tv", route: "on-the-air" },
    { title: "airing today", route: "airing-today" },
  ];

  const personCategories = [{ title: "popular", route: "popular" }];

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
        <ToggleMenu
          categories={[movieCategories, tvShowCategories, personCategories]}
        />
      </Show>
    </HStack>
  );
};

export default NavBar;

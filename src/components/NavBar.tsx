import { HStack, Image, Center } from "@chakra-ui/react";
import logo from "../assets/Logo.svg.png";
import ColorModeSwitch from "./ColorModeSwitch";
import CategorySelector from "./CategorySelector";
import { Link } from "react-router-dom";

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
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

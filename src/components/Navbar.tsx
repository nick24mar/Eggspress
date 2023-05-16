import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex alignItems="center" px={4} py={3} gap={5}>
      <Link to="/">
        <Image
          src={logo}
          boxSize="60px"
          borderRadius={100}
          objectFit="scale-down"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
}

export default Navbar;

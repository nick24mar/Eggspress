import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <Flex alignItems="center" px={4} py={3} gap={5}>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
}

export default Navbar;

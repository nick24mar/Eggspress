import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

function Layout() {
  return (
    <>
      <Navbar />
      <Box p={5}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;

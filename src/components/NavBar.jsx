import { Link } from "react-router-dom";
import { Box, HStack, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="gray.800" p={4}>
      <HStack spacing={4}>
        <Button as={Link} to="/" colorScheme="teal">
          Home
        </Button>
        <Button as={Link} to="/timer" colorScheme="teal">
          Timer
        </Button>
        <Button as={Link} to="/alarm" colorScheme="teal">
          Alarm
        </Button>
      </HStack>
    </Box>
  );
};

export default NavBar;

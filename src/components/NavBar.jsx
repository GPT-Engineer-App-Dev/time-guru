import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack spacing={4} padding={4} bg="gray.100">
      <Button as={Link} to="/" colorScheme="teal">
        Timer
      </Button>
      <Button as={Link} to="/alarm" colorScheme="teal">
        Alarm Clock
      </Button>
    </HStack>
  );
};

export default NavBar;

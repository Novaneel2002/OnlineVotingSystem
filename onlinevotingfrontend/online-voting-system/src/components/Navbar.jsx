import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={6} py={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        {/* Left Side - Logo/Title */}
        <Text fontSize="xl" fontWeight="bold">
          Voting System
        </Text>

        {/* Right Side - Navigation Buttons */}
        <Flex gap={4}>
          <Button as={Link} to="/parties" colorScheme="teal" variant="ghost">
            Parties
          </Button>
          <Button as={Link} to="/about" colorScheme="teal" variant="ghost">
            About
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

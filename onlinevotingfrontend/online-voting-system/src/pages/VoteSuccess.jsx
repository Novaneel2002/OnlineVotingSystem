import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VoteSuccess = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.900"
      color="white"
    >
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Voted Successfully!
      </Text>
      <Text fontSize="lg" mb={6}>
        Thank you for voting. Your vote has been recorded.
      </Text>
      <Link to="/">
        <Button colorScheme="blue">Go Back to Home</Button>
      </Link>
    </Box>
  );
};

export default VoteSuccess;

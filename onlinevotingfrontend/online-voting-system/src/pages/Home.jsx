import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
    
    <Navbar/>
    <Box
      as="main"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-r, gray.800, gray.900)"
      color="white"
      px={6}
    >
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl">
          Welcome to the Online Voting System
        </Heading>
        <Text fontSize="lg">
          Participate and Vote for your favorite party
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate('/parties')}
        >
          View Parties & Vote
        </Button>
      </VStack>
    </Box>
    </>
  );
};

export default HomePage;

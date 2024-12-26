import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Text,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
} from "@chakra-ui/react";
import VotingForm from "../components/VotingForm";
import Navbar from "../components/Navbar";

const PartyList = () => {
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  useEffect(() => {
    const fetchParties = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/parties");
        setParties(response.data);
      } catch (error) {
        console.error("Error fetching parties:", error);
      }
    };

    fetchParties();
  }, []);

  const handleVoteClick = (party) => {
    setSelectedParty(party); // Pass the selected party to the form
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedParty(null); // Reset selected party
  };

  return (
    <>
      <Navbar />
      <Box p={"9rem"}>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {parties.map((party) => (
            <Box
              key={party.id}
              p={4}
              boxShadow="md"
              borderRadius="md"
              bg="gray.700"
              // width="80%"
              color="white"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              display="flex"
              flexDirection="column"
              gap={10}
            >
              <Text fontSize="xl" fontWeight="bold">
                {party.name}
              </Text>
              {/* <Text mt={2}>Symbol: {party.symbol}</Text> */}
              <img
                src={party.image_url}
                alt={party.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  margin: "0 auto 16px auto",
                  borderRadius: "50%",
                  // border: "1px solid white",
                  display: "block",
                }}
              />
              <Button
                mt={4}
                colorScheme="blue"
                onClick={() => handleVoteClick(party)}
                width="50%"
              >
                Vote
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        {selectedParty && (
          <VotingForm
            party={selectedParty}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </Box>
    </>
  );
};

export default PartyList;

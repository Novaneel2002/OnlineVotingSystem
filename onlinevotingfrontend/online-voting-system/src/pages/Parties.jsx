import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Text, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import VotingForm from "../components/Votingform";

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
    <Box>
      <VStack spacing={4} align="stretch">
        {parties.map((party) => (
          <Box
            key={party.id}
            p={4}
            boxShadow="md"
            borderRadius="md"
            bg="gray.700"
            color="white"
          >
            <Text fontSize="xl" fontWeight="bold">
              {party.name}
            </Text>
            <Text>Symbol: {party.symbol}</Text>
            <Button mt={2} colorScheme="blue" onClick={() => handleVoteClick(party)}>
              Vote
            </Button>
          </Box>
        ))}
      </VStack>

      {selectedParty && (
        <VotingForm
          party={selectedParty}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  );
};

export default PartyList;

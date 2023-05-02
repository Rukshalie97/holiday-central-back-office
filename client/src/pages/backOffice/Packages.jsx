import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Text,
  Select,
} from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";

const packageHeaders = [
  "id",
  "destination",
  "duration",
  "number_of_travelers",
  "specialty",
  "price",
  "rating",
];

const packages = [
  // Add sample package data if needed
];

const PackageReservation = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [numberOfTravelers, setNumberOfTravelers] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [packagesData, setPackagesData] = useState(packages);

  const handleRowClick = (rowData) => {
    navigate(`/view-reservations/${rowData.id}`);
  };

  function handleFormSubmit() {
    // Add the new package data to the packagesData state
    setPackagesData([
      ...packagesData,
      {
        id: packagesData.length + 1,
        destination,
        duration,
        number_of_travelers: numberOfTravelers,
        specialty,
        price,
        rating,
      },
    ]);

    // Clear the form fields
    setDestination("");
    setDuration("");
    setNumberOfTravelers("");
    setSpecialty("");
    setPrice("");
    setRating("");

    // Close the modal after submission
    onClose();
  }

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" minW="100%">
        <Text color="gray.600" as="b" fontSize="3xl" p={8}>
          Package Reservations
        </Text>
        <Box>
          <Button colorScheme="blue" size="md" m={2} onClick={onOpen}>
            Add Package
          </Button>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Package</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Destination</FormLabel>
              <Input
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Duration</FormLabel>
              <Input
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Number of Travelers</FormLabel>
              <Input
                type="number"
                value={numberOfTravelers}
                onChange={(event) => setNumberOfTravelers(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Specialty</FormLabel>
              <Input
                value={specialty}
                onChange={(event) => setSpecialty(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Rating</FormLabel>
              <Select
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={handleFormSubmit} colorScheme="blue">
              Save
            </Button>
            <Button variant="ghost" onClick={onClose} background="gray.100">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <DataTable
        data={packagesData}
        headers={packageHeaders}
        onRowClick={handleRowClick}
      />
    </>
  );
};

export default PackageReservation;

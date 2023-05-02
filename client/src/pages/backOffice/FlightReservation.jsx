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
  Textarea,
} from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";
// import { useFileUpload } from "use-file-upload";

const flightHeaders = [
  "id",
  "airline",
  "flightNumber",
  "departureDestination",
  "arrivalDestination",
  "departureDate",
  "arrivalDate",
  "cabinClass",
  "airline",
  "availableSeats",
  "price",
  "duration",
  "duration",
  "transitTime",
  "description",
];

const flights = [
  {
    id: 1,
    flightNumber: "AA123",
    departureDestination: "New York",
    arrivalDestination: "Los Angeles",
    departureDate: "2023-05-15",
    arrivalDate: "2023-05-15",
    cabinClass: "economy",
    airline: "American Airlines",
    price: 450,
    duration: "6h 30m",
    transitTime: "0m",
    description: "Direct flight from New York to Los Angeles",
  },
  {
    id: 2,
    flightNumber: "UA456",
    departureDestination: "San Francisco",
    arrivalDestination: "Chicago",
    departureDate: "2023-05-20",
    arrivalDate: "2023-05-20",
    cabinClass: "business",
    airline: "United Airlines",
    price: 600,
    duration: "4h 15m",
    transitTime: "0m",
    description: "Direct flight from San Francisco to Chicago",
  },
  {
    id: 3,
    flightNumber: "DL789",
    departureDestination: "Atlanta",
    arrivalDestination: "Miami",
    departureDate: "2023-05-25",
    arrivalDate: "2023-05-25",
    cabinClass: "first",
    airline: "Delta Airlines",
    price: 700,
    duration: "1h 50m",
    transitTime: "0m",
    description: "Direct flight from Atlanta to Miami",
  },
];

const FlightReservation = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flightNumber, setFlightNumber] = useState("");
  const [departureDestination, setDepartureDestination] = useState("");
  const [arrivalDestination, setArrivalDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [cabinClass, setCabinClass] = useState("");
  const [airline, setAirline] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [transitTime, setTransitTime] = useState("");
  const [description, setDescription] = useState("");
  const [flightsData, setFlightsData] = useState(flights);

  const handleRowClick = (rowData) => {
    navigate(`/view-reservations/${rowData.id}`);
  };

  function handleFormSubmit() {
    // Your form submission logic
    console.log(";;;");
    console.log({
      flightNumber,
      departureDestination,
      arrivalDestination,
      departureDate,
      arrivalDate,
      price,
    });

    // Add the new flight data to the flightsData state
    setFlightsData([
      ...flightsData,
      {
        id: flightsData.length + 1,
        flightNumber,
        departureDestination,
        arrivalDestination,
        departureDate,
        arrivalDate,
        cabinClass,
        airline,
        price,
        duration,
        transitTime,
        description,
      },
    ]);

    // Clear the form fields
    setFlightNumber("");
    setDepartureDestination("");
    setArrivalDestination("");
    setDepartureDate("");
    setArrivalDate("");
    setCabinClass("");
    setAirline("");
    setPrice("");
    setDuration("");
    setTransitTime("");
    setDescription("");

    // Close the modal after submission
    onClose();
  }

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" minW="100%">
        <Text color="gray.600" as="b" fontSize="3xl" p={8}>
          Flight Details
        </Text>
        <Box>
          <Button colorScheme="blue" size="md" m={2} onClick={onOpen}>
            Add Flight
          </Button>
          <Button
            colorScheme="blue"
            size="md"
            // onClick={() =>
            //   selectFiles(
            //     { accept: "image/*" },
            //     ({ name, size, source, file }) => {
            //       console.log("Files Selected", { name, size, source, file });
            //     }
            //   )
            // }
          >
            Add Flights with CSV
          </Button>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Flight</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Flight Number</FormLabel>
              <Input
                value={flightNumber}
                onChange={(event) => setFlightNumber(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Departure Destination</FormLabel>
              <Input
                value={departureDestination}
                onChange={(event) =>
                  setDepartureDestination(event.target.value)
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Arrival Destination</FormLabel>
              <Input
                value={arrivalDestination}
                onChange={(event) => setArrivalDestination(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Departure Date</FormLabel>
              <Input
                type="date"
                value={departureDate}
                onChange={(event) => setDepartureDate(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Arrival Date</FormLabel>
              <Input
                type="date"
                value={arrivalDate}
                onChange={(event) => setArrivalDate(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cabin Class</FormLabel>
              <Select
                value={cabinClass}
                onChange={(event) => setCabinClass(event.target.value)}
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Airline</FormLabel>
              <Input
                value={airline}
                onChange={(event) => setAirline(event.target.value)}
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
              <FormLabel>Duration</FormLabel>
              <Input
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Transit Time</FormLabel>
              <Input
                value={transitTime}
                onChange={(event) => setTransitTime(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
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
        data={flightsData}
        headers={flightHeaders}
        onRowClick={handleRowClick}
      />
    </>
  );
};

export default FlightReservation;

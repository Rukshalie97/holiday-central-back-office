import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  FormControl,
  FormLabel,
  Flex,
  Button,
  useDisclosure,
  IconButton,
  Input,
  Text,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import {
  MdDelete,
  MdOutlineSubdirectoryArrowLeft,
  MdEditDocument,
} from "react-icons/md";

const ViewReservation = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
  const [isEditable, setIsEditable] = useState(false);

  const editFlight = () => {
    console.log(isEditable, "isEditableisEditable");
    if (isEditable) {
      setIsEditable(false);
    }
    setIsEditable(true);
  };

  const deleteFlight = () => {
    console.log(id, "id");
    console.log("delete");
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
  }

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" minW="100%">
        <Box>
          <IconButton
            variant="outline"
            colorScheme="blue.500"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<MdOutlineSubdirectoryArrowLeft />}
            onClick={() => {
              navigate(-1);
            }}
          />
          <Text color="gray.600" as="b" fontSize="3xl" p={8}>
            View Details
          </Text>
        </Box>
        <Box>
          <IconButton
            m={4}
            variant="outline"
            colorScheme="blue.500"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<MdEditDocument />}
            onClick={editFlight}
          />
          <IconButton
            variant="outline"
            colorScheme="blue.500"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<MdDelete />}
            onClick={deleteFlight}
          />
        </Box>
      </Flex>
      <Box minW={"70%"} overflowY="auto" maxHeight="80%" m={8}>
        <FormControl>
          <FormLabel>Flight Number</FormLabel>
          <Input
            value={flightNumber}
            onChange={(event) => setFlightNumber(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Departure Destination</FormLabel>
          <Input
            value={departureDestination}
            onChange={(event) => setDepartureDestination(event.target.value)}
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
        <Flex alignItems="center" justifyContent="center" minW="100%" m={8}>
          <Button mr={3} onClick={handleFormSubmit} colorScheme="blue.500">
            Update
          </Button>
          <Button variant="ghost" onClick={onClose} background="gray.100">
            Cancel
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default ViewReservation;

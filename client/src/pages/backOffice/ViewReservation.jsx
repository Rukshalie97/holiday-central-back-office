import React, { useState, useEffect } from "react";
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
  Alert,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import {
  MdDelete,
  MdOutlineSubdirectoryArrowLeft,
  MdEditDocument,
} from "react-icons/md";
import {
  deleteFlight,
  fetchAFlights,
  updateFlight,
} from "../../services/flightServices";

const ViewReservation = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flightNumber, setFlightNumber] = useState("");
  const [departureDestination, setDepartureDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalDestination, setArrivalDestination] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [airline, setAirline] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [transitTime, setTransitTime] = useState("");
  const [cabinClass, setCabinClass] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [flightData, setFlightData] = useState();

  useEffect(() => {
    const loadFlightData = async (id) => {
      try {
        const { data, error } = await fetchAFlights(id);
        console.log(data, "A flight");
        setFlightData(data);
        setFlightNumber(data.flight_number);
        setDepartureDestination(data.departure_destination.city);
        setDepartureDate(data.departure_date);
        setDepartureTime(data.departure_time);
        setArrivalDestination(data.arrival_destination.city);
        setArrivalDate(data.arrival_date);
        setArrivalTime(data.arrival_time);
        setAirline(data.airline.name);
        setPrice(data.price);
        setDuration(data.duration);
        setTransitTime(data.transit_time);
        setCabinClass(data.cabin_class_avaialble);
        setAvailableSeats(data.available_seats);
        if (error) {
          throw new Error(error);
        }
        setFlightsData(data);
      } catch (err) {}
    };

    loadFlightData(id);
  }, []);

  const editFlight = () => {
    console.log(isEditable, "isEditableisEditable");
    if (isEditable) {
      setIsEditable(false);
    }
    setIsEditable(true);
  };

  const handleDeleteFlight = () => {
    const deleteAFlight = async (id) => {
      try {
        const { data, error } = await deleteFlight(id);
        console.log(data, "Deleted");
        alert("Successfully Deleted the Record!");
        if (error) {
          throw new Error(error);
        }
        setFlightsData(data);
      } catch (err) {}
    };
    deleteAFlight(id);
  };

  function handleFormSubmit() {
    let updatedFlightData = {
      flight_number: flightNumber,
      departure_destination: departureDestination,
      arrival_destination: arrivalDestination,
      departure_date: departureDate,
      arrival_date: arrivalDate,
      departure_time: departureTime,
      arrival_time: arrivalTime,
      isDirect: false,
      stops: [],
      transit_time: transitTime,
      isReturn: false,
      cabin_class_avaialble: cabinClass,
      airline: airline,
      price: price,
      duration: duration,
      available_seats: availableSeats,
    };
    const updateFlightData = async (id, updatedFlightData) => {
      try {
        const { data, error } = await updateFlight(id, updatedFlightData);
        console.log(data, "Updated");
        alert("Successfully Updated the Record");
        if (error) {
          throw new Error(error);
        }
        setFlightsData(data);
      } catch (err) {}
    };
    updateFlightData(id, updatedFlightData);
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
            onClick={handleDeleteFlight}
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
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Departure Date</FormLabel>
          <Input
            type="date"
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Departure Time</FormLabel>
          <Input
            type="time"
            value={departureTime}
            onChange={(event) => setDepartureTime(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Arrival Destination</FormLabel>
          <Input
            value={arrivalDestination}
            onChange={(event) => setArrivalDestination(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Arrival Date</FormLabel>
          <Input
            type="date"
            value={arrivalDate}
            onChange={(event) => setArrivalDate(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Arrival Time</FormLabel>
          <Input
            type="time"
            value={arrivalTime}
            onChange={(event) => setArrivalTime(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Airline</FormLabel>
          <Input
            value={airline}
            onChange={(event) => setAirline(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Duration</FormLabel>
          <Input
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Transit Time</FormLabel>
          <Input
            value={transitTime}
            onChange={(event) => setTransitTime(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Cabin Class</FormLabel>
          <Select
            value={cabinClass}
            onChange={(event) => setCabinClass(event.target.value)}
            isDisabled={!isEditable}
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Available Seats</FormLabel>
          <Input
            type="number"
            value={availableSeats}
            onChange={(event) => setAvailableSeats(event.target.value)}
            isDisabled={!isEditable}
          />
        </FormControl>
        <Flex alignItems="center" justifyContent="center" minW="100%" m={8}>
          {isEditable ? (
            <>
              <Button mr={3} onClick={handleFormSubmit} colorScheme="blue">
                Update
              </Button>
              <Button variant="ghost" onClick={onClose} background="gray.100">
                Cancel
              </Button>
            </>
          ) : null}
        </Flex>
      </Box>
    </>
  );
};

export default ViewReservation;

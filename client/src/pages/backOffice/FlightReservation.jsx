import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  addFlight,
  fetchAirLines,
  fetchAirPorts,
  fetchFlights,
} from "./../backOffice/../../services/flightServices";

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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";
// import { useFileUpload } from "use-file-upload";

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
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [cabinClass, setCabinClass] = useState("");
  const [airline, setAirline] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [transitTime, setTransitTime] = useState("");
  const [flightsData, setFlightsData] = useState();
  const [airPortData, setAirPortData] = useState();
  const [airLineData, setAirLineData] = useState();
  const [availableSeats, setAvailableSeats] = useState();

  const handleRowClick = (id) => {
    navigate(`/view-reservations/${id}`);
  };

  function handleFormSubmit() {
    let newFlight = {
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
      cabin_class_avaialble: [cabinClass],
      airline: airline,
      price: price,
      duration: duration,
      available_seats: availableSeats,
    };

    console.log(newFlight, "newFlight");

    const AddedFlightData = async (newFlight) => {
      try {
        const { data, error } = await addFlight(newFlight);
        console.log(data, "AddedFlightData");
        // Add the new flight data to the flightsData state
        setFlightsData([...flightsData, data]);
        if (error) {
          console.log(error, "error");
          throw new Error(error);
        }
      } catch (err) {
        console.log(err);
      }
    };

    AddedFlightData(newFlight);

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

    onClose();
  }

  useEffect(() => {
    const loadFlightData = async () => {
      try {
        const { data, error } = await fetchFlights();
        console.log(data, "Flightdata");
        if (error) {
          throw new Error(error);
        }
        setFlightsData(data);
      } catch (err) {}
    };

    const loadAirPortData = async () => {
      try {
        const { data, error } = await fetchAirPorts();
        console.log(data, "AirData");
        if (error) {
          throw new Error(error);
        }
        setAirPortData(data);
      } catch (err) {}
    };

    const loadAirLineData = async () => {
      try {
        const { data, error } = await fetchAirLines();
        console.log(data, "AirLineData");
        if (error) {
          throw new Error(error);
        }
        setAirLineData(data);
      } catch (err) {}
    };

    loadAirLineData();
    loadAirPortData();
    loadFlightData();
  }, []);

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

              <Select
                value={departureDestination}
                onChange={(event) =>
                  setDepartureDestination(event.target.value)
                }
              >
                {airPortData?.map((row) => (
                  <option key={row._id} value={row?._id}>
                    {row?.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Arrival Destination</FormLabel>
              <Select
                value={arrivalDestination}
                onChange={(event) => setArrivalDestination(event.target.value)}
              >
                {airPortData?.map((row) => (
                  <option key={row._id} value={row?._id}>
                    {row?.name}
                  </option>
                ))}
              </Select>
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
              <FormLabel>Departure Time</FormLabel>
              <Input
                type="datetime-local"
                value={departureTime}
                onChange={(event) => setDepartureTime(event.target.value)}
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
              <FormLabel>Arrival Time</FormLabel>
              <Input
                type="datetime-local"
                value={arrivalTime}
                onChange={(event) => setArrivalTime(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Airline</FormLabel>
              <Select
                value={airline}
                onChange={(event) => setAirline(event.target.value)}
              >
                {airLineData?.map((row) => (
                  <option key={row._id} value={row?._id}>
                    {row?.name}
                  </option>
                ))}
              </Select>
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
                type="number"
                value={transitTime}
                onChange={(event) => setTransitTime(event.target.value)}
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
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Available Seat </FormLabel>
              <Input
                value={availableSeats}
                onChange={(event) => setAvailableSeats(event.target.value)}
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
      <Box
        width="100%"
        overflowX="auto"
        justifyContent="center"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="2xl"
        mr={8}
        ml={8}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Flight Number</Th>
              <Th>Departure Destination</Th>
              <Th>Arrival Destination</Th>
              <Th>Departure Date</Th>
              <Th>Arrival Date</Th>
              <Th>Departure Time</Th>
              <Th>Arrival Time</Th>
              <Th>Cabin Class</Th>
              <Th>Airline</Th>
              <Th>Price</Th>
              <Th>Duration</Th>
              <Th>Transit Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {flightsData?.map((row) => (
              <Tr key={row._id} onClick={() => handleRowClick(row._id)}>
                <Td>{row.flight_number}</Td>
                <Td>{row.departure_destination.city}</Td>
                <Td>{row.arrival_destination.city}</Td>
                <Td>{row.departure_date}</Td>
                <Td>{row.arrival_date}</Td>
                <Td>{row.departure_time}</Td>
                <Td>{row.arrival_time}</Td>
                <Td>{row.cabin_class_avaialble.join(", ")}</Td>
                <Td>{row.airline.name}</Td>
                <Td>{row.price}</Td>
                <Td>{row.duration}</Td>
                <Td>{row.transit_time}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default FlightReservation;

//     "isDirect": true,
//     "stops": [],
//     "isReturn": true,

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
  Switch,
} from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";

const hotelHeaders = [
  "id",
  "destination",
  "check_in_date",
  "check_out_date",
  "star_rating",
  "price",
  "pool",
  "kids_play_area",
  "beach_access",
];

const hotels = [
  {
    id: 1,
    destination: "Miami",
    check_in_date: "2023-05-15",
    check_out_date: "2023-05-20",
    star_rating: 4,
    price: 200,
    pool: true,
    kids_play_area: false,
    beach_access: true,
  },
  {
    id: 2,
    destination: "Los Angeles",
    check_in_date: "2023-05-21",
    check_out_date: "2023-05-25",
    star_rating: 5,
    price: 350,
    pool: true,
    kids_play_area: true,
    beach_access: true,
  },
  {
    id: 3,
    destination: "New York",
    check_in_date: "2023-05-28",
    check_out_date: "2023-05-31",
    star_rating: 3,
    price: 150,
    pool: false,
    kids_play_area: false,
    beach_access: false,
  },
];

const HotelReservation = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [starRating, setStarRating] = useState("");
  const [price, setPrice] = useState("");
  const [pool, setPool] = useState(false);
  const [kidsPlayArea, setKidsPlayArea] = useState(false);
  const [beachAccess, setBeachAccess] = useState(false);
  const [hotelsData, setHotelsData] = useState(hotels);

  const handleRowClick = (rowData) => {
    navigate(`/view-reservations/${rowData.id}`);
  };

  function handleFormSubmit() {
    setHotelsData([
      ...hotelsData,
      {
        id: hotelsData.length + 1,
        destination,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        star_rating: starRating,
        price,
        pool,
        kids_play_area: kidsPlayArea,
        beach_access: beachAccess,
      },
    ]);

    setDestination("");
    setCheckInDate("");
    setCheckOutDate("");
    setStarRating("");
    setPrice("");
    setPool(false);
    setKidsPlayArea(false);
    setBeachAccess(false);

    onClose();
  }

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" minW="100%">
        <Text color="gray.600" as="b" fontSize="3xl" p={8}>
          Hotel Reservations
        </Text>
        <Box>
          <Button colorScheme="blue" size="md" m={2} onClick={onOpen}>
            Add Hotel
          </Button>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Hotel</ModalHeader>
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
              <FormLabel>Check-in Date</FormLabel>
              <Input
                type="date"
                value={checkInDate}
                onChange={(event) => setCheckInDate(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Check-out Date</FormLabel>
              <Input
                type="date"
                value={checkOutDate}
                onChange={(event) => setCheckOutDate(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Star Rating</FormLabel>
              <Select
                value={starRating}
                onChange={(event) => setStarRating(event.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
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
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="pool" mb="0">
                Pool
              </FormLabel>
              <Switch
                id="pool"
                isChecked={pool}
                onChange={(event) => setPool(event.target.checked)}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="kids-play-area" mb="0">
                Kids Play Area
              </FormLabel>
              <Switch
                id="kids-play-area"
                isChecked={kidsPlayArea}
                onChange={(event) => setKidsPlayArea(event.target.checked)}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="beach-access" mb="0">
                Beach Access
              </FormLabel>
              <Switch
                id="beach-access"
                isChecked={beachAccess}
                onChange={(event) => setBeachAccess(event.target.checked)}
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
        data={hotelsData}
        headers={hotelHeaders}
        onRowClick={handleRowClick}
      />
    </>
  );
};

export default HotelReservation;

import React from "react";
import {
  Image,
  Text,
  Flex,
  Divider,
  Box,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import logo from "../images/logo.svg";
import AvatarBox from "./AvatarBox";
import {
  MdOutlineDashboard,
  MdOutlineAirplaneTicket,
  MdOutlineHotel,
  MdOutlineLocalOffer,
  MdManageHistory,
  MdSettings,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const SideBar = () => {
  return (
    <Flex
      as="aside"
      w="full"
      h="full"
      maxW={350}
      bg="white"
      p={6}
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="3xl"
    >
      <Flex flexDirection="column" alignItems="flex-start">
        <Box
          as={HStack}
          width="full"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Image
            src={logo}
            maxWidth="150px"
            width="full"
            padding={2}
            objectFit="cover"
            mt={2}
          />
          <IconButton
            as={NavLink}
            to="/settings"
            size="lg"
            icon={<MdSettings />}
            borderRadius="full"
            color="gray.600"
            _hover={{ bg: "blue.500", color: "white" }}
            _activeLink={{
              bg: "blue.500",
              color: "white",
              borderWidth: 1,
              borderColor: "gray.100",
            }}
          />
        </Box>
        <Text my={5} color="gray.300">
          Services
        </Text>
        <Box width="full">
          <SidebarItem
            icon={MdOutlineDashboard}
            name="Dashboard"
            link="/dashboard"
          />
          <SidebarItem
            icon={MdOutlineAirplaneTicket}
            name="Flight Reservations"
            link="/flight-reservations"
          />
          <SidebarItem
            icon={MdOutlineHotel}
            name="Hotel Reservations"
            link="/hotel-reservations"
          />
          <SidebarItem
            icon={MdOutlineLocalOffer}
            name="Packages"
            link="/packages"
          />
          <SidebarItem
            icon={MdOutlineSupervisedUserCircle}
            name="users"
            link="/users"
          />
        </Box>
        <Divider />
        {/* <Text my={4} color='gray.300'>
          Order History
        </Text>
        <SidebarItem
          icon={MdManageHistory}
          name='View Reservations'
          link='/view-reservations'
        /> */}
      </Flex>
      <AvatarBox />
    </Flex>
  );
};

export default SideBar;

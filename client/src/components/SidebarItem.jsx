import React from "react";
import { Text, HStack, Icon } from "@chakra-ui/react";
import {
  MdOutlineDashboard,
  MdOutlineAirplaneTicket,
  MdOutlineHotel,
  MdOutlineLocalOffer,
  MdManageHistory,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const SidebarItem = (props) => {
  return (
    <HStack
      as={NavLink}
      to={props.link}
      borderRadius="lg"
      width="full"
      cursor="pointer"
      _hover={{ bg: "blue.500", color: "white" }}
      _activeLink={{
        bg: "blue.500",
        color: "white",
      }}
      spacing={5}
      color="gray.600"
      px={3}
      py={5}
      my={1}
    >
      <Icon fontSize="xl" as={props.icon}></Icon>
      <Text fontSize="lg" fontWeight="semibold">
        {props.name}
      </Text>
    </HStack>
  );
};

export default SidebarItem;

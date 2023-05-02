import React from "react";
import {
  Text,
  Flex,
  Avatar,
  IconButton,
  Badge,
  HStack,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  MenuDivider,
} from "@chakra-ui/react";

import { MdMoreHoriz } from "react-icons/md";

const AvatarBox = () => {
  return (
    <Flex
      borderWidth={1}
      borderColor="gray.100"
      borderRadius="full"
      w="full"
      p={4}
      justifyContent="space-between"
      gap={2}
      flexDirection="row"
    >
      <Avatar name="Rukshalie" bg="blue.500" />
      <Flex
        w="full"
        flexDirection="column"
        gap={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        <HStack>
          <Text fontSize="sm" fontWeight="bold" pb={0} lineHeight={0}>
            Rukshalie
          </Text>
          <Badge variant="solid" colorScheme="blue.500">
            BO
          </Badge>
        </HStack>
        <Text mt={-2} as="small" color="gray.500" fontSize={12} lineHeight={0}>
          rukshalie@gmail.com
        </Text>
      </Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MdMoreHoriz />}
          borderRadius="full"
          color="gray.400"
          variant="ghost"
          fontSize={20}
        ></MenuButton>
        <MenuList>
          <MenuItem color="red.500">Sign Out</MenuItem>
          <MenuDivider />
          <MenuItem>Report Bug</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default AvatarBox;

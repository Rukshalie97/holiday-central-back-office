import React from "react";
import {
  Flex,
  Text,
  Box,
  Stack,
  HStack,
  Image,
  Divider,
  Badge,
  Button,
  Heading,
} from "@chakra-ui/react";

import {
  MdFlightLand,
  MdFlightTakeoff,
  MdKeyboardReturn,
  MdEast,
} from "react-icons/md";

const FlightCard = (props) => {
  return (
    <Stack w="full" alignItems="center" mb={2}>
      <Flex
        h="auto"
        w="95%"
        borderWidth={1}
        boxShadow="md"
        borderRadius="2xl"
        p={7}
        justifyContent="space-between"
        alignItems="flex-end"
        bgColor="white"
      >
        <Flex width="80%" flexDirection="column">
          <Stack>
            <Box as={HStack} mb={2}>
              <Image
                src="https://images.kiwi.com/airlines/64/UL.png"
                borderRadius="full"
                boxSize="30px"
              />
              <Text as="b">Sri Lankan Airlines</Text>
            </Box>
            <Box as={HStack} justifyContent="space-between">
              <Flex
                width="md"
                flexDirection="column"
                px={3}
                alignItems="center"
              >
                <Text as="b" color="blue.500" fontSize="md">
                  21th May 2023
                </Text>
                <Text color="gray.500" fontSize="4xl">
                  9.34
                </Text>
                <Text color="gray.400" fontSize="xl">
                  CMB
                </Text>
              </Flex>
              <Box color="gray.400">
                <MdFlightTakeoff size="50px" />
              </Box>
              <Flex width="full" align="center">
                <Divider borderColor="gray.400" borderWidth={1} />
                <Stack width="full" align="center">
                  <Text fontSize="lg" as="b" color="gray.400">
                    Colombo to Delhi
                  </Text>
                  <Text as="sup" color="gray.400">
                    Duration 3h 16 min
                  </Text>
                  <Badge colorScheme="blue.500">Via Singapre</Badge>
                </Stack>
                <Divider borderColor="gray.400" borderWidth={1} />
              </Flex>
              <Box color="gray.400">
                <MdFlightLand size="50px" />
              </Box>
              <Flex
                width="md"
                flexDirection="column"
                px={3}
                alignItems="center"
              >
                <Text as="b" color="blue.500" fontSize="md">
                  21th May 2023
                </Text>
                <Text color="gray.500" fontSize="4xl">
                  9.34
                </Text>
                <Text color="gray.400" fontSize="xl">
                  DEL
                </Text>
              </Flex>
            </Box>
          </Stack>
        </Flex>
        <Stack w="20%">
          <Flex justifyContent="flex-end">
            <Stack alignItems="flex-end">
              <Badge colorScheme="green">9 Seats left</Badge>
              <Text color="gray.500">Return Flight</Text>
              <Heading color="gray.700">Rs. 58632.25</Heading>
              <Text as="sup" color="gray.400" size="xs">
                Final Total Price -Tax Included
              </Text>
            </Stack>
          </Flex>
          <Button colorScheme="blue">Select</Button>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default FlightCard;

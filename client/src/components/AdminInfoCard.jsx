import React from "react";
import { Flex, Text, Box, Stack, HStack } from "@chakra-ui/react";

const AdminInfoCard = (props) => {
  const { title, icon, onClick } = props;

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
        transition="transform 0.3s ease-out"
        _hover={{
          background: "blue.500",
        }}
        onClick={onClick}
      >
        <Flex width="80%" flexDirection="column">
          <Stack>
            <Box as={HStack} mb={2}>
              {icon}
              <Text color="gray.600" as="b">
                {title}
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default AdminInfoCard;

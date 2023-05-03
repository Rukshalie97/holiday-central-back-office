import AdminInfoCard from "../../components/AdminInfoCard";
import React, { useMemo, useState } from "react";

import { DataTable } from "../../components/DataTable";
import {
  MdOutlineAirplaneTicket,
  MdOutlineHotel,
  MdOutlineLocalOffer,
} from "react-icons/md";

import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

const DashboardPage = () => {
  const [SelectedSection, setSelectedSection] = useState("flight");

  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={"5"}
        shadow={"xl"}
        border={"1px solid"}
        borderColor={useColorModeValue("gray.800", "gray.500")}
        rounded={"lg"}
        background={"blue.50"}
      >
        <Flex justifyContent={"space-between"}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={"medium"} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={"auto"}
            color={useColorModeValue("gray.800", "gray.200")}
            alignContent={"center"}
          >
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }

  return (
    <>
      <Box w="100%" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Flights"}
            stat={"100+"}
            icon={<MdOutlineAirplaneTicket size={"3em"} />}
          />
          <StatsCard
            title={"Hotels"}
            stat={"200+"}
            icon={<MdOutlineHotel size={"3em"} />}
          />
          <StatsCard
            title={"Packages"}
            stat={"300+"}
            icon={<MdOutlineLocalOffer size={"3em"} />}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DashboardPage;

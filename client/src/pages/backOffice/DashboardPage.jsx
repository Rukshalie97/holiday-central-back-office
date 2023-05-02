import AdminInfoCard from "../../components/AdminInfoCard";
import React, { useMemo, useState } from "react";

import { Flex, Text, Button } from "@chakra-ui/react";
import { DataTable } from "../../components/DataTable";
import {
  MdOutlineAirplaneTicket,
  MdOutlineHotel,
  MdOutlineLocalOffer,
} from "react-icons/md";

const DashboardPage = () => {
  const [SelectedSection, setSelectedSection] = useState("flight");

  return (
    <>
      <Flex flexDirection="row" overflowX="auto" w="full" pt="2">
        <AdminInfoCard
          title="Flight Details"
          key="flight"
          icon={<MdOutlineAirplaneTicket size={30} />}
          onClick={() => {
            setSelectedSection("flight");
          }}
        />
        <AdminInfoCard
          title="Hotel Details"
          icon={<MdOutlineHotel size={30} />}
          key="hotel"
          onClick={() => {
            setSelectedSection("hotel");
          }}
        />
        <AdminInfoCard
          title="Package Details"
          icon={<MdOutlineLocalOffer size={30} />}
          key="package"
          onClick={() => {
            setSelectedSection("package");
          }}
        />
      </Flex>
    </>
  );
};

export default DashboardPage;

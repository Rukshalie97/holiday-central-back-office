import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

export function DataTable(props) {
  const { headers, data, onRowClick } = props;
  return (
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
      {/* <Box overflow="auto" maxH="400" maxW="98%"> */}
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row, rowIndex) => (
            <Tr key={rowIndex} onClick={() => onRowClick(row)}>
              {headers?.map((header, cellIndex) => (
                <Td key={cellIndex}>{row[header]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* </Box> */}
    </Box>
  );
}

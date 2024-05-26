// src/components/TrafficDataTable.tsx
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

const TrafficDataTable: React.FC = () => {
  const trafficData = [
    { time: 'Today', visitors: '', views: '' },
    { time: 'Yesterday', visitors: '', views: '' },
    { time: 'Last week', visitors: '', views: '' },
    { time: 'Last 7 days', visitors: '', views: '' },
    { time: 'Last 30 days', visitors: '', views: '' },
    { time: 'Last 60 days', visitors: '', views: '' },
    { time: 'Last 90 days', visitors: '', views: '' },
    { time: 'Last 12 months', visitors: '', views: '' },
    { time: 'This year (Jan-Today)', visitors: '', views: '' },
    { time: 'Last year', visitors: '', views: '' },
    { time: 'Total', visitors: '', views: '' }
  ];

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th isNumeric>Visitors</Th>
            <Th isNumeric>Views</Th>
          </Tr>
        </Thead>
        <Tbody>
          {trafficData.map((data, index) => (
            <Tr key={index}>
              <Td>{data.time}</Td>
              <Td isNumeric>{data.visitors}</Td>
              <Td isNumeric>{data.views}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TrafficDataTable;
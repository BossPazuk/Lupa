// src/components/ReferralTable.tsx
import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react';

const ReferralTable: React.FC = () => {
  // Dummy data
  const data = [
    { website: 'Google', referrals: 10000 },
    { website: 'Facebook', referrals: 8000 },
    { website: 'Twitter', referrals: 6000 },
    { website: 'LinkedIn', referrals: 4000 },
    { website: 'Instagram', referrals: 3000 }
  ];

  return (
    <Box bg="white" borderRadius="md" boxShadow="md" p={6}>
      <Table variant="striped" colorScheme="gray" size="sm">
        <Thead>
          <Tr>
            <Th>Website</Th>
            <Th>Referrals</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.website}</Td>
              <Td>{item.referrals}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ReferralTable;
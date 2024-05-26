import React from 'react';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const LeadingReferralWebsites: React.FC = () => {
  const data = [
    { country: 'United States', referrals: 2345678 },
    { country: 'China', referrals: 1234567 },
    { country: 'Japan', referrals: 987654 },
    { country: 'Germany', referrals: 876543 },
    { country: 'United Kingdom', referrals: 765432 },
  ];

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Text fontSize="xl">Leading Referral Websites</Text>
      <Table mt={4}>
        <Thead>
          <Tr>
            <Th>Country</Th>
            <Th>Referrals</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td>{item.country}</Td>
              <Td>{item.referrals.toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default LeadingReferralWebsites;
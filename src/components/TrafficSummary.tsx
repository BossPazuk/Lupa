// src/components/TrafficSummary.tsx
import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import TitleBar from './TitleBar';
import OnlineUsersIndicator from './OnlineUsersIndicator';
import TrafficDataTable from './TrafficDataTable';

const TrafficSummary: React.FC = () => {
  const onlineUsers = 532; // Example number of online users

  return (
    <VStack spacing={4} p={4} borderWidth="1px" borderRadius="lg" bg="white" h="full">
      <TitleBar title="Traffic Summary" />
      <OnlineUsersIndicator usersCount={onlineUsers} />
      <Box flex="1" overflowY="auto">
        <TrafficDataTable />
      </Box>
    </VStack>
  );
};

export default TrafficSummary;
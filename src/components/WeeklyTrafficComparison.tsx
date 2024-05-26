// src/components/WeeklyTrafficComparison.tsx
import React from 'react';
import { VStack, Grid, GridItem, Text, Button, Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';
import TitleBar from './TitleBar';

const WeeklyTrafficComparison: React.FC = () => {
  // Example statistics - replace these with your actual dynamic data
  const stats = {
    onlineUsers: 532,  // Total online users for the week
    referrals: 147,
    visitors: 789,
    views: 1024
  };

  return (
    <VStack align="stretch" p={4} borderWidth="1px" borderRadius="lg" mb={4} bg="white">
      <TitleBar title="Weekly Traffic Comparison" />
      <StatGroup>
        <Stat p={4}>
          <StatLabel>Online Users This Week</StatLabel>
          <StatNumber>{stats.onlineUsers}</StatNumber>
          <Button size="sm" mt={2} colorScheme="green">Realtime</Button>
        </Stat>

        <Stat p={4}>
          <StatLabel>Referrals</StatLabel>
          <StatNumber>{stats.referrals}</StatNumber>
        </Stat>

        <Stat p={4}>
          <StatLabel>Visitors</StatLabel>
          <StatNumber>{stats.visitors}</StatNumber>
        </Stat>

        <Stat p={4}>
          <StatLabel>Views</StatLabel>
          <StatNumber>{stats.views}</StatNumber>
        </Stat>
      </StatGroup>
    </VStack>
  );
};

export default WeeklyTrafficComparison;
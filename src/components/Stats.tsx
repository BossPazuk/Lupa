// src/components/Stats.tsx
import React from 'react';
import { Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

interface StatsProps {
  data: {
    pageViews: number;
    uniqueVisitors: number;
    bounceRate: number;
  };
}

const Stats: React.FC<StatsProps> = ({ data }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <StatGroup>
        <Stat>
          <StatLabel>Page Views</StatLabel>
          <StatNumber>{data.pageViews}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Unique Visitors</StatLabel>
          <StatNumber>{data.uniqueVisitors}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            9.05%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Bounce Rate</StatLabel>
          <StatNumber>{data.bounceRate}%</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            3.48%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default Stats;
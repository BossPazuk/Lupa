import React from 'react';
import { Box, VStack, Grid, GridItem, Heading } from '@chakra-ui/react';
import TrafficSummary from '../components/TrafficSummary';
import WeeklyTrafficComparison from '../components/WeeklyTrafficComparison';
import DailyTrafficTrend from '../components/DailyTrafficTrend';

const Overview: React.FC = () => {
  return (
    <VStack spacing={0} align="stretch">
      <Box bg="white" p={4} boxShadow="sm">
        <Heading size="lg">Overview</Heading>
      </Box>

      <Box bg="gray.100" p={5} flex="1" w="100%">
        <Grid templateColumns="2fr 7fr" gap={6} h="calc(100vh - 100px)">
          <GridItem>
            <TrafficSummary />
          </GridItem>
          <GridItem>
            <Box h="100%" display="flex" flexDirection="column">
              <WeeklyTrafficComparison />
              <DailyTrafficTrend />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  );
};

export default Overview;
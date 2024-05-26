// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Overview from './pages/Overview';
import LeadingReferralWebsites from './pages/LeadingReferralWebsites';
import LeadingCountries from './pages/LeadingCountries';
import WebBrowserUsage from './pages/WebBrowserUsage';

const Main: React.FC = () => {
  return (
    <Router>
      <Box bg="gray.100" p={4}>
        <Flex gap={4} mb={6}>
          <Button as={Link} to="/" colorScheme="teal">
            Overview
          </Button>
          <Button as={Link} to="/leading-referral-websites" colorScheme="teal">
            Leading Referral Websites
          </Button>
          <Button as={Link} to="/leading-countries" colorScheme="teal">
            Leading Countries by Visitors Count
          </Button>
          <Button as={Link} to="/web-browser-usage" colorScheme="teal">
            Web Browser Usage Statistics
          </Button>
        </Flex>
        <Heading as="h1" size="lg" mb={6}>
          Website Statistics Dashboard
        </Heading>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/leading-referral-websites" element={<LeadingReferralWebsites />} />
          <Route path="/leading-countries" element={<LeadingCountries />} />
          <Route path="/web-browser-usage" element={<WebBrowserUsage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Main;

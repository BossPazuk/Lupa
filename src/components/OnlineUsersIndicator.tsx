// src/components/OnlineUsersIndicator.tsx
import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { FiCircle } from 'react-icons/fi';

const OnlineUsersIndicator: React.FC<{ usersCount: number }> = ({ usersCount }) => {
  return (
    <Box bg="green.100" p={2} borderRadius="md" mb={4}>
      <Flex alignItems="center">
        <Icon as={FiCircle} color="green.500" mr={2} />
        <Text fontSize="md">
          Online Users: {usersCount}
        </Text>
      </Flex>
    </Box>
  );
};

export default OnlineUsersIndicator;
// src/components/TitleBar.tsx
import React from 'react';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { MdAutorenew } from 'react-icons/md';

const TitleBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb={4}>
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <IconButton
        aria-label="Refresh Data"
        icon={<MdAutorenew />}
        onClick={() => console.log('Refresh data')}
        size="sm"
        variant="ghost"
      />
    </Flex>
  );
};

export default TitleBar;
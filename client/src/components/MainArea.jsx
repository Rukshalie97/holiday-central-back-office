import React from 'react';
import { Text, Flex, HStack } from '@chakra-ui/react';

const MainArea = () => {
  return (
    <Flex
      as='main'
      w='full'
      h='full'
      bg='white'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      position='relative'
      borderRadius='3xl'
    >
      <Text fontSize={100} color='gray.300'>
        Main
      </Text>
    </Flex>
  );
};

export default MainArea;

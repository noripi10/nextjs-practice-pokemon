import { Box, Flex, HStack, Spacer, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const Nav: FC = () => {
  return (
    <Box position={'sticky'} top={0} zIndex={10}>
      <HStack px={2} minH={'60px'} bgColor={'blackAlpha.800'} align={'center'}>
        <Box pr={4}>
          <Text fontWeight={'bold'} fontSize={'lg'}>
            Recoil + Practice App
          </Text>
        </Box>

        <Text>with Pokemon Api</Text>
      </HStack>
    </Box>
  );
};

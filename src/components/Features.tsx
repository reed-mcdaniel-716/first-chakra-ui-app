import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  HStack,
  StackProps,
  Stack,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <ArrowRightIcon boxSize="22px" />
      <Text as="i" fontSize="20" color="brand.aliceBlue">
        {children}
      </Text>
    </HStack>
  );
};

function Features() {
  return (
    <Box
      maxW="994px"
      margin="auto"
      mt="-256px"
      borderRadius="12px"
      overflow="hidden"
    >
      <Flex>
        <Box bg="brand.savoyBlue" p="60px" minW="480px">
          <Text fontSize="24px" fontWeight="800" color="brand.richBlack">
            All-access Membership
          </Text>
          <Heading as="h3" fontSize="60px" mt="16px" color="brand.richBlack">
            $20
          </Heading>
          <Text
            color="brand.aliceBlue"
            fontSize="18px"
            fontWeight="500"
            mt="8px"
          >
            billed monthly
          </Text>
          <Button
            size="lg"
            mt="24px"
            w="282px"
            color="brand.richBlack"
            bg="brand.aliceBlue"
          >
            Join
          </Button>
        </Box>
        <Box p="60px" bg="brand.murrey" color="brand.aliceBlue" minW="520px">
          <Text fontSize="24px" fontWeight="800">
            Fully Equipt With:
          </Text>
          <Stack as="ul" spacing="20px" pt="24px">
            <ListItem>Speedbags and heavybags</ListItem>
            <ListItem>Two regulation rings</ListItem>
            <ListItem>Cardio equiptment</ListItem>
            <ListItem>Weight training room</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Features;

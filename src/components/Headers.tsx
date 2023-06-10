import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';

function Header() {
  return (
    <Box pb="28" as="section">
      <Box bg="brand.richBlack" pt="90px" pb="198px" px="8">
        <Stack alignItems="center">
          <Heading
            fontWeight="extrabold"
            fontSize="5xl"
            color="brand.aliceBlue"
          >
            Reed's Boxing Club
          </Heading>
          <Text
            as="i"
            fontWeight="medium"
            fontSize="2xl"
            pt="4"
            color="brand.aliceBlue"
            alignContent="center"
          >
            Grand Opening Coming Soon!
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default Header;

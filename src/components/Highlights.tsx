import React, { ElementType } from 'react';
import { Box, HStack, Text, StackProps, Icon } from '@chakra-ui/react';
import { EmailIcon, MoonIcon, TimeIcon } from '@chakra-ui/icons';

interface HighlightProps extends StackProps {
  icon: ElementType;
}
export const Highlight = (props: HighlightProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack spacing="24px" {...rest}>
      <Icon color="brand.richBlack" as={icon} boxSize="6" />
      <Text
        color="brand.richBlack"
        textAlign="left"
        fontSize="18"
        fontWeight="700"
      >
        {children}
      </Text>
    </HStack>
  );
};
function Highlights() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="32px">
      <HStack px="48px" spacing="20px">
        <Highlight icon={MoonIcon}>Evening and night classes</Highlight>
        <Highlight icon={TimeIcon}>
          Flexible schedule for 1:1 training
        </Highlight>
        <Highlight icon={EmailIcon}>Contact us by e-mail</Highlight>
      </HStack>
    </Box>
  );
}

export default Highlights;

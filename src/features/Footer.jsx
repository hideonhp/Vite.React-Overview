import { HStack, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <HStack justify="center" h={100} bg="secondary">
      <Text as="span" color="primary.light">
        What are you looking for :v
      </Text>
    </HStack>
  );
}

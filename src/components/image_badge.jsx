import PropTypes from "prop-types";
import { Flex, Heading } from "@chakra-ui/react";

export function Badge({ bg, child }) {
  return (
    <Flex justify={"center"} alignItems={"center"}>
      <Heading
        size={"sm"}
        bg={bg || "purple"}
        color="white"
        borderRadius={3}
        px={3}
        py={3}
        w={130}
        textAlign="Center"
      >
        {child || "Null detecter"}
      </Heading>
    </Flex>
  );
}

Badge.propTypes = {
  bg: PropTypes.string.isRequired,
  child: PropTypes.string.isRequired,
};

export default Badge;

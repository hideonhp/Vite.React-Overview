import ImageSlider from "@/components/image_slider";
import certData from "@/data/cert.json";
import PropTypes from "prop-types";
import { Badge as CustomBadge } from "@/components/image_badge";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Flex, Heading, Wrap, Box, Text, WrapItem } from "@chakra-ui/react";

export function Cert() {
  const Container = ({ children }) => (
    <Flex
      flexWrap="wrap"
      maxWidth={350}
      overflow="auto"
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  );
  Container.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const Item = ({ children }) => (
    <Box m="5px" display="flex" alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
  Item.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [projects] = useState(certData);
  const { t } = useTranslation("home");
  const renderProject = ({ id, images, title, description, technologies }) => {
    return (
      <Wrap maxWidth={350} align="center" direction={["column"]} key={id}>
        <ImageSlider imageList={images} />
        <Wrap direction={["column"]}>
          <Container>
            <Heading size="md" color="secondary">
              <WrapItem
                display={"inline-block"}
                bg="primary.dark"
                w={25}
                h={1}
                mr={3}
                verticalAlign="middle"
              />
              {title}{" "}
              <WrapItem
                display={"inline-block"}
                bg="primary.dark"
                w={25}
                h={1}
                mr={3}
                verticalAlign="middle"
              />
            </Heading>
          </Container>
          <Container>
            <Text>{description}</Text>
          </Container>
        </Wrap>
        <Container>
          {technologies.map((tech) => {
            return (
              <Item key={tech.id}>
                {tech.label && (
                  <CustomBadge bg={tech.label} child={tech.label} />
                )}
              </Item>
            );
          })}
        </Container>
      </Wrap>
    );
  };
  return (
    <Flex mt={12} direction={"column"} w="100%">
      <Heading>{t("cert")}</Heading>
      <Wrap justify="center" align="center" spacing={4}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
}

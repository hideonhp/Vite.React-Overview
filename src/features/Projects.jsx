import ImageSlider from "@/components/image_slider";
import projectsData from "@/data/projects.json";
import PropTypes from "prop-types";
import { Badge as CustomBadge } from "@/components/image_badge";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Flex,
  Heading,
  Wrap,
  Box,
  Text,
  Stack,
  WrapItem,
} from "@chakra-ui/react";

export function Projects() {
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

  const [projects] = useState(projectsData);
  const { t } = useTranslation("home");
  const renderProject = ({ id, images, title, description, technologies }) => {
    return (
      <Stack align="center" direction={["column"]} spacing="24px" key={id}>
        <ImageSlider imageList={images} />
        <Wrap maxWidth={350} direction={["column"]}>
          <Container>
            <Heading size="md" color="secondary" key="heading">
              <WrapItem
                display={"inline-block"}
                bg="primary.dark"
                w={25}
                h={1}
                mr={3}
                verticalAlign="middle"
                key={`heading_${id}_start`}
              />
              {title}{" "}
              <WrapItem
                display={"inline-block"}
                bg="primary.dark"
                w={25}
                h={1}
                mr={3}
                verticalAlign="middle"
                key={`heading_${id}_end`}
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
      </Stack>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading>{t("latestProjects")}</Heading>
      <Wrap justify="center" align="center" mt={10} spacing={16}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
}

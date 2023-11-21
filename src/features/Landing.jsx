import humanImg from "@/assets/images/human.png";
import contactImg from "@/assets/images/contact.png";
import { Badge as CustomBadge } from "@/components/image_badge";
import {
  Flex,
  Image,
  Heading,
  Text,
  Box,
  Wrap,
  WrapItem,
  Badge,
  Link,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SKILLS = [
  { id: 1, label: "React" },
  { id: 2, label: "JavaScript" },
  { id: 3, label: "Appium" },
  { id: 4, label: "Jmeter" },
  { id: 5, label: "Selenium" },
];

export function Landing() {
  const { t } = useTranslation("home");
  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", xl: "7xl" }}
        color="secondary"
        whiteSpace="pre-line"
      >
        {t("greetings")}
        <Text as="span" color="primary.dark">
          .
        </Text>
      </Heading>
      <Text fontSize="lg" color="secondary">
        {t("iAm")}{" "}
        <Text as="span" fontWeight="bold">
          {" " + t("job")}
        </Text>{" "}
        <br /> {t("location")}
      </Text>
      <HStack>
        <Image src={contactImg} h={8} />
        <Link
          href={
            "mailto:hideonhp@gmail.com?subject=Contacting you from your portfolio for hiring purpose"
          }
          fontWeight={"bold"}
          fontSize={"lg"}
          textColor={"olive"}
        >
          {t("contactMe")}
        </Link>
        <Text as="span" color="primary.dark">
          ---
        </Text>
        <Link href="https://github.com/hideonhp" isExternal>
          <Icon as={BsGithub} w={8} h={8} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/b%C3%B9i-ti%E1%BA%BFn-297595195/"
          isExternal
        >
          <Icon as={BsLinkedin} w={8} h={8} color="blue" bg="aliceblue" />
        </Link>
      </HStack>
      <Wrap mt={12}>
        {SKILLS.map((skill) => {
          return (
            <WrapItem key={skill.id}>
              {skill.label && (
                <CustomBadge bg={skill.label} child={skill.label} />
              )}
            </WrapItem>
          );
        })}
      </Wrap>
    </Box>
  );
  const badgeExperience = (
    <Badge bg="primary.light" borderRadius={7} p={3} textAlign="center">
      <Text fontSize="xl">{new Date().getFullYear() - 2021}</Text>
      <Text>{t("yoe")}</Text>
    </Badge>
  );
  const rightSection = (
    <Box mt={{ base: 10, md: 0 }}>
      <Flex justify="flex-end">{badgeExperience}</Flex>
      <Image src={humanImg} w={400} />
    </Box>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-evenly"
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
}

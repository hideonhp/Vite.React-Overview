import logoImg from "@/assets/images/logo.png";
import flagEnImg from "@/assets/images/flag-en.png";
import flagVnImg from "@/assets/images/flag-vn.png";
import { Flex, HStack, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { i18n } = useTranslation("home");
  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "vi" : "en");
  };
  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack>
        <Image
          onClick={switchLanguage}
          pl={20}
          src={i18n.language === "en" ? flagEnImg : flagVnImg}
          h={8}
          cursor="pointer"
        />
      </HStack>
    </Flex>
  );
}

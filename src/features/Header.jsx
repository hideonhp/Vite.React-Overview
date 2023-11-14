import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagEnImg from "@/assets/images/flag-en.png";

export function Header() {
  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack>
        <Image src={bubbleImg} h={10} />
        <Link
          href={
            "mailto:hideonhp@gmail.com?subject=Contacting you from your portfolio for hiring purpose"
          }
          fontWeight={"bold"}
          fontSize={"lg"}
        >
          Hire Tien
        </Link>
        <Image pl={20} src={flagEnImg} h={8} cursor="pointer" />
      </HStack>
    </Flex>
  );
}

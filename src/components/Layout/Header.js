import {Box, Flex, IconButton, useDisclosure, Heading, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavLink from "../CommonLib/NavLink";
import MobileDrawerMenu from "./MobileDrawerMenu";

export const navLinks = [
  { path: "/", text: "Úvodní stránka" },
  { path: "/sluzby", text: "Služby" },
  { path: "/cenik", text: "Ceník" },
  { path: "/kontakt", text: "Kontakt" }
]

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Box as="header" bg="white" shadow="md" px={4}>
      <Flex h={20} alignItems="center"
        justifyContent="space-between"
        maxW="1200px" mx="auto" position="sticky"
        top="0" zIndex="20"
      >
        <Flex alignItems="center">
          <Image src="images/komora-danovych-poradcu-logo.png" w={{ base: "15%", md: "10%" }} />
          {/* <Image src="images/logo-da.png" w={{ base: "15%", md: "20%" }} pl="20px" /> */}
          <Box fontWeight="bold" fontSize="lg" ml={4}>
            <Heading size="md">Ing. Jana Dachsová</Heading>
            <Heading size="xs" color="gray">Daňová poradkyně</Heading>
          </Box>
        </Flex>

        {/* Desktop Navigation */}
        <Flex as="nav" gap={8} display={{ base: "none", md: "flex" }} whiteSpace="nowrap">
          {navLinks.map(({ path, text }, index) => <NavLink key={index} path={path}>{text}</NavLink>)}
        </Flex>

        {/* Mobile Menu Icon */}
        <IconButton size="md" icon={<HamburgerIcon />} aria-label="Open menu" display={{ md: "none" }} onClick={onOpen} />
      </Flex>
      <MobileDrawerMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;

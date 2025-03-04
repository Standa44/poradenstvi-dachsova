import {
  Box, Flex, IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure, VStack, Heading, Image
} from "@chakra-ui/react";
import Link from 'next/link';
import { HamburgerIcon } from "@chakra-ui/icons";

const HeaderComponent = () => {
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
          <Box fontWeight="bold" fontSize="lg" ml={4}>
            <Heading size="md">Ing. Jana Dachsová</Heading>
            <Heading size="xs" color="gray">Daňová poradkyně</Heading>
          </Box>
        </Flex>

        {/* Desktop Navigation */}
        <Flex as="nav" gap={8} display={{ base: "none", md: "flex" }} whiteSpace="nowrap">
          <Link href="/" fontWeight="medium" mx={2}>
            Úvodní stránka
          </Link>
          <Link href="sluzby" fontWeight="medium" mx={2}>
            Služby
          </Link>
          <Link href="cenik" fontWeight="medium" mx={2}>
            Ceník
          </Link>
          <Link href="kontakt" fontWeight="medium" mx={2}>
            Kontakt
          </Link>
        </Flex>

        {/* Mobile Menu Icon */}
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          display={{ md: "none" }}
          onClick={onOpen}
        />
      </Flex>

      {/* Mobile Drawer Menu */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xs" // Nastavuje šířku - xs je zhruba 3/4 stránky
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack as="nav" spacing={4} mt={10}>
              <Link href="/" passHref onClick={onClose} fontSize="lg">
                Domů
              </Link>
              <Link href="/sluzby" passHref onClick={onClose} fontSize="lg">
                Služby
              </Link>
              <Link href="/cenik" passHref onClick={onClose} fontSize="lg">
                Ceník
              </Link>
              <Link href="/kontakt" passHref onClick={onClose} fontSize="lg">
                Kontakt
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HeaderComponent;

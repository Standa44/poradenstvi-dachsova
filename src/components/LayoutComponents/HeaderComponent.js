import {
  Box, Flex, IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton,
  useDisclosure, VStack, Heading, Image,
  Text
} from "@chakra-ui/react";
import Link from 'next/link';
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router';


const HeaderComponent = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navLinks = [
    { path: "/", text: "Úvodní stránka" },
    { path: "/sluzby", text: "Služby" },
    { path: "/cenik", text: "Ceník" },
    { path: "/kontakt", text: "Kontakt" }
  ];


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
          {navLinks.map((link, index) => {
            const isActive = router.asPath === link.path;

            return (
              <Link key={index} href={link.path} mx={2}>
                <Text
                  position="relative"
                  fontWeight="medium"
                  color={isActive ? "black.600" : "gray.600"}
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "0",
                    width: isActive ? "100%" : "0",
                    height: "2px",
                    bg: "gray.600",
                    transition: "width 0.3s",
                  }}
                  _hover={{ color: "gray.600", _after: { width: "100%" } }}
                >
                  {link.text}
                </Text>
              </Link>
            );
          })}
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
              {navLinks.map((link, index) => (<Link href={link.path} onClick={onClose} fontSize="lg" key={index}>{link.text}</Link>))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default HeaderComponent;

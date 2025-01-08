import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  
  const HeaderComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box as="header" bg="white" shadow="md" px={4} >
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          maxW="1200px"
          mx="auto" position="sticky" top="0" zIndex="20"
        >
          {/* Logo */}
          <Box fontWeight="bold" fontSize="lg">
            Daňové poradenství Dachsová
          </Box>
  
          {/* Desktop Navigation */}
          <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
            <Link href="#domu" fontWeight="medium">
              Úvodní stránka
            </Link>
            <Link href="#o-me" fontWeight="medium">
              O mě
            </Link>
            <Link href="#sluzby" fontWeight="medium">
              Naše služby
            </Link>
            <Link href="#kontakt" fontWeight="medium">
              Kontakty
            </Link>
          </HStack>
  
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
                <Link href="#home" onClick={onClose} fontSize="lg">
                  Domů
                </Link>
                <Link href="#services" onClick={onClose} fontSize="lg">
                  Služby
                </Link>
                <Link href="#contact" onClick={onClose} fontSize="lg">
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
  
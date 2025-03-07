import { priceList } from "@/components/Cenik/priceList";
import PriceSection from "@/components/Cenik/PriceSection";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const Cenik = () => {

  return (
    <Box maxW="800px" mx="auto" p={6}>
      <Heading size="lg" textAlign="center" mb={4}>Ceník služeb</Heading>
      <Text mb={6}>Ceny jsou stanovené individuálně po dohodě s klientem podle množství dokladů, odvětví a náročnosti zpracování.</Text>
      <PriceSection priceList={priceList} />

      <Text mt={6} fontWeight="bold">Nabízím jistotu a spolehlivost za příznivou cenu. Těším se na spolupráci s Vámi.</Text>
      <Flex w="100%" justifyContent="flex-end">
        <Button as="a" href="/kontakt" colorScheme="blue" size="lg" mt={4}>
          Nechte si vypracovat cenový návrh
        </Button>
      </Flex>
    </Box>
  );
};

export default Cenik;

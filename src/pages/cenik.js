import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Cenik = () => {
  return (
    <Box maxW="800px" mx="auto" p={6}>
      <Heading size="lg" textAlign="center" mb={4}>Ceník služeb</Heading>
      {/*<Heading as="h1" size="xl" mb={4}>Ceník služeb</Heading>*/}
      <Text mb={6}>
        Ceny jsou stanovené individuálně po dohodě s klientem podle množství
        dokladů, odvětví a náročnosti zpracování.
      </Text>

      <Stack spacing={4}>
        <Box p={4} shadow="md" borderRadius="lg" bg="gray.50">
          <Heading size="md" mb={2}>
            Vedení daňové evidence
          </Heading>
          <Text>🔹 Neplátce DPH - měsíční paušál od <b>700 Kč</b></Text>
          <Text>🔹 Plátce DPH - měsíční paušál od <b>1.000 Kč</b></Text>
        </Box>

        <Box p={4} shadow="md" borderRadius="lg" bg="gray.50">
          <Heading size="md" mb={2}>
            Vedení účetnictví
          </Heading>
          <Text>🔹 Neplátce DPH - měsíční paušál od <b>1.000 Kč</b></Text>
          <Text>🔹 Plátce DPH - měsíční paušál od <b>1.500 Kč</b></Text>
        </Box>

        <Box p={4} shadow="md" borderRadius="lg" bg="gray.50">
          <Heading size="md" mb={2}>
            Mzdová agenda
          </Heading>
          <Text>🔹 Měsíční paušál za 1 zaměstnance od <b>300 Kč</b></Text>
        </Box>

        <Box p={4} shadow="md" borderRadius="lg" bg="gray.50">
          <Heading size="md" mb={2}>
            Roční závěrka a přiznání k dani z příjmů
          </Heading>
          <Text>🔹 Paušální výdaje - od <b>1.500 Kč</b></Text>
          <Text>🔹 Daňová evidence - od <b>2.500 Kč</b></Text>
          <Text>🔹 Účetnictví - od <b>3.000 Kč</b></Text>
        </Box>

        <Box p={4} shadow="md" borderRadius="lg" bg="gray.50">
          <Heading size="md" mb={2}>
            Daňová přiznání
          </Heading>
          <Text>🔹 Silniční daň - <b>500 Kč</b></Text>
          <Text>🔹 Ostatní daně - od <b>1.000 Kč</b></Text>
          <Text>🔹 Poradenství a konzultace - <b>od 350 Kč / hod</b></Text>
        </Box>
      </Stack>

      <Text mt={6} fontWeight="bold">
        Nabízím jistotu a spolehlivost za příznivou cenu. Těším se na spolupráci s Vámi.
      </Text>
      <Flex w="100%" justifyContent="flex-end">
        <Button as="a" href="/kontakt" colorScheme="blue" size="lg" mt={4}>
          Nechte si vypracovat cenový návrh
        </Button>
      </Flex>
    </Box>
  );
};

export default Cenik;

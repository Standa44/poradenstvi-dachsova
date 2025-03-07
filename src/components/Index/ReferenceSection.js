import { Box, Text, Image, Flex } from "@chakra-ui/react";

const references = [
  {
    logo: "https://dummyimage.com/250x250",
    text: "Dlouhodobá spolupráce s firmou XYZ. Spolehlivé účetní služby a individuální přístup.",
  },
  {
    logo: "https://dummyimage.com/250x250",
    text: "Profesionální vedení účetnictví pro naši společnost. Doporučujeme!",
  },
  {
    logo: "https://dummyimage.com/250x250",
    text: "Kvalitní zpracování daňových přiznání a poradenství na vysoké úrovni.",
  },
  {
    logo: "https://dummyimage.com/250x250",
    text: "Kvalitní zpracování daňových přiznání a poradenství na vysoké úrovni.",
  },
];

const ReferenceSection = () => {

  return (
    <Flex maxW="1200px" mx="auto" p={6} flexWrap="wrap" justify="center" gap={6}>
      {references.map((ref, index) => (
        <Box key={index} p={5} shadow="md" maxW="350px" borderRadius="lg" bg="gray.50" textAlign="center" flex="1 1 300px" >
          <Image src={ref.logo} alt="Logo firmy" mx="auto" mb={4} maxH="50px" />
          <Text>{ref.text}</Text>
        </Box>
      ))}
    </Flex>

  );
};

export default ReferenceSection;

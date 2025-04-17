import PriceBox from "@/components/Cenik/PriceBox";
import RedirectButton from "@/components/CommonLib/RedirectButton";
import SubPageHeading from "@/components/CommonLib/SubPageHeading";
import { Box, Text } from "@chakra-ui/react";

const priceList = [
  {
    heading: "Vedení daňové evidence",
    items: [
      { text: "Neplátce DPH - měsíční paušál od", price: "700 Kč" },
      { text: "Plátce DPH - měsíční paušál od", price: "1.000 Kč" }
    ]
  },
  {
    heading: "Vedení účetnictví",
    items: [
      { text: "Neplátce DPH - měsíční paušál od", price: "1.000 Kč" },
      { text: "Plátce DPH - měsíční paušál od", price: "1.500 Kč" }
    ]
  },
  {
    heading: "Mzdová agenda",
    items: [
      { text: "Měsíční paušál za 1 zaměstnance od", price: "300 Kč" }
    ]
  },
  {
    heading: "Roční závěrka a přiznání k dani z příjmů",
    items: [
      { text: "Paušální výdaje - od", price: "1.500 Kč" },
      { text: "Daňová evidence - od", price: "2.500 Kč" },
      { text: "Účetnictví - od", price: "3.000 Kč" }
    ]
  },
  {
    heading: "Daňová přiznání",
    items: [
      { text: "Silniční daň", price: "500 Kč" },
      { text: "Ostatní daně - od", price: "1.000 Kč" },
      { text: "Poradenství a konzultace -", price: "od 350 Kč / hod" }
    ]
  }
];

const Cenik = () => {
  return (
    <Box maxW="800px" mx="auto" p={6}>
      <SubPageHeading id="cenik">Ceník služeb</SubPageHeading>
      <Text>Ceny jsou stanovené individuálně po dohodě s klientem podle množství dokladů, odvětví a náročnosti zpracování.</Text>
      <PriceBox priceList={priceList} />
      <RedirectButton href="/kontakt">Nechte si vypracovat cenový návrh</RedirectButton>
    </Box>
  );
};

export default Cenik;

import { Box, Button, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    //console.log(Object.fromEntries(data.entries()))

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((result) => {
        console.log("Email odeslán:", result.text)
        setFormData({ name: "", email: "", message: "" })
      })
      .catch((error) => {
        console.error("Chyba při odesílání emailu:", error)
      })
  }

  return (
    <Box id="contact" bg="blue.400" py={10} textAlign="center">
      <Box w={{ base: "70%", md: "50%" }} mx="auto">
        <Box mb={6} color="white">
          <Heading size="lg">Kontaktujte nás</Heading>
          <Text fontSize="sm">Máte otázky? Napište nám pomocí formuláře níže.</Text>
        </Box>
        <Box bg="gray.50" p={6} borderRadius="md" boxShadow="md" >
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Jméno</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vaše jméno"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  //type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Váš email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Zpráva</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Vaše zpráva"
                  rows={5}
                />
              </FormControl>

              <Button type="submit" colorScheme="blue" width="full">
                Odeslat
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box >
  );
};

export default ContactForm;

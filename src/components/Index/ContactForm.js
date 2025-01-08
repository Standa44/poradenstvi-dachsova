import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((result) => {
        console.log("Email odeslán:", result.text);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Chyba při odesílání emailu:", error);
      });
  };

  return (
    <Box bg="gray.50" p={6} borderRadius="md" boxShadow="md" w={{ base: "100%", md: "50%" }} mx="auto">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {/* Jméno */}
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

          {/* Email */}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Váš email"
            />
          </FormControl>

          {/* Zpráva */}
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

          {/* Tlačítko */}
          <Button type="submit" colorScheme="blue" width="full">
            Odeslat
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;

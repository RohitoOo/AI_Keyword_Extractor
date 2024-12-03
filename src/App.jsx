import React, { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import KeyWordsModel from "./components/KeyWordsModel";
const App = () => {
  const dummyData =
    "The OpenAI API provides developers access to state-of-the-art language models, including GPT (Generative Pre-trained Transformer), for a wide range of applications such as natural language understanding, content generation, summarization, translation, and conversational AI. It supports customization through fine-tuning and allows seamless integration into various software systems using RESTful endpoints. The API is designed to be flexible and scalable, making it suitable for startups, enterprises, and individual developers aiming to enhance their applications with AI-powered capabilities.";

  const [keywords, setKeywords] = useState(dummyData);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const extractKeyWords = async (text) => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt:
            "Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n" +
            text +
            "",
          temperature: 0.5,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.8,
          presence_penalty: 0.0,
        }),
      };
      const response = await fetch(
        import.meta.env.VITE_OPENAI_API_URL,
        options
      );

      const json = await response.json();
      const data = json.choices[0].text.trim();
      console.log({ data });
      setKeywords(data);
      setLoading(false);
      setIsOpen(true);
    } catch (error) {
      setLoading(false);
      setIsOpen(true);
      setKeywords(dummyData);
      console.log("API REQUEST FAILED", error);
    }
  };
  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeyWords={extractKeyWords} />
        {isOpen ? <KeyWordsModel keywords={keywords} loading={loading} /> : ""}
        <Footer />
      </Container>
    </Box>
  );
};

export default App;

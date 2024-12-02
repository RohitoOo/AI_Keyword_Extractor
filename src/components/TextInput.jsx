import React, { useState } from "react";
import { Textarea, Button } from "@chakra-ui/react";
const TextInput = ({ extractKeyWords }) => {
  const [text, setText] = useState("");
  const submitText = () => {
    if (text === "") {
      window.alert("Please enter form text to extract keywords");
    } else {
      extractKeyWords(text);
    }
  };

  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        Extract Key Words
      </Button>
    </>
  );
};

export default TextInput;

import React from "react";
import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.svg";
const Header = () => {
  return (
    <>
      <Image src={logo} s alt="logo" width={100} marginBottom="1rem" />
      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize="25" textAlign="Center">
        Paste your keyword below and w'll extract the keywords for you.
      </Text>
    </>
  );
};

export default Header;

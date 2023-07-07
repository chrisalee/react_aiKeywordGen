import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.png";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" borderRadius="50%" border="3px solid black"/>
      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Enter the text you want analyzied for keywords
      </Text>
    </>
  );
};

export default Header;

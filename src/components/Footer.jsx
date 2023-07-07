import  { Box, Text, Image, Flex } from '@chakra-ui/react'
import logo from '../assets/ai.jpg';

const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent="center" alignItems="center">
            <Image src={logo} marginRight={1} width={100} height={100} borderRadius="50%" objectFit="cover"/>
            <Text>
                Open AI
            </Text>
        </Flex>
    </Box>
  )
}

export default Footer
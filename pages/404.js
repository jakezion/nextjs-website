import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button, useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" ailgn="center">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button color={useColorModeValue("white","black")} bg={useColorModeValue("monoPurple","monoYellow")}>Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
export { getInitialProps } from '../components/chakra'
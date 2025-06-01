
import React from "react"
import { Box, Flex, HStack, Link, Button, Spacer, Text } from "@chakra-ui/react"

const Navbar: React.FC = () => {
  return (
    <Box bg="pink.500" px={6} py={4} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          🍰 CakeStore
        </Text>
        <Spacer />
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "pink.200" }}>
            Home
          </Link>
          <Link href="#cakes" _hover={{ textDecoration: "none", color: "pink.200" }}>
            Cakes
          </Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "pink.200" }}>
            About
          </Link>
        </HStack>
        <Spacer />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button variant="outline" colorScheme="whiteAlpha" size="sm">
            Login
          </Button>
          <Button colorScheme="whiteAlpha" size="sm">
            Sign Up
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar

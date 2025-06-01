
import React from "react"
import { Box, Flex, HStack, Link, Button, Text } from "@chakra-ui/react"

const Navbar: React.FC = () => {
  return (
    <Box bg="pink.500" color="white" px={6} py={4}>
      <Flex align="center" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">
          🍰 CakeStore
        </Text>
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "pink.100" }}>
            Home
          </Link>
          <Link href="#cakes" _hover={{ textDecoration: "none", color: "pink.100" }}>
            Cakes
          </Link>
          <Link href="#contact" _hover={{ textDecoration: "none", color: "pink.100" }}>
            Contact
          </Link>
        </HStack>
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button variant="outline" size="sm" color="white" _hover={{ bg: "pink.600" }}>
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

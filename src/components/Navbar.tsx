
"use client"

import type React from "react"
import { useState } from "react"
import { Box, Flex, HStack, VStack, Text, Button, Badge } from "@chakra-ui/react"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount] = useState(3)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Box bg="white" boxShadow="0 2px 10px rgba(0,0,0,0.1)" position="sticky" top={0} zIndex={1000}>
      <Box maxW="7xl" mx="auto" px={4}>
        <Flex align="center" justify="space-between" py={4}>
          {/* Logo */}
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="black" color="black">
            🍰 CakeStore
          </Text>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            <Text
              as="a"
              href="#home"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              cursor="pointer"
              _hover={{ color: "pink.500" }}
              transition="color 0.2s"
            >
              Home
            </Text>
            <Text
              as="a"
              href="#cakes"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              cursor="pointer"
              _hover={{ color: "pink.500" }}
              transition="color 0.2s"
            >
              Cakes
            </Text>
            <Text
              as="a"
              href="#custom"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              cursor="pointer"
              _hover={{ color: "pink.500" }}
              transition="color 0.2s"
            >
              Custom Orders
            </Text>
            <Text
              as="a"
              href="#about"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              cursor="pointer"
              _hover={{ color: "pink.500" }}
              transition="color 0.2s"
            >
              About
            </Text>
            <Text
              as="a"
              href="#contact"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              cursor="pointer"
              _hover={{ color: "pink.500" }}
              transition="color 0.2s"
            >
              Contact
            </Text>
          </HStack>

          {/* Desktop Actions */}
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            <Button bg="gray.100" color="black" size="md" _hover={{ bg: "gray.200" }}>
              🔍 Search
            </Button>

            <Button bg="gray.100" color="black" size="md" _hover={{ bg: "gray.200", color: "pink.500" }}>
              ❤️ Wishlist
            </Button>

            <Button
              bg="black"
              color="white"
              size="md"
              borderRadius="full"
              position="relative"
              _hover={{ bg: "gray.800" }}
            >
              🛒 Cart
              {cartCount > 0 && (
                <Badge
                  position="absolute"
                  top="-8px"
                  right="-8px"
                  bg="pink.500"
                  color="white"
                  borderRadius="full"
                  fontSize="xs"
                  minW="20px"
                  h="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="outline"
              borderColor="black"
              color="black"
              borderRadius="full"
              _hover={{ bg: "black", color: "white" }}
            >
              👤 Login
            </Button>
          </HStack>

          {/* Mobile Menu Button */}
          <HStack spacing={2} display={{ base: "flex", md: "none" }}>
            <Button
              bg="black"
              color="white"
              size="sm"
              borderRadius="full"
              position="relative"
              _hover={{ bg: "gray.800" }}
            >
              🛒
              {cartCount > 0 && (
                <Badge
                  position="absolute"
                  top="-8px"
                  right="-8px"
                  bg="pink.500"
                  color="white"
                  borderRadius="full"
                  fontSize="xs"
                  minW="18px"
                  h="18px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Button bg="gray.100" color="black" size="sm" onClick={toggleMenu} _hover={{ bg: "gray.200" }}>
              {isOpen ? "✕" : "☰"}
            </Button>
          </HStack>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <VStack spacing={4} align="stretch">
              {/* Mobile Navigation Links */}
              <VStack spacing={2} align="stretch">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Cakes", href: "#cakes" },
                  { label: "Custom Orders", href: "#custom" },
                  { label: "About", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map((item, index) => (
                  <Text
                    key={index}
                    as="a"
                    href={item.href}
                    p={3}
                    borderRadius="md"
                    color="black"
                    fontWeight="semibold"
                    cursor="pointer"
                    _hover={{
                      bg: "pink.50",
                      color: "pink.600",
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Text>
                ))}
              </VStack>

              {/* Mobile Actions */}
              <VStack spacing={3} pt={4} borderTop="1px solid" borderColor="gray.200">
                <HStack spacing={3} w="full">
                  <Button bg="gray.100" color="black" flex={1} _hover={{ bg: "black", color: "white" }}>
                    🔍 Search
                  </Button>
                  <Button bg="gray.100" color="black" flex={1} _hover={{ bg: "black", color: "white" }}>
                    ❤️ Wishlist
                  </Button>
                </HStack>

                <Button
                  variant="outline"
                  borderColor="black"
                  color="black"
                  w="full"
                  borderRadius="full"
                  _hover={{ bg: "black", color: "white" }}
                >
                  👤 Login / Sign Up
                </Button>
              </VStack>
            </VStack>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Navbar

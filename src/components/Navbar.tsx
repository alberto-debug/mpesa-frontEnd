
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Box, Flex, HStack, VStack, Text, Button, Badge } from "@chakra-ui/react"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount] = useState(3)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <Box bg="pink.600" boxShadow="0 2px 10px rgba(0,0,0,0.1)" position="sticky" top={0} zIndex={1000}>
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
          </HStack>

          {/* Desktop Actions */}
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
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

            <Button
              bg="gray.100"
              color="black"
              size="sm"
              onClick={toggleMenu}
              _hover={{ bg: "gray.200" }}
              zIndex={1200}
            >
              {isOpen ? "✕" : "☰"}
            </Button>
          </HStack>
        </Flex>

        {/* Mobile Side Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <Box
              position="fixed"
              top="0"
              left="0"
              w="100vw"
              h="100vh"
              bg="blackAlpha.600"
              zIndex={1001}
              onClick={() => setIsOpen(false)}
              display={{ md: "none" }}
            />

            {/* Side Drawer */}
            <Box
              position="fixed"
              top="0"
              right="0"
              height="100vh"
              width="250px"
              bg="white"
              boxShadow="-4px 0 15px rgba(0,0,0,0.2)"
              zIndex={1002}
              display={{ md: "none" }}
              transition="transform 0.3s ease"
              transform={isOpen ? "translateX(0)" : "translateX(100%)"}
              overflowY="auto"
            >
              <Box p={6}>
                {/* Menu Header */}
                <Flex justify="space-between" align="center" mb={6}>
                  <Text fontSize="xl" fontWeight="bold" color="pink.600">
                    Menu
                  </Text>
                  <Button size="sm" variant="ghost" onClick={() => setIsOpen(false)} _hover={{ bg: "pink.50" }}>
                    ✕
                  </Button>
                </Flex>

                {/* Divider */}
                <Box h="1px" bg="gray.200" my={4} />

                {/* Navigation Links */}
                <VStack spacing={1} align="stretch">
                  {[
                    { label: "Home", href: "#home", icon: "🏠" },
                    { label: "Cakes", href: "#cakes", icon: "🍰" },
                    { label: "Custom Orders", href: "#custom", icon: "✨" },
                  ].map((item, index) => (
                    <Button
                      key={index}
                      as="a"
                      href={item.href}
                      variant="ghost"
                      justifyContent="flex-start"
                      py={6}
                      borderRadius="md"
                      color="gray.800"
                      fontWeight="medium"
                      leftIcon={<Box mr={2}>{item.icon}</Box>}
                      _hover={{
                        bg: "pink.50",
                        color: "pink.600",
                        transform: "translateX(4px)",
                      }}
                      transition="all 0.2s"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </VStack>

                {/* Divider */}
                <Box h="1px" bg="gray.200" my={4} />

                {/* Actions */}
                <VStack spacing={4} align="stretch">
                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    leftIcon={<Box mr={2}>❤️</Box>}
                    py={6}
                    color="gray.800"
                    _hover={{ bg: "pink.50", color: "pink.600" }}
                  >
                    Wishlist
                  </Button>

                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    leftIcon={<Box mr={2}>👤</Box>}
                    py={6}
                    color="gray.800"
                    _hover={{ bg: "pink.50", color: "pink.600" }}
                  >
                    Login / Sign Up
                  </Button>
                </VStack>

                {/* Bottom Action */}
                <Box position="absolute" bottom="0" left="0" right="0" p={6}>
                  <Button
                    bg="pink.600"
                    color="white"
                    w="full"
                    py={6}
                    borderRadius="md"
                    _hover={{ bg: "pink.700" }}
                    boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                  >
                    🛒 View Cart ({cartCount})
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}

export default Navbar

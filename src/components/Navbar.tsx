
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Box, Flex, HStack, VStack, Text, Button, Badge } from "@chakra-ui/react"

// Add this style tag for animations
const styles = `
  @keyframes ripple {
    to {
      width: 45px;
      height: 45px;
      opacity: 0;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
  }
`

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

  // Add this useEffect to inject styles
  useEffect(() => {
    const styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
    return () => document.head.removeChild(styleSheet)
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
              _hover={{ bg: "gray.800", transform: "scale(1.05)" }}
              transition="all 0.2s"
              boxShadow="0 4px 12px rgba(0,0,0,0.3)"
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
                  boxShadow="0 2px 8px rgba(0,0,0,0.2)"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Modern Hamburger Button */}
            <Box position="relative">
              <Button
                onClick={toggleMenu}
                bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                color="white"
                w="36px"
                h="36px"
                size="sm"
                borderRadius="xl"
                p={0}
                _hover={{
                  transform: "scale(1.05) rotate(5deg)",
                  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
                }}
                _active={{
                  transform: "scale(0.95)",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                boxShadow="0 4px 15px rgba(102, 126, 234, 0.3)"
                border="2px solid"
                borderColor="whiteAlpha.300"
                zIndex={1200}
                position="relative"
                overflow="hidden"
              >
                {/* Animated Background Gradient */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bg="linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)"
                  opacity={isOpen ? 0 : 1}
                  transition="opacity 0.3s"
                />

                {/* Custom Hamburger Lines */}
                <VStack spacing="3px" position="relative" zIndex={1}>
                  <Box
                    w="14px"
                    h="1.5px"
                    bg="white"
                    borderRadius="full"
                    transform={isOpen ? "rotate(45deg) translateY(4.5px)" : "rotate(0)"}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    boxShadow="0 1px 3px rgba(0,0,0,0.3)"
                  />
                  <Box
                    w="14px"
                    h="1.5px"
                    bg="white"
                    borderRadius="full"
                    opacity={isOpen ? 0 : 1}
                    transform={isOpen ? "scale(0)" : "scale(1)"}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    boxShadow="0 1px 3px rgba(0,0,0,0.3)"
                  />
                  <Box
                    w="14px"
                    h="1.5px"
                    bg="white"
                    borderRadius="full"
                    transform={isOpen ? "rotate(-45deg) translateY(-4.5px)" : "rotate(0)"}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    boxShadow="0 1px 3px rgba(0,0,0,0.3)"
                  />
                </VStack>

                {/* Ripple Effect */}
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  w="0"
                  h="0"
                  bg="whiteAlpha.300"
                  borderRadius="full"
                  transform="translate(-50%, -50%)"
                  animation={isOpen ? "ripple 0.6s ease-out" : "none"}
                />
              </Button>

              {/* Floating Indicator */}
              {isOpen && (
                <Box
                  position="absolute"
                  top="-1px"
                  right="-1px"
                  w="8px"
                  h="8px"
                  bg="green.400"
                  borderRadius="full"
                  border="2px solid white"
                  boxShadow="0 2px 8px rgba(0,0,0,0.2)"
                  animation="pulse 2s infinite"
                />
              )}
            </Box>
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

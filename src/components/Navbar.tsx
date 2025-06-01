
"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  Button,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Badge,
  Icon,
  Divider,
  Container,
} from "@chakra-ui/react"
import { HamburgerIcon, SearchIcon, BellIcon } from "@chakra-ui/icons"
import { FaShoppingCart, FaUser, FaHeart, FaPhone, FaEnvelope } from "react-icons/fa"

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cartCount] = useState(3) // Mock cart count

  return (
    <Box bg="white" boxShadow="0 2px 20px rgba(0,0,0,0.1)" position="sticky" top={0} zIndex={1000}>
      <Container maxW="7xl">
        <Flex align="center" justify="space-between" py={4} px={{ base: 4, md: 0 }}>
          {/* Logo */}
          <Flex align="center" gap={3}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="black" color="black">
              🍰 CakeStore
            </Text>
            <Badge colorScheme="pink" fontSize="xs" px={2} py={1} borderRadius="full">
              Premium
            </Badge>
          </Flex>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", lg: "flex" }}>
            <Link
              href="#home"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              _hover={{
                textDecoration: "none",
                color: "pink.500",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s"
            >
              Home
            </Link>
            <Link
              href="#cakes"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              _hover={{
                textDecoration: "none",
                color: "pink.500",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s"
            >
              Our Cakes
            </Link>
            <Link
              href="#custom"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              _hover={{
                textDecoration: "none",
                color: "pink.500",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s"
            >
              Custom Orders
            </Link>
            <Link
              href="#about"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              _hover={{
                textDecoration: "none",
                color: "pink.500",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              fontSize="md"
              fontWeight="semibold"
              color="black"
              _hover={{
                textDecoration: "none",
                color: "pink.500",
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s"
            >
              Contact
            </Link>
          </HStack>

          {/* Desktop Action Buttons */}
          <HStack spacing={3} display={{ base: "none", lg: "flex" }}>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
              size="md"
              color="black"
              _hover={{
                bg: "gray.100",
                transform: "scale(1.05)",
              }}
              transition="all 0.2s"
            />

            <IconButton
              aria-label="Notifications"
              icon={<BellIcon />}
              variant="ghost"
              size="md"
              color="black"
              position="relative"
              _hover={{
                bg: "gray.100",
                transform: "scale(1.05)",
              }}
              transition="all 0.2s"
            >
              <Badge
                position="absolute"
                top="-1"
                right="-1"
                bg="red.500"
                color="white"
                borderRadius="full"
                fontSize="xs"
                minW="18px"
                h="18px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                2
              </Badge>
            </IconButton>

            <IconButton
              aria-label="Wishlist"
              icon={<Icon as={FaHeart} />}
              variant="ghost"
              size="md"
              color="black"
              _hover={{
                bg: "gray.100",
                color: "pink.500",
                transform: "scale(1.05)",
              }}
              transition="all 0.2s"
            />

            <Button
              leftIcon={<Icon as={FaShoppingCart} />}
              bg="black"
              color="white"
              size="md"
              borderRadius="full"
              px={6}
              position="relative"
              _hover={{
                bg: "gray.800",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              transition="all 0.2s"
            >
              Cart
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
              leftIcon={<Icon as={FaUser} />}
              variant="outline"
              borderColor="black"
              color="black"
              size="md"
              borderRadius="full"
              px={6}
              _hover={{
                bg: "black",
                color: "white",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              transition="all 0.2s"
            >
              Login
            </Button>
          </HStack>

          {/* Mobile Menu Button */}
          <HStack spacing={2} display={{ base: "flex", lg: "none" }}>
            <Button
              leftIcon={<Icon as={FaShoppingCart} />}
              bg="black"
              color="white"
              size="sm"
              borderRadius="full"
              px={4}
              position="relative"
              _hover={{
                bg: "gray.800",
                transform: "scale(1.05)",
              }}
              transition="all 0.2s"
            >
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

            <IconButton
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              size="md"
              color="black"
              onClick={onOpen}
              _hover={{
                bg: "gray.100",
                transform: "scale(1.05)",
              }}
              transition="all 0.2s"
            />
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay bg="blackAlpha.600" />
        <DrawerContent bg="white">
          <DrawerCloseButton color="black" size="lg" />
          <DrawerHeader borderBottomWidth="1px" borderColor="gray.100">
            <Flex align="center" gap={3}>
              <Text fontSize="xl" fontWeight="black" color="black">
                🍰 CakeStore
              </Text>
              <Badge colorScheme="pink" fontSize="xs" px={2} py={1} borderRadius="full">
                Premium
              </Badge>
            </Flex>
          </DrawerHeader>

          <DrawerBody p={0}>
            <VStack spacing={0} align="stretch">
              {/* User Section */}
              <Box p={6} bg="gray.50">
                <VStack spacing={4}>
                  <Box
                    w="60px"
                    h="60px"
                    bg="black"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaUser} color="white" boxSize={6} />
                  </Box>
                  <VStack spacing={2}>
                    <Text fontWeight="bold" color="black">
                      Welcome Back!
                    </Text>
                    <HStack spacing={3}>
                      <Button size="sm" bg="black" color="white" borderRadius="full" px={6}>
                        Login
                      </Button>
                      <Button size="sm" variant="outline" borderColor="black" color="black" borderRadius="full" px={6}>
                        Sign Up
                      </Button>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>

              <Divider />

              {/* Navigation Links */}
              <VStack spacing={0} align="stretch" py={4}>
                {[
                  { label: "Home", href: "#home", icon: "🏠" },
                  { label: "Our Cakes", href: "#cakes", icon: "🍰" },
                  { label: "Custom Orders", href: "#custom", icon: "✨" },
                  { label: "About Us", href: "#about", icon: "👥" },
                  { label: "Contact", href: "#contact", icon: "📞" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    p={4}
                    display="flex"
                    alignItems="center"
                    gap={3}
                    color="black"
                    fontWeight="semibold"
                    _hover={{
                      bg: "pink.50",
                      color: "pink.600",
                      textDecoration: "none",
                    }}
                    transition="all 0.2s"
                    onClick={onClose}
                  >
                    <Text fontSize="lg">{item.icon}</Text>
                    <Text>{item.label}</Text>
                  </Link>
                ))}
              </VStack>

              <Divider />

              {/* Quick Actions */}
              <VStack spacing={0} align="stretch" py={4}>
                <Text px={4} pb={2} fontSize="sm" fontWeight="bold" color="gray.600" textTransform="uppercase">
                  Quick Actions
                </Text>
                {[
                  { label: "Search Cakes", icon: SearchIcon },
                  { label: "My Wishlist", icon: FaHeart },
                  { label: "Notifications", icon: BellIcon },
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    justifyContent="flex-start"
                    leftIcon={<Icon as={item.icon} />}
                    color="black"
                    fontWeight="semibold"
                    p={4}
                    borderRadius={0}
                    _hover={{
                      bg: "pink.50",
                      color: "pink.600",
                    }}
                    transition="all 0.2s"
                  >
                    {item.label}
                  </Button>
                ))}
              </VStack>

              <Divider />

              {/* Contact Info */}
              <Box p={4}>
                <Text fontSize="sm" fontWeight="bold" color="gray.600" textTransform="uppercase" mb={3}>
                  Get in Touch
                </Text>
                <VStack spacing={2} align="start">
                  <HStack spacing={3}>
                    <Icon as={FaPhone} color="pink.500" />
                    <Text fontSize="sm" color="black">
                      (555) 123-CAKE
                    </Text>
                  </HStack>
                  <HStack spacing={3}>
                    <Icon as={FaEnvelope} color="pink.500" />
                    <Text fontSize="sm" color="black">
                      hello@cakestore.com
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar

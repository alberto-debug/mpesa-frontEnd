import type React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  SimpleGrid,
  Flex,
  Container,
  Badge,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { FaStar, FaHeart, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cakes = [
  {
    name: "Chocolate Heaven",
    image:
      "https://images.unsplash.com/photo-1612197593458-c0a9e5c507e2?auto=format&fit=crop&w=800&q=80",
    price: "$28.99",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    description: "Rich, decadent chocolate layers with premium cocoa",
  },
  {
    name: "Vanilla Dream",
    image:
      "https://images.unsplash.com/photo-1606312616077-d6f1f363e25e?auto=format&fit=crop&w=800&q=80",
    price: "$24.99",
    rating: 4.6,
    reviews: 89,
    badge: "Popular",
    description: "Classic vanilla sponge with silky buttercream",
  },
  {
    name: "Strawberry Bliss",
    image:
      "https://images.unsplash.com/photo-1604908177742-f96cde062bfa?auto=format&fit=crop&w=800&q=80",
    price: "$32.99",
    rating: 4.9,
    reviews: 156,
    badge: "New",
    description: "Fresh strawberry cake with cream cheese frosting",
  },
];

const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" minH="100vh" bg="white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box flex="1">
        {/* Hero Section */}
        <Box
          bgGradient="linear(135deg, pink.400 0%, purple.500 50%, orange.400 100%)"
          py={{ base: 20, md: 32 }}
          px={{ base: 4, md: 8 }}
          textAlign="center"
          position="relative"
          overflow="hidden"
        >
          {/* Background decoration */}
          <Box
            position="absolute"
            top="-50%"
            left="-50%"
            w="200%"
            h="200%"
            bgGradient="radial(circle, whiteAlpha.100 1px, transparent 1px)"
            backgroundSize="50px 50px"
            opacity={0.3}
          />

          <Container maxW="5xl" position="relative" zIndex={1}>
            <VStack spacing={8}>
              <Badge
                bg="whiteAlpha.300"
                color="black"
                px={6}
                py={3}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
                backdropFilter="blur(10px)"
                border="2px solid"
                borderColor="whiteAlpha.400"
                textShadow="0 1px 2px rgba(255,255,255,0.3)"
              >
                ✨ Handcrafted Since 2020
              </Badge>

              <VStack spacing={6}>
                <Heading
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  fontWeight="900"
                  color="black"
                  lineHeight="0.9"
                  textShadow="0 4px 20px rgba(255,255,255,0.5)"
                >
                  Welcome to
                  <br />
                  CakeStore
                </Heading>
                <Text
                  fontSize="6xl"
                  role="img"
                  aria-label="cake"
                  filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                >
                  🍰
                </Text>
              </VStack>

              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="black"
                maxW="2xl"
                lineHeight="tall"
                fontWeight="medium"
                textShadow="0 2px 4px rgba(255,255,255,0.3)"
              >
                Discover delicious homemade cakes crafted with love and the
                finest ingredients for every celebration
              </Text>

              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                pt={4}
              >
                <Button
                  bg="black"
                  color="white"
                  size="lg"
                  px={10}
                  py={7}
                  fontSize="lg"
                  fontWeight="bold"
                  borderRadius="full"
                  leftIcon={<Icon as={FaShoppingCart} />}
                  rightIcon={<Icon as={FaArrowRight} />}
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    bg: "gray.800",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                >
                  Browse Our Cakes
                </Button>

                <Button
                  variant="outline"
                  borderColor="black"
                  color="black"
                  bg="whiteAlpha.200"
                  size="lg"
                  px={10}
                  py={7}
                  fontSize="lg"
                  fontWeight="bold"
                  borderRadius="full"
                  borderWidth="2px"
                  leftIcon={<Icon as={FaHeart} />}
                  _hover={{
                    bg: "whiteAlpha.300",
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  backdropFilter="blur(10px)"
                >
                  Custom Orders
                </Button>
              </Stack>
            </VStack>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box py={16} bg="white" borderBottom="1px solid" borderColor="gray.100">
          <Container maxW="6xl">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              {[
                { number: "2,500+", label: "Happy Customers" },
                { number: "50+", label: "Cake Varieties" },
                { number: "4.8★", label: "Average Rating" },
                { number: "24/7", label: "Fresh Baking" },
              ].map((stat, index) => (
                <VStack key={index} spacing={3} textAlign="center">
                  <Heading size="xl" color="pink.600" fontWeight="black">
                    {stat.number}
                  </Heading>
                  <Text fontSize="md" color="black" fontWeight="medium">
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Featured Cakes */}
        <Box px={{ base: 4, md: 8 }} py={{ base: 16, md: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <VStack spacing={16}>
              <VStack spacing={6} textAlign="center">
                <Badge
                  bg="purple.500"
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="md"
                  fontWeight="bold"
                  boxShadow="0 4px 12px rgba(128, 90, 213, 0.3)"
                >
                  🏆 Customer Favorites
                </Badge>
                <Heading
                  fontSize={{ base: "3xl", md: "5xl" }}
                  color="black"
                  fontWeight="black"
                  textAlign="center"
                >
                  Our Popular Cakes
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="black"
                  maxW="2xl"
                  textAlign="center"
                  lineHeight="tall"
                >
                  Each cake is handcrafted with premium ingredients and baked
                  fresh daily
                </Text>
              </VStack>

              <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 3 }}
                spacing={10}
                w="full"
              >
                {cakes.map((cake, index) => (
                  <Box
                    key={index}
                    bg="white"
                    borderRadius="3xl"
                    overflow="hidden"
                    boxShadow="0 10px 40px rgba(0,0,0,0.1)"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{
                      transform: "translateY(-12px)",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    position="relative"
                  >
                    {/* Badge */}
                    <Badge
                      position="absolute"
                      top={4}
                      left={4}
                      bg={
                        cake.badge === "Best Seller"
                          ? "red.500"
                          : cake.badge === "Popular"
                            ? "purple.500"
                            : "green.500"
                      }
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="bold"
                      zIndex={2}
                      boxShadow="0 4px 12px rgba(0,0,0,0.2)"
                    >
                      {cake.badge}
                    </Badge>

                    {/* Heart Icon */}
                    <Box
                      position="absolute"
                      top={4}
                      right={4}
                      p={3}
                      bg="white"
                      borderRadius="full"
                      cursor="pointer"
                      zIndex={2}
                      boxShadow="0 4px 12px rgba(0,0,0,0.15)"
                      _hover={{
                        bg: "pink.50",
                        transform: "scale(1.1)",
                      }}
                      transition="all 0.2s"
                    >
                      <Icon
                        as={FaHeart}
                        color="gray.400"
                        _hover={{ color: "pink.500" }}
                        boxSize={4}
                      />
                    </Box>

                    <Image
                      src={cake.image || "/placeholder.svg"}
                      alt={cake.name}
                      objectFit="cover"
                      w="100%"
                      h={{ base: "240px", md: "280px" }}
                      loading="lazy"
                    />

                    <VStack p={8} spacing={5} align="stretch">
                      <VStack spacing={3} align="start" w="full">
                        <HStack justify="space-between" w="full" align="start">
                          <Heading
                            size="lg"
                            color="black"
                            fontWeight="bold"
                            lineHeight="short"
                          >
                            {cake.name}
                          </Heading>
                          <Text
                            fontSize="2xl"
                            fontWeight="black"
                            color="pink.600"
                          >
                            {cake.price}
                          </Text>
                        </HStack>

                        <HStack spacing={2} align="center">
                          <HStack spacing={1}>
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                as={FaStar}
                                color={
                                  i < Math.floor(cake.rating)
                                    ? "yellow.400"
                                    : "gray.300"
                                }
                                boxSize={4}
                              />
                            ))}
                          </HStack>
                          <Text fontSize="sm" color="black" fontWeight="medium">
                            {cake.rating} ({cake.reviews} reviews)
                          </Text>
                        </HStack>
                      </VStack>

                      <Text color="black" fontSize="md" lineHeight="tall">
                        {cake.description}
                      </Text>

                      <Button
                        bg="black"
                        color="white"
                        size="lg"
                        w="full"
                        borderRadius="xl"
                        py={6}
                        fontSize="md"
                        fontWeight="bold"
                        leftIcon={<Icon as={FaShoppingCart} />}
                        _hover={{
                          bg: "gray.800",
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                        }}
                        transition="all 0.2s"
                      >
                        Add to Cart
                      </Button>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>

              <Button
                variant="outline"
                borderColor="black"
                color="black"
                bg="white"
                size="lg"
                px={12}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                borderRadius="full"
                borderWidth="2px"
                rightIcon={<Icon as={FaArrowRight} />}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                  bg: "gray.50",
                }}
                transition="all 0.3s"
              >
                View All Cakes
              </Button>
            </VStack>
          </Container>
        </Box>

        {/* Call to Action Section */}
        <Box
          bgGradient="linear(135deg, pink.500 0%, purple.600 100%)"
          py={{ base: 20, md: 28 }}
          color="white"
          position="relative"
          overflow="hidden"
        >
          {/* Background decoration */}
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgGradient="radial(circle at 30% 70%, whiteAlpha.200 0%, transparent 50%)"
          />

          <Container
            maxW="4xl"
            textAlign="center"
            position="relative"
            zIndex={1}
          >
            <VStack spacing={10}>
              <VStack spacing={6}>
                <Heading
                  fontSize={{ base: "3xl", md: "5xl" }}
                  fontWeight="black"
                  lineHeight="shorter"
                  textShadow="0 4px 20px rgba(0,0,0,0.3)"
                  color="black"
                >
                  Ready to Order Your Perfect Cake?
                </Heading>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="grey"
                  maxW="2xl"
                  lineHeight="tall"
                  fontWeight="medium"
                  textShadow="0 2px 4px rgba(0,0,0,0.2)"
                >
                  Custom orders available for weddings, birthdays, and all
                  special occasions
                </Text>
              </VStack>

              <Stack direction={{ base: "column", sm: "row" }} spacing={6}>
                <Button
                  bg="black"
                  color="white"
                  size="lg"
                  px={12}
                  py={7}
                  fontSize="lg"
                  fontWeight="bold"
                  borderRadius="full"
                  _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    bg: "gray.800",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  boxShadow="0 10px 30px rgba(0,0,0,0.2)"
                >
                  Order Now
                </Button>
                <Button
                  variant="outline"
                  borderColor="white"
                  color="white"
                  bg="blackAlpha.500"
                  size="lg"
                  px={12}
                  py={7}
                  fontSize="lg"
                  fontWeight="bold"
                  borderRadius="full"
                  borderWidth="2px"
                  _hover={{
                    bg: "whiteAlpha.300",
                    transform: "translateY(-3px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  backdropFilter="blur(10px)"
                >
                  Custom Order
                </Button>
              </Stack>
            </VStack>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Flex>
  );
};

export default Dashboard;

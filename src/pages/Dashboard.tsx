
import React from "react"
import { Box, Heading, SimpleGrid, Text, Image, Stack } from "@chakra-ui/react"

const cakes = [
  { name: "Chocolate Cake", price: "$20", image: "https://source.unsplash.com/300x200/?chocolate-cake" },
  { name: "Vanilla Delight", price: "$18", image: "https://source.unsplash.com/300x200/?vanilla-cake" },
  { name: "Strawberry Cream", price: "$22", image: "https://source.unsplash.com/300x200/?strawberry-cake" },
]

const Dashboard: React.FC = () => {
  return (
    <Box p={6}>
      <Heading mb={4}>Available Cakes</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {cakes.map((cake, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={cake.image} alt={cake.name} objectFit="cover" />
            <Box p={4}>
              <Stack spacing={1}>
                <Text fontWeight="bold">{cake.name}</Text>
                <Text color="gray.600">{cake.price}</Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard

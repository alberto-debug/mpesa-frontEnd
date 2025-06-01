
import React from "react"
import { Box, Stack, Text, Link } from "@chakra-ui/react"

const Footer: React.FC = () => {
  return (
    <Box bg="pink.600" color="white" py={6} mt={10}>
      <Stack spacing={2} align="center">
        <Text fontWeight="bold">CakeStore © {new Date().getFullYear()}</Text>
        <Stack direction="row" spacing={4}>
          <Link href="#privacy" _hover={{ color: "pink.100" }}>Privacy</Link>
          <Link href="#terms" _hover={{ color: "pink.100" }}>Terms</Link>
          <Link href="#contact" _hover={{ color: "pink.100" }}>Contact</Link>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer

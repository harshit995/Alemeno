import React from "react";
import { Box, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({ name, thumbnail, description, _id, instructor }) => {
  return (
    <ChakraLink as={Link} to={`/${_id}`} textDecoration="none">
      <Box
        maxW={{ base: "100%", sm: "sm", md: "md", lg: "lg" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        p={4}
        borderColor="teal.500"
        _hover={{
          cursor: "pointer",
          boxShadow: "0 8px 16px rgba(0, 128, 128, 0.5)",
          transition: "0.3s",
        }}
      >
        <Image
          src={thumbnail}
          alt={name}
          height={{ base: "200px", sm: "150px", md: "200px", lg: "250px" }}
          objectFit="cover"
          mx="auto"
          display="block"
        />
        <Box
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          fontSize={{ base: "lg", sm: "md", md: "lg", lg: "xl" }}
        >
          {name}
        </Box>
        <Text
          color="gray.500"
          fontSize={{ base: "sm", sm: "xs", md: "sm", lg: "md" }}
        >
          {description}
        </Text>
        <Text
          color="gray.500"
          fontSize={{ base: "sm", sm: "xs", md: "sm", lg: "md" }}
        >
          {instructor}
        </Text>
      </Box>
    </ChakraLink>
  );
};

export default Card;

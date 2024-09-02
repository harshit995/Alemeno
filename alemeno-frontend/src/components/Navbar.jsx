import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, IconButton, useDisclosure, Stack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bgGradient="linear(to-r, #0f2027, #203a43, #2c5364)" color="white" px={4} py={3}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" letterSpacing="wider">
            MyCourses
          </Text>
        </Box>

        <Flex alignItems="center" display={{ base: "none", md: "flex" }} flex={1} justifyContent="center">

          <Link to="/">
            <Text fontSize="lg" mx={2}>
              All Courses
            </Text>
          </Link>
          <Link to="/dashboard">
            <Text fontSize="lg" mx={2}>
              Student Dashboard
            </Text>
          </Link>
        </Flex>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link to="/">
              <Text fontSize="lg">All Courses</Text>
            </Link>
            <Link to="/dashboard">
              <Text fontSize="lg">Student Dashboard</Text>
            </Link>
            <InputGroup mt={4}>
              <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
              <Input type="text" placeholder="Search courses..." bg="white" color="black" borderRadius="full" />
            </InputGroup>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}


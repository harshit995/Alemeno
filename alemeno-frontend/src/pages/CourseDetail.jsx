import React from "react";
import {
  Box,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  const courseDetail = useSelector((store) =>
    store.courses.filter((el) => el._id === id)
  )[0];

  if (!courseDetail) {
    return <div>Course not found</div>;
  }

  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    thumbnail,
    duration,
    schedule,
    location,
    prerequisites,
    syllabus,
  } = courseDetail;

  return (
    <Flex direction="column" align="center" minH="100vh">
      <Box
        p={4}
        pt={10}
        maxW={{ base: "100%", md: "xl" }}
        mx="auto"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="xl"
        borderColor="teal.500"
        w="100%"
      >
        <Image
          src={thumbnail}
          alt={name}
          objectFit="cover"
          mb={4}
          mx="auto"
          display="block"
        />

        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mb={2}
          color="teal.700"
          fontFamily="heading"
        >
          {name}
        </Text>
        <hr />
        <Flex direction={"column"} alignItems={"flex-start"}>
          <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
            <b>Instructor:</b> {instructor}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
            <b>Description:</b> {description}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
            <b>Enrollment Status:</b> {enrollmentStatus}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
            <b>Course Duration: </b>
            {duration}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
            <b>Schedule:</b> {schedule}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
            <b> Location:</b> {location}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
            <b>Pre-requisites:</b> {prerequisites?.join(", ")}
          </Text>
        </Flex>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color="teal.700"
                    fontWeight="semibold"
                  >
                    Syllabus
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={2}>
              {syllabus?.map((item) => (
                <Box key={item._id} mb={2}>
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    Week {item.week}: {item.topic} - {item.content}
                  </Text>
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default CourseDetail;

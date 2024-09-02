import { Flex, Input, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorAction, successAction } from "../redux/action";
import Card from "./Card";

const CourseListing = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((el) => {
        dispatch(successAction(el.data.courses));
        console.log(el.data.courses);
      })
      .catch((error) => {
        dispatch(errorAction());
      });
  }, [dispatch]);

  const courses = useSelector((store) => store.courses);
  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Flex direction="column" align="center" mt={4} width="100%">
      <Input
        type="text"
        placeholder="Search here by instructor, description,  or name "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={4}
        maxWidth="400px"
        mx="auto"
      />

      <Flex justifyContent="center" width="100%">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={4}
          width="100%"
        >
          {filteredCourses.map((el) => (
            <Card {...el} key={el._id} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default CourseListing;

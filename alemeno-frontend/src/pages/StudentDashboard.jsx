// import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
// import React from "react";
// import { useSelector } from "react-redux";
// import MarkCompletedButton from "../components/MarkCompletedButton";

// const StudentDashboard = () => {
//   const courses = useSelector((store) => store.courses);

//   const uniqueStudentNames = {};

//   courses.forEach((course) => {
//     const students = course.students || [];
//     students.forEach((student) => {
//       const studentName = student.name;

//       if (!uniqueStudentNames.hasOwnProperty(studentName)) {
//         uniqueStudentNames[studentName] = true;
//       }
//     });
//   });

//   const studentNames = Object.keys(uniqueStudentNames);

//   let studentCourses = {};
//   courses.forEach((course) => {
//     const students = course.students;
//     students.forEach((student) => {
//       const studentName = student.name;
//       const courseName = course.name;

//       if (studentCourses[studentName] === undefined) {
//         studentCourses[studentName] = new Set([courseName]);
//       } else {
//         studentCourses[studentName].add(courseName);
//       }
//     });
//   });

//   const tableWidth = useBreakpointValue({
//     base: "100%",
//     sm: "80%",
//     md: "80%",
//     lg: "100%",
//   });

//   return (
//     <Flex overflowX="auto" margin={"auto"} justifyContent={"center"}>
//       <table style={{ borderCollapse: "collapse", width: tableWidth }}>
//         <thead>
//           <tr>
//             <th
//               style={{
//                 border: "2px solid teal",
//                 borderRadius: "10px",
//                 padding: "10px",
//               }}
//             >
//               Student Name
//             </th>
//             <th
//               style={{
//                 border: "2px solid teal",
//                 borderRadius: "10px",
//                 padding: "10px",
//               }}
//             >
//               Courses
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(studentCourses).map(([studentName, courses], i) => (
//             <tr key={i}>
//               <td
//                 style={{
//                   border: "1px solid teal",
//                   borderRadius: "5px",
//                   padding: "10px",
//                 }}
//               >
//                 <Text fontWeight="bold">{studentName}</Text>
//               </td>
//               <td
//                 style={{
//                   border: "1px solid teal",
//                   borderRadius: "5px",
//                   padding: "10px",
//                 }}
//               >
//                 {Array.from(courses).map((course, j) => (
//                   <Flex
//                     key={j}
//                     gap={10}
//                     justifyContent={"space-evenly"}
//                     alignItems={"center"}
//                   >
//                     <Text pb={5} margin={"auto"}>
//                       {course}
//                     </Text>
//                     <MarkCompletedButton />
//                   </Flex>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Flex>
//   );
// };

// export default StudentDashboard;




import { Flex, Text, useBreakpointValue, Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import MarkCompletedButton from "../components/MarkCompletedButton";

const StudentDashboard = () => {
  const courses = useSelector((store) => store.courses);

  const uniqueStudentNames = {};

  courses.forEach((course) => {
    const students = course.students || [];
    students.forEach((student) => {
      const studentName = student.name;

      if (!uniqueStudentNames.hasOwnProperty(studentName)) {
        uniqueStudentNames[studentName] = true;
      }
    });
  });

  const studentNames = Object.keys(uniqueStudentNames);

  let studentCourses = {};
  courses.forEach((course) => {
    const students = course.students;
    students.forEach((student) => {
      const studentName = student.name;
      const courseName = course.name;

      if (studentCourses[studentName] === undefined) {
        studentCourses[studentName] = new Set([courseName]);
      } else {
        studentCourses[studentName].add(courseName);
      }
    });
  });

  const tableWidth = useBreakpointValue({
    base: "100%",
    sm: "80%",
    md: "80%",
    lg: "100%",
  });

  return (
    <Flex overflowX="auto" margin="auto" justifyContent="center" p={5} bg="gray.50" borderRadius="lg">
      <Box borderRadius="md" overflow="hidden" boxShadow="lg" bg="white" width={tableWidth}>
        <Table variant="striped" colorScheme="teal" size="md">
          <Thead bg="teal.500">
            <Tr>
              <Th
                color="white"
                fontSize="lg"
                textAlign="center"
                py={3}
                borderTopLeftRadius="md"
                borderBottomLeftRadius="md"
              >
                Student Name
              </Th>
              <Th
                color="white"
                fontSize="lg"
                textAlign="center"
                py={3}
                borderTopRightRadius="md"
                borderBottomRightRadius="md"
              >
                Courses
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(studentCourses).map(([studentName, courses], i) => (
              <Tr key={i} _hover={{ bg: "gray.100" }}>
                <Td
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="md"
                  p={4}
                  borderColor="teal.400"
                  borderWidth={1}
                >
                  {studentName}
                </Td>
                <Td
                  p={4}
                  borderColor="teal.400"
                  borderWidth={1}
                >
                  {Array.from(courses).map((course, j) => (
                    <Flex
                      key={j}
                      gap={4}
                      justifyContent="space-between"
                      alignItems="center"
                      mb={2}
                    >
                      <Text fontSize="md" flex="1">
                        {course}
                      </Text>
                      <MarkCompletedButton />
                    </Flex>
                  ))}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default StudentDashboard;

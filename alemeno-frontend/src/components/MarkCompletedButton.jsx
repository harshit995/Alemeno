
import { Button, Flex } from "@chakra-ui/react";

import { useState } from "react";

const MarkCompletedButton = ({ }) => {

  const [isCompleted, setIsCompleted] = useState(false);

  const handleClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <Flex align="center">
      <Button
        colorScheme={isCompleted ? "green" : "gray"}
        variant={isCompleted ? "solid" : "outline"}
        onClick={handleClick}
      >
        {isCompleted ? "COMPLETED" : "Mark Completed"}
      </Button>
    </Flex>
  );
};

export default MarkCompletedButton;


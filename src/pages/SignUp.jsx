import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Flex
        align-items="center"
        justify-content="cener"
        w={"50%"}
        m="auto"
        flexDirection="column"
      >
        <Box>
          <Text
            color="blue.500"
            fontSize={50}
            fontWeight={50}
            textAlign="center"
            gap={5}
          >
            Sign UP
          </Text>
          <FormControl>
            <Input my={5} variant="flushed" placeholder="username" />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                my={5}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="confirm password"
                my={5}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button>Sign Up</Button>
          </FormControl>
        </Box>
      </Flex>
    </>
  );
};

export default SignUp;

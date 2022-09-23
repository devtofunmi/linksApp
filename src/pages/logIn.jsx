import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");
  const [correctUserName, setCorrectUserName] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();
  const navigate = useNavigate();

  const showError = (m) => {
    toast({
      description: m,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setCorrectPassword(user.password);
    setCorrectUserName(user.userName);
  }, []);

  function handleForm() {
    setLoading(false);
    setTimeout(() => {
      if (!userName) {
        showError("enter username");
      } else if (userName != correctUserName) {
        showError("username does not match");
      } else if (!password) {
        showError("enter password");
      } else if (password != correctPassword) {
        showError("password does not match");
      } else {
        toast({
          description: "login successful",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/dashboard");
      }
    }, 1500);
    setLoading(true);
  }

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
            color="teal"
            fontSize={50}
            fontWeight={50}
            textAlign="center"
            gap={5}
          >
            LogIn
          </Text>
          <FormControl>
            <Input
              my={5}
              variant="flushed"
              placeholder="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                my={5}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button backgroundColor="teal" color="white" onClick={handleForm}>
              {loading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="teal"
                  size="md"
                />
              ) : (
                "continue"
              )}
            </Button>
          </FormControl>
        </Box>
      </Flex>
    </>
  );
};

export default LogIn;

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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function generateOtp() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
  const showError = (m) => {
    toast({
      description: m,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  function handleForm() {
    setLoading(true);
    setTimeout(() => {
      if (!userName) {
        showError("enter username");
      } else if (!password) {
        showError("enter password");
      } else if (!confirmPassword) {
        show("enter confirm password");
      } else if (password != confirmPassword) {
        showError("password does not match");
      } else {
        toast({
          description: "sign up successfull",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        const userInfo = {
          password,
          userName,
          confirmPassword,
          OTP: generateOtp(),
          isVerified: false,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(userInfo);
        navigate("/otp");
      }
      setLoading(false);
    }, 1500);
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
            color="blue.500"
            fontSize={50}
            fontWeight={50}
            textAlign="center"
            gap={5}
          >
            Sign UP
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
              <InputRightElement width="4.5rem"></InputRightElement>
            </InputGroup>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="confirm password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                my={5}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              backgroundColor="blue.500"
              color="white"
              onClick={handleForm}
            >
              {loading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
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

export default SignUp;

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  PinInput,
  PinInputField,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [correctOtp, setCorrectOtp] = useState("");
  const [userInfo, setUserInfo] = useState({});

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
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(userInfo);
    setCorrectOtp(userInfo.OTP);
    console.log(userInfo);
  }, []);

  function handleSubmit() {
    console.log(pin, correctOtp);
    setLoading(true);
    setTimeout(() => {
      if (!pin) {
        showError("enter your pin");
      } else if (pin != correctOtp) {
        showError("invalid otp");
      } else {
        toast({
          description: "your otp pin is correct",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/login");

        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            ...userInfo,
            isVerified: true,
            OTP: "",
          })
        );
      }
      setLoading(false);
    }, 1500);
  }
  return (
    <>
      <Flex
        align-items="center"
        justify-contents="center"
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
            VERIFY OTP
          </Text>
          <HStack marginTop={20}>
            <PinInput otp onChange={(otp) => setPin(otp)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button
            marginTop={30}
            backgroundColor="teal"
            color="white"
            onClick={handleSubmit}
            disabled={pin < 6 || loading}
          >
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="teal"
                size="md"
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Otp;

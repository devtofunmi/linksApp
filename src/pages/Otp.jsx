import React, { useState } from "react";
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
  return (
    <>
      <Flex
        align-items="center"
        justify-contents="cener"
        w={"50%"}
        m="auto"
        flexDirection="column"
      >
        <Box>
          <Text
            color="blue.500"
            fontSize={50}
            textAlign="center"
            fontFamily="sans-serif"
          >
            VERIFY OTP
          </Text>
          <HStack>
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
            backgroundColor="blue.500"
            color="white"
            // onClick={handleSubmit}
            disabled={pin < 6 || loading}
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
              "Submit"
            )}
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Otp;

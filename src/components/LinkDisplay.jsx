import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";

const LinkDisplay = () => {
  return (
    <>
      <Flex>
        <Box w={"50%"} m="auto" marginTop={20}>
          <Input
            my={5}
            variant="filled"
            placeholder="Filled"
            value={"twitter"}
            readOnly={true}
          />

          <Input
            variant="filled"
            placeholder="Filled"
            value={"https://www.twitter.com/codebreake.r"}
            readOnly={true}
          />
        </Box>
      </Flex>
    </>
  );
};

export default LinkDisplay;

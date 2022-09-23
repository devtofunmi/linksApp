import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

const LinkDisplay = ({ lid, link, linkTitle, deleteItem }) => {
  return (
    <>
      <Flex>
        <Box w={"50%"} m="auto" marginTop={20}>
          <Input
            my={5}
            variant="filled"
            placeholder="Filled"
            value={linkTitle}
            readOnly={true}
          />

          <Input
            variant="filled"
            placeholder="Filled"
            value={link}
            readOnly={true}
          />
          <Button onClick={() => deleteItem(lid)}>Delete</Button>
        </Box>
      </Flex>
    </>
  );
};

export default LinkDisplay;

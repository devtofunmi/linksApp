import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LinkDisplay from "../components/LinkDisplay";

const DashBoard = () => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [linkTitle, setLinkTitle] = useState("");
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("links")) {
      localStorage.setItem("links", JSON.stringify([]));
    } else {
      setLinks(JSON.parse(localStorage.getItem("links")));
    }
  }, []);

  const toast = useToast();
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
      if (!link) {
        showError("enter link");
      } else if (!linkTitle) {
        showError("enter link title");
      } else {
        toast({
          description: "link added successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        const newLink = {
          id: links.length + 1,
          link,
          linkTitle,
        };
        setLinks([...links, newLink]);
        localStorage.setItem("links", JSON.stringify([...links, newLink]));
        // console.log(dashBoardData);
      }

      setLoading(false);
    }, 1500);
  }

  const deleteLink = (id) => {
    const newLinksData = links.filter((li) => li.id !== id);
    setLinks(newLinksData);
    localStorage.setItem("links", JSON.stringify(newLinksData));
  };
  return (
    <>
      <Text
        color="teal"
        fontSize={50}
        fontWeight={50}
        textAlign="center"
        gap={5}
      >
        Dashboard
      </Text>
      <Flex
        align-items="center"
        justify-content="cener"
        textAlign="center"
        w={"50%"}
        m="auto"
        flexDirection="column"
      >
        <Box marginTop={20}>
          <Button
            size="md"
            height="48px"
            width="200px"
            colorScheme="teal"
            onClick={() => setShowLinkModal(!showLinkModal)}
          >
            {showLinkModal ? "Close Link" : "Add New Link"}
          </Button>
        </Box>
      </Flex>
      {showLinkModal && (
        <Box w={"50%"} m="auto">
          <Input
            my={5}
            variant="outline"
            placeholder="Link Title"
            onChange={(e) => {
              setLinkTitle(e.target.value);
            }}
          />
          <Input
            variant="filled"
            placeholder="Link address"
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
          <Button
            backgroundColor="teal"
            color="white"
            marginTop={5}
            onClick={handleForm}
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
              "Add"
            )}
          </Button>
        </Box>
      )}
      {links.length < 1 && "no link added"}
      {links.map((l) => (
        <LinkDisplay
          link={l.link}
          linkTitle={l.linkTitle}
          key={l.id}
          deleteItem={deleteLink}
          lid={l.id}
        />
      ))}
    </>
  );
};

export default DashBoard;

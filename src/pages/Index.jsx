import React, { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, Image, useColorMode, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun, FaUserCircle, FaSearch, FaEnvelope, FaBell, FaRegComment, FaRetweet, FaHeart, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [whispers, setWhispers] = useState([
    {
      id: 1,
      author: "Jane Doe",
      message: "Exploring Whisper and I love it! #firstwhisper",
      likes: 5,
      comments: 2,
      reposts: 1,
    },
    // More whispers can be added here
  ]);

  const handleNewWhisper = (e) => {
    e.preventDefault();
    // Logic for adding a new whisper would go here
  };

  return (
    <Container maxW="container.md" py={5}>
      <Flex justify="space-between" align="center" mb={5}>
        <Heading as="h1" size="lg">
          Whisper
        </Heading>
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound="true" size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
      </Flex>
      <Stack spacing={4}>
        <Flex>
          <FaUserCircle size="2em" />
          <Box ml={2}>
            <Text fontWeight="bold">User Name</Text>
            <Text fontSize="sm">Bio description here...</Text>
          </Box>
        </Flex>
        <FormControl as="form" onSubmit={handleNewWhisper}>
          <FormLabel htmlFor="whisper" srOnly>
            What's on your mind?
          </FormLabel>
          <Textarea id="whisper" placeholder="What's on your mind?" />
          <Button leftIcon={<FaFeatherAlt />} mt={2} colorScheme="blue" type="submit">
            Whisper
          </Button>
        </FormControl>
        {whispers.map((whisper) => (
          <Box key={whisper.id} p={4} shadow="md" borderWidth="1px">
            <Text fontWeight="bold">{whisper.author}</Text>
            <Text my={2}>{whisper.message}</Text>
            <Flex align="center" justify="space-between">
              <IconButton icon={<FaRegComment />} aria-label="Comment" size="sm" isRound="true" mr={2} />
              <IconButton icon={<FaRetweet />} aria-label="Repost" size="sm" isRound="true" mr={2} />
              <IconButton icon={<FaHeart />} aria-label="Like" size="sm" isRound="true" />
              <Text fontSize="sm">{whisper.likes} likes</Text>
            </Flex>
          </Box>
        ))}
      </Stack>
      <Flex mt={4} justify="space-between">
        <IconButton icon={<FaSearch />} isRound="true" />
        <IconButton icon={<FaEnvelope />} isRound="true" />
        <IconButton icon={<FaBell />} isRound="true" />
      </Flex>
    </Container>
  );
};

export default Index;

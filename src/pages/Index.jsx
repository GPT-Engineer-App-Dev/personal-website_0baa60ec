import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, Image, Button, Icon, Link, Divider, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} as="section" textAlign="center">
        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1607988795674-7aabddad6ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbGJlcnQlMjBFaW5zdGVpbiUyMFBvcnRyYWl0fGVufDB8fHx8MTcwOTczMzE5M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Albert Einstein" mb={4} />
          <Heading as="h1" size="xl">
            Albert Einstein
          </Heading>
          <Text color={textColor} fontSize="lg">
            Theoretical Physicist & Nobel Laureate
          </Text>
        </Box>

        <Text color={textColor} fontSize="md">
          Welcome to my personal website! I'm best known for developing the theory of relativity, one of the two pillars of modern physics. My work is also known for its influence on the philosophy of science. I'm not just a scientist; I'm a passionate advocate for peace and civil rights.
        </Text>

        <HStack spacing={4} justify="center">
          <Link href="https://twitter.com/AlbertEinstein" isExternal>
            <Button leftIcon={<Icon as={FaTwitter} />} colorScheme="twitter">
              Twitter
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/alberteinstein" isExternal>
            <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="linkedin">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/AlbertEinstein" isExternal>
            <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray">
              GitHub
            </Button>
          </Link>
          <Link href="mailto:albert.einstein@example.com" isExternal>
            <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="red">
              Email
            </Button>
          </Link>
        </HStack>
      </VStack>

      <Divider my={8} />

      <VStack spacing={8} as="section">
        <Heading as="h2" size="lg">
          About Me
        </Heading>
        <Text color={textColor} fontSize="md">
          I was born in Ulm, in the Kingdom of Württemberg in the German Empire, on 14 March 1879. My intellectual achievements and originality have made the word "Einstein" synonymous with "genius". In addition to the theory of relativity, I made significant contributions to the development of the theory of quantum mechanics. I received the 1921 Nobel Prize in Physics "for my services to Theoretical Physics, and especially for my discovery of the law of the photoelectric effect," a pivotal step in the development of quantum theory.
        </Text>
      </VStack>

      <Divider my={8} />

      <VStack spacing={8} as="section">
        <Heading as="h2" size="lg">
          My Work
        </Heading>
        <Text color={textColor} fontSize="md">
          My most famous equation is E = mc², which has been dubbed "the world's most famous equation". My discoveries have also led to the development of atomic energy. In my later years, I focused on unified field theory and continued to work on scientific research until my death in 1955.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;

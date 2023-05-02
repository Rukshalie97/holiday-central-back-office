import React, { useState } from "react";
import {
  CSSReset,
  ColorModeProvider,
  Flex,
  Heading,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Link,
  Button,
  Image,
  Spacer,
  Switch,
  useRadioGroup,
  useRadio,
} from "@chakra-ui/react";
import logo from "../images/logo.svg";

const LoginPage = () => {
  // Admin mode toggle
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <ColorModeProvider>
      <CSSReset />
      <Flex position="fixed" width="100%">
        <Spacer />
        <Box m={4}>
          <FormControl display="flex">
            <FormLabel color="white" htmlFor="admin-switch">
              Admin Mode
            </FormLabel>
            <Switch
              onChange={handleClick}
              id="admin-switch"
              colorScheme="blue.500"
              size="lg"
            />
          </FormControl>
        </Box>
      </Flex>
      <Flex
        width="full"
        minHeight="100vh"
        align="center"
        justifyContent="center"
        backgroundColor="gray.50"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url(https://images.unsplash.com/photo-1488646953014-85cb44e25828)"
        bgSize="cover"
      >
        <Box
          textAlign="center"
          borderWidth={1}
          width="full"
          maxWidth="500px"
          padding={5}
          borderRadius={8}
          boxShadow="lg"
          margin={4}
          backgroundColor="white"
        >
          <Image
            src={logo}
            maxWidth="200px"
            width="full"
            padding={2}
            objectFit="cover"
            mx="auto"
            mt={2}
          />
          <Heading fontSize="5xl" padding={2}>
            Login
          </Heading>
          <Text>Enter your credentials to access your account</Text>
          {toggle ? <MappedGroup /> : <></>}
          <FormControl mt={4}>
            <FormLabel mt={3}>Email address</FormLabel>
            <Input id="email" type="email" placeholder="Enter your email" />
            <FormLabel mt={3}>Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>

          <Stack mt={3} isInline justifyContent="space-between">
            <Box>
              <Checkbox colorScheme="blue.500">Remember me</Checkbox>
            </Box>
            <Box>
              <Link color="blue.500">Forgot Password?</Link>
            </Box>
          </Stack>
          <Button colorScheme="blue" mt={5} width="full" boxShadow="md">
            Sign In
          </Button>
        </Box>
      </Flex>
    </ColorModeProvider>
  );
};

// Custom Radio Button
const RadioCard = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" width="full">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "blue.500.600",
          color: "white",
          borderColor: "blue.500.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        p={2}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const MappedGroup = () => {
  const options = ["Admin", "Staff"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "role",
    defaultValue: "Admin",
    // onChange: console.log,
  });
  const group = getRootProps();

  return (
    <Stack {...group} justifyContent="center" direction="row" mt={5}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </Stack>
  );
};

export default LoginPage;

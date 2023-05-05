import React from "react";

import { 
  NativeBaseProvider, 
  Text, 
  Box,
  StatusBar,
  HStack,
  IconButton,
  AspectRatio,
  Stack,
  Heading,
  Center,
  Image,
  Pressable,
  Badge,
  Spacer,
  Flex,
  FormControl,
  Input,
  WarningOutlineIcon
} from "native-base";


function FormLogin(){
    return <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" defaultValue="12345" placeholder="password" />
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </Box>
      </Box>;
  };


export default function Login() {
  
  return (
    <>
        <FormLogin />
    </>
  );
}
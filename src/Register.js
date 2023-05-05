import React from "react";

import { 
  NativeBaseProvider, 
  Text, 
  Box,
  Button,
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
  Radio,
  FormControl,
  Input,
  WarningOutlineIcon
} from "native-base";

function JenisKelamin(){
    const [value, setValue] = React.useState("one");
    return <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
      setValue(nextValue);
    }}>
        <Radio value="L" my={1}>
          Laki-Laki
        </Radio>
        <Radio value="P" my={1}>
          Perempuan
        </Radio>
      </Radio.Group>;
  };
function FormRegister(){
    return <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>Nama Lengkap</FormControl.Label>
              <Input type="text" defaultValue="" placeholder="Nama Lengkap" />
            </Stack>
            <Stack mx="4">
              <FormControl.Label>No. Handphone</FormControl.Label>
              <Input type="text" defaultValue="" placeholder="Nama Lengkap" />
            </Stack>
            <Stack mx="4">
              <FormControl.Label>E-mail</FormControl.Label>
              <Input type="text" defaultValue="" placeholder="Nama Lengkap" />
            </Stack>
            <Stack mx="4">
              <FormControl.Label>Jenis Kelamin</FormControl.Label>
              <JenisKelamin />
            </Stack>
            <Stack mx="4">
              <FormControl.Label>Username</FormControl.Label>
              <Input type="text" defaultValue="username" placeholder="username" />
              <FormControl.HelperText>
                Must be atleast 6 characters.
              </FormControl.HelperText>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Atleast 6 characters are required.
              </FormControl.ErrorMessage>
            </Stack>
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
            <Stack mx="4">
            <Button size="sm" colorScheme="secondary">
                Register
            </Button>
            </Stack>
          </FormControl>
        </Box>
      </Box>;
  };


export default function Register() {
  
  return (
    <>
        <FormRegister />
    </>
  );
}
import React from "react";
// 1. import `NativeBaseProvider` component
import { 
  NativeBaseProvider, 
  Text, 
  Box,
  StatusBar,
  HStack,
  IconButton,
  Button, Checkbox
} from "native-base";


export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="flex-start" justifyContent="center">
        <Button size="xs">Klik Saya</Button>
        <Button size="sm">Klik Saya</Button>
        <Button size="md">Klik Saya</Button>
        <Button size="lg">Klik Saya</Button>

        <Checkbox value="one" my={2}> UX Research</Checkbox>
        <Checkbox value="two">Software Development</Checkbox>
      </Box>
    </NativeBaseProvider>
  );
}
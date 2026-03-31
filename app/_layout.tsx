import { Stack } from "expo-router";
import './global.css'

export default function RootLayout() {
  return(


      //close all header screen that have in (component (tabs))
  <Stack >
    <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}

    />
    <Stack.Screen
    name="(tabs/[id]"
    options={{
      headerShown: false,
    }}
    />



  </Stack>)
}

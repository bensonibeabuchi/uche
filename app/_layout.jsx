import { Stack } from "expo-router";
import "../global.css"
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return(
    <>
    <Stack initialRouteName='(tabs)'>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }}/>
      <Stack.Screen name="pages/Signup" options={{headerShown: false}}/>
      <Stack.Screen name="pages/Login" options={{headerShown: false,}}/>
    </Stack>
    <StatusBar style="dark"/>
    </>
  );
}

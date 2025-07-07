import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
          <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTintColor: '#333',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="login" options={{ title: 'Login Page' }} />
      <Stack.Screen name="register" options={{ title: 'Register Page' }} />
      <Stack.Screen name="verify" options={{ title: 'Verify Page' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile Page' }} />
       <Stack.Screen name="about" options={{ title: 'About You Page' }} />
       <Stack.Screen name="relationship" options={{ title: 'Relationship Page' }} />
       <Stack.Screen name="home" options={{ title: 'Home Page' }} />
    </Stack>
    </TamaguiProvider>
  );
}

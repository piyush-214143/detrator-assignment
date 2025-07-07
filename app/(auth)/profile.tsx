import { Stack, useRouter } from 'expo-router';
import {
  YStack,
  Text,
  Input,
  Button,
  Image,
} from 'tamagui';
import { useState } from 'react';

export default function ProfileScreen() {
  const [fullName, setFullName] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (fullName.trim() !== '') {
      console.log('Full Name:', fullName);
      router.push('/about');
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <YStack f={1} jc="center" ai="center" px="$4" bg="#39c2ac" space="$4">
        <Image
          source={require("../../assets/profile_pic.png")} // Replace with actual profile image
          width={120}
          height={120}
          borderRadius={60}
          resizeMode="cover"
          mt="$6"
        />

        <Text fontWeight="700" fontSize="$6" mt="$4" color="#000">
          What should we call you?
        </Text>

        <YStack width="100%" mt="$5" space="$3">
          <Text fontWeight="600" color="#000">Full Name</Text>
          <Input
            placeholder="Your Name"
            value={fullName}
            onChangeText={setFullName}
            borderWidth={2}
            borderRadius={10}
            bg="#fff"
            color="#000"
            px="$3"
          />

          <Button
            mt="$3"
            onPress={handleSubmit}
            bg="#333"
            color="#fff"
            fontWeight="700"
            borderRadius={10}
          >
            Lets Get To Know You
          </Button>
        </YStack>

        <Text mt="$4" fontSize="$2" color="#000">
          Your safety is our priority
        </Text>
      </YStack>
    </>
  );
}

// app/signup.tsx
import { Stack } from 'expo-router';
import {
  View,
  Text,
  Input,
  Button,
  YStack,
  Image,
} from 'tamagui';
import { useState } from 'react';

export default function register() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <YStack f={1} jc="center" ai="center" px="$4" bg="#39c2ac" space="$4">
        {/* Logo Text */}
        <Text fontWeight="700" fontSize="$6" color="#000">
          Welcome to okaBoka
        </Text>
        <Text color="#000" fontSize="$3" mb="$2">
          Connect with emotionally similar people
        </Text>

        {/* Center Logo Image */}
        <Image
          source={require('../../assets/signup_logo.png')} // change path as needed
          width={180}
          height={180}
          resizeMode="contain"
          mb="$2"
        />

        <Text fontWeight="600" color="#000" fontSize="$4" textAlign="center">
          Let’s start with your number your world begins here.
        </Text>

        {/* Phone Input */}
        <View width="100%" mt="$4">
          <Text mb="$2" fontWeight="600">Phone Number</Text>
          <Input
            placeholder="Enter phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            borderWidth={2}
            borderRadius={10}
            bg="#fff"
            color="#000"
            px="$3"
          />
        </View>

        {/* OR Divider */}
        <Text my="$2" fontWeight="600">or</Text>

        {/* Whatsapp Button */}
        <Button
          bg="#fff"
          color="#000"
          borderRadius={10}
          fontWeight="600"
          width="100%"
        >
          Continue With Whatsapp
        </Button>

        {/* Send Code Button */}
        <Button
          mt="$3"
          bg="#333"
          color="#fff"
          fontWeight="700"
          borderRadius={10}
          width="100%"
        >
          Send Me The Code
        </Button>

        <Text mt="$2" fontSize="$2" color="#000">
          We'll never share your number
        </Text>
      </YStack>
    </>
  );
}

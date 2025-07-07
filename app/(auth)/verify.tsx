import { Stack, useRouter } from 'expo-router';
import {
  YStack,
  Text,
  Input,
  Button,
  XStack,
  Image,
} from 'tamagui';
import { useEffect, useRef, useState } from 'react';

export default function VerifyScreen() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [counter, setCounter] = useState(10);
  const router = useRouter();

  const inputs = useRef<(null | HTMLInputElement | any)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (counter <= 0) return;
    const timer = setTimeout(() => setCounter(counter - 1), 1000);
    return () => clearTimeout(timer);
  }, [counter]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text !== '' && index < 3) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

 const handleVerify = () => {
  const fullCode = otp.join('');
  if (fullCode.length === 4) {
    router.push('/profile');
  }
};

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <YStack f={1} jc="center" ai="center" px="$4" bg="#39c2ac" space="$4">
        <Image
          source={require('../../assets/signup_logo.png')}
          width={180}
          height={180}
          resizeMode="contain"
          mt="$4"
        />

        <Text fontWeight="700" fontSize="$6" color="#000">
          Verify your number
        </Text>
        <Text color="#000" fontSize="$3" mb="$3">
          We’ve sent a code to your phone
        </Text>

        <XStack space="$2" mb="$3">
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              maxLength={1}
              keyboardType="numeric"
              textAlign="center"
              width={50}
              height={60}
              fontSize="$5"
              borderWidth={2}
              borderRadius={10}
              bg="#fff"
              color="#000"
            />
          ))}
        </XStack>

        <Button
          onPress={handleVerify}
          bg="#333"
          color="#fff"
          fontWeight="700"
          borderRadius={10}
          px="$6"
          mt="$2"
        >
          Verify
        </Button>

        <Text mt="$4" fontSize="$3" color="#000">
          Didn’t receive code?{' '}
          <Text
            fontWeight="700"
            color={counter === 0 ? '#000' : '#aaa'}
            onPress={() => counter === 0 && setCounter(10)}
          >
            Resend
          </Text>
        </Text>
        <Text fontSize="$2" color="#000">
          You can request a new code in {counter} seconds
        </Text>
      </YStack>
    </>
  );
}

import { Stack, useRouter } from 'expo-router';
import {
  YStack,
  XStack,
  Text,
  Input,
  Button,
  Checkbox,
  Label,
  Image,
} from 'tamagui';
import { useState } from 'react';

export default function AboutYouScreen() {
  const router = useRouter();

  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other' | null>(null);
  const [customGender, setCustomGender] = useState('');
  const [location, setLocation] = useState('');
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const handleContinue = () => {
    // Validate input and go to next screen
    router.push('/relationship');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <YStack f={1} jc="center" ai="center" px="$4" bg="#39c2ac" space="$4" pt="$6">
        {/* Back Arrow (optional) */}
        <XStack w="100%" mb="$2" pl="$2">
          <Text fontSize="$5">←</Text>
        </XStack>

        <Text fontWeight="700" fontSize="$6" color="#000" textAlign="center">
          A little about you so we match better
        </Text>

        {/* Date of Birth */}
        <YStack w="100%" space="$2" mt="$4">
          <Text fontWeight="600" color="#000">Date of Birth</Text>
          <XStack space="$2">
            <Input
              placeholder="DD"
              value={dob.day}
              onChangeText={(text) => setDob({ ...dob, day: text })}
              keyboardType="numeric"
              borderWidth={2}
              borderRadius={10}
              bg="#fff"
              color="#000"
              flex={1}
            />
            <Input
              placeholder="MM"
              value={dob.month}
              onChangeText={(text) => setDob({ ...dob, month: text })}
              keyboardType="numeric"
              borderWidth={2}
              borderRadius={10}
              bg="#fff"
              color="#000"
              flex={1}
            />
            <Input
              placeholder="YYYY"
              value={dob.year}
              onChangeText={(text) => setDob({ ...dob, year: text })}
              keyboardType="numeric"
              borderWidth={2}
              borderRadius={10}
              bg="#fff"
              color="#000"
              flex={1}
            />
          </XStack>
        </YStack>

        {/* Gender */}
        <YStack w="100%" space="$2" mt="$4">
          <Text fontWeight="600" color="#000">Gender</Text>
          <XStack space="$2">
            {['Male', 'Female', 'Other'].map((label) => (
              <Button
                key={label}
                onPress={() => setGender(label as any)}
                bg={gender === label ? '#333' : '#fff'}
                color={gender === label ? '#fff' : '#000'}
                borderRadius={10}
                fontWeight="600"
                px="$4"
                flex={1}
              >
                {label}
              </Button>
            ))}
          </XStack>
          {gender === 'Other' && (
            <Input
              placeholder="Write Here"
              value={customGender}
              onChangeText={setCustomGender}
              borderWidth={2}
              borderRadius={10}
              bg="#fff"
              color="#000"
              mt="$2"
            />
          )}
        </YStack>

        {/* Location */}
        <YStack w="100%" space="$2" mt="$4">
          <Text fontWeight="600" color="#000">
            Location <Text fontSize="$2">(City, Country)</Text>
          </Text>
          <Input
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
            editable={!useCurrentLocation}
            borderWidth={2}
            borderRadius={10}
            bg="#fff"
            color="#000"
          />

          <XStack ai="center" space="$2">
            <Checkbox
              checked={useCurrentLocation}
              onCheckedChange={(checked) => setUseCurrentLocation(checked === true)}
            />
            <Text>Use current location</Text>
          </XStack>
        </YStack>

        {/* Continue Button */}
        <Button
          mt="$5"
          onPress={handleContinue}
          bg="#333"
          color="#fff"
          fontWeight="700"
          borderRadius={10}
          px="$6"
        >
          Continue
        </Button>

        <Text mt="$2" fontSize="$2" color="#000">
          Who are you open to connecting with?
        </Text>
      </YStack>
    </>
  );
}

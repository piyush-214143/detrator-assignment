import { Stack, useRouter } from 'expo-router';
import {
  YStack,
  XStack,
  Text,
  Input,
  Button,
  Select,
  Adapt,
  Sheet,
} from 'tamagui';
import { useState } from 'react';

export default function RelationshipScreen() {
  const router = useRouter();

  const [interestedIn, setInterestedIn] = useState<string | null>(null);
  const [relationship, setRelationship] = useState<string | null>(null);
  const [profession, setProfession] = useState<string | null>(null);

  // Conditional fields
  const [schoolName, setSchoolName] = useState('');
  const [studyYear, setStudyYear] = useState('');
  const [freelanceWork, setFreelanceWork] = useState('');

  const handleContinue = () => {
    // save state or go forward
    router.push('/home');
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <YStack f={1} px="$4" pt="$6" bg="#39c2ac" space="$4">
        <XStack mb="$2">
          <Text fontSize="$5">←</Text>
        </XStack>

        <Text fontWeight="700" fontSize="$6" color="#000">
          Let us understand who you're{'\n'}looking for and where you're at.
        </Text>

        {/* Interested In */}
        <YStack space="$2">
          <Text fontWeight="600" color="#000">
            Interested In <Text fontSize="$2">(Who’s energy do you connect with?)</Text>
          </Text>
          <XStack space="$2" flexWrap="wrap">
            {['Male', 'Female', 'Other'].map((item) => (
              <Button
                key={item}
                bg={interestedIn === item ? '#333' : '#fff'}
                color={interestedIn === item ? '#fff' : '#000'}
                borderRadius={10}
                fontWeight="600"
                onPress={() => setInterestedIn(item)}
                px="$4"
              >
                {item}
              </Button>
            ))}
          </XStack>
        </YStack>

        {/* Relationship Status */}
        <YStack space="$2">
          <Text fontWeight="600" color="#000">Relationship Status</Text>
          <XStack space="$2" flexWrap="wrap">
            {['Single', 'In A Relationship', 'Prefer Not To Say'].map((item) => (
              <Button
                key={item}
                bg={relationship === item ? '#333' : '#fff'}
                color={relationship === item ? '#fff' : '#000'}
                borderRadius={10}
                fontWeight="600"
                onPress={() => setRelationship(item)}
                px="$4"
              >
                {item}
              </Button>
            ))}
          </XStack>
        </YStack>

        {/* Are You */}
        <YStack space="$2">
          <Text fontWeight="600" color="#000">Are You</Text>
          <XStack space="$2" flexWrap="wrap">
            {['Student', 'Employee', 'Freelancer', 'Other'].map((item) => (
              <Button
                key={item}
                bg={profession === item ? '#333' : '#fff'}
                color={profession === item ? '#fff' : '#000'}
                borderRadius={10}
                fontWeight="600"
                onPress={() => setProfession(item)}
                px="$4"
              >
                {item}
              </Button>
            ))}
          </XStack>
        </YStack>

        {/* Conditional Inputs */}
        {profession === 'Student' && (
          <>
            <YStack space="$2" mt="$3">
              <Text fontWeight="600" color="#000">What’s your School/college name?</Text>
              <Input
                placeholder="Your answer"
                value={schoolName}
                onChangeText={setSchoolName}
                borderWidth={2}
                borderRadius={10}
                bg="#fff"
                color="#000"
              />
            </YStack>

            <YStack space="$2" mt="$3">
              <Text fontWeight="600" color="#000">Currently studying in?</Text>
              <Select value={studyYear} onValueChange={setStudyYear}>
                <Select.Trigger bg="#fff" borderWidth={2} borderRadius={10} color="#000" />
                <Adapt when="sm" platform="touch">
                  <Sheet>
                    <Sheet.Frame>
                      <Sheet.ScrollView>
                        <Select.Content />
                      </Sheet.ScrollView>
                    </Sheet.Frame>
                  </Sheet>
                </Adapt>
                <Select.Content>
                  <Select.Item index={0} value="1st Year">1st Year</Select.Item>
                  <Select.Item index={0} value="1st Year">1st Year</Select.Item>
                  <Select.Item index={1} value="2nd Year">2nd Year</Select.Item>
                  <Select.Item index={2} value="3rd Year">3rd Year</Select.Item>
                  <Select.Item index={3} value="Final Year">Final Year</Select.Item>
                </Select.Content>
              </Select>
            </YStack>
          </>
        )}

        {profession === 'Freelancer' && (
          <YStack space="$2" mt="$3">
            <Text fontWeight="600" color="#000">What kind of work do you do?</Text>
            <Input
              placeholder="e.g., Graphic Design, Writing"
              value={freelanceWork}
              onChangeText={setFreelanceWork}
              borderWidth={2}
              borderRadius={10}
              bg="#fff"
              color="#000"
            />
          </YStack>
        )}

        {/* Continue Button */}
        <Button
          mt="$5"
          bg="#333"
          color="#fff"
          fontWeight="700"
          borderRadius={10}
          onPress={handleContinue}
        >
          Continue
        </Button>

        <Text mt="$2" fontSize="$2" color="#000">
          Your very first vibe
        </Text>

        <Button
          mt="$1"
          variant="outlined"
          color="#000"
          backgroundColor="transparent"
        //   onPress={() => router.push('/nextStep')}
        >
          Skip For Now
        </Button>
      </YStack>
    </>
  );
}

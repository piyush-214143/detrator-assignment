import { Stack } from 'expo-router'
import {
  YStack,
  XStack,
  Text,
  Image,
  ScrollView,
  Button,
} from 'tamagui'
import { useState } from 'react'

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😘', label: 'Romantic' },
  { emoji: '😢', label: 'Sad', count: '1.5k' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😆', label: 'Excited' },
]

const mockData = [
  {
    date: 'July 07, 2025',
    location: 'Metro Manila, Philippines',
    emoji: '😊',
    caption: 'You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city.',
    images: [
      'https://picsum.photos/id/1011/300',
      'https://picsum.photos/id/1012/300',
      'https://picsum.photos/id/1013/300',
      'https://picsum.photos/id/1015/300',
      'https://picsum.photos/id/1016/300',
      'https://picsum.photos/id/1018/300',
      'https://picsum.photos/id/1020/300',
    ],
  },
  {
    date: 'July 27, 2025',
    location: 'Bataan, Philippines',
    emoji: '🏅',
    caption: 'You spent time by the shore — embraced by salty breeze, golden sand, and the gentle heartbeat of the sea.',
    images: [
      'https://picsum.photos/id/1021/300',
      'https://picsum.photos/id/1022/300',
      'https://picsum.photos/id/1023/300',
      'https://picsum.photos/id/1024/300',
      'https://picsum.photos/id/1025/300',
      'https://picsum.photos/id/1026/300',
      'https://picsum.photos/id/1027/300',
      'https://picsum.photos/id/1028/300',
    ],
  },
]

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView bg="#E9FDF7" px="$4" py="$5">
        {/* Header */}
        <YStack space="$3" ai="center">
          <Text fontSize="$7" fontWeight="700" color="#000">
            How I’m Feeling Right Now
          </Text>

          <XStack jc="space-between" fw="wrap" w="100%" gap="$2">
            {moods.map((mood, index) => (
              <YStack key={index} ai="center" gap="$1" w="20%">
                <Text fontSize="$9">{mood.emoji}</Text>
                <Text fontSize="$2">{mood.label}</Text>
                {mood.count && <Text fontSize="$1">{mood.count}</Text>}
              </YStack>
            ))}
          </XStack>
        </YStack>


        <YStack mt="$6" space="$6">
          {mockData.map((moment, idx) => (
            <MomentCard key={idx} moment={moment} />
          ))}
        </YStack>
      </ScrollView>
    </>
  )
}

type Moment = {
  date: string
  location: string
  emoji: string
  caption: string
  images: string[]
}

function MomentCard({ moment }: { moment: Moment }) {
  const [expanded, setExpanded] = useState(false)

  const imagesToShow = expanded ? moment.images : moment.images.slice(0, 6)

  return (
    <YStack bg="#fff" p="$3" borderRadius="$4" space="$2" shadowColor="#000" shadowOpacity={0.1}>
      <XStack jc="space-between" ai="center">
        <Text fontSize="$4" fontWeight="700">{moment.date}</Text>
        <Text fontSize="$5">{moment.emoji}</Text>
      </XStack>

      <Text fontSize="$2" color="gray">{moment.location}</Text>
      <Text>{moment.caption}</Text>

      {/* Images Grid */}
      <XStack fw="wrap" gap="$2">
        {imagesToShow.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            width="30%"
            height={90}
            borderRadius="$2"
          />
        ))}
      </XStack>

      {/* Show More / Less */}
      {moment.images.length > 6 && (
        <Button
          onPress={() => setExpanded(!expanded)}
          mt="$2"
          size="$2"
          bg="#39c2ac"
          color="#fff"
        >
          {expanded ? 'Show Less' : 'See More'}
        </Button>
      )}
    </YStack>
  )
}

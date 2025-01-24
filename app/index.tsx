import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-around items-center">
      <Text className="text-5xl font-extrabold text-[#2E364B]">
        Pubwe <Text className="opacity-50">Lyric Games</Text>
      </Text>

      <View className="self-stretch gap-4">
        <Link
          href="./cryptogram"
          asChild
          className="bg-[#87A6BB] p-6 rounded-3xl self-stretch items-center"
        >
          <Pressable>
            <Text className="text-2xl text-white font-bold">🔎 Cryptogram</Text>
          </Pressable>
        </Link>

        <Link
          href="./mystery"
          asChild
          className="bg-[#144E52] p-6 rounded-3xl self-stretch items-center"
        >
          <Pressable>
            <Text className="text-2xl text-white font-bold">
              🤔 Mystery Lyrics
            </Text>
          </Pressable>
        </Link>

        <Link
          href="./daily"
          asChild
          className="bg-[#B99257] p-6 rounded-3xl self-stretch items-center"
        >
          <Pressable>
            <Text className="text-2xl text-white font-bold">
              🗓️ Lyric of the Day
            </Text>
          </Pressable>
        </Link>
      </View>

      <Text className="text-small font-light text-[#2E364B] opacity-50">
        @mhawryluk, 2025
      </Text>
    </View>
  );
}

import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="bg-[#25292e] flex-1 items-center justify-center">
      <Text className="text-white font-bold text-xl p-4 text-center">Welcome to Expo with Javascript and Nativewind</Text>
      <Text className="font-bold text-white">Go to app/(tabs)/index.jsx to start editing </Text>
      <Link href="/about" className="m-4">
      <View className="bg-white rounded-xl">
        <Text className="text-black text-xs p-4">
          Click on this button to about screen
        </Text>
      </View>
      </Link>
      <Text className="text-xs text-white">Developed by Benson</Text>
    </View>
  );
}

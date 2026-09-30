import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-7xl font-sans-extrabold text-black-500">Home</Text>

      <Link href="/(auth)/signin" className="font-sans-semibold mt-4">
        Sign in
      </Link>
      <Link href="/(auth)/signup" className="font-sans-semibold mt-4">
        Sign Up
      </Link>
    </SafeAreaView>
  );
}

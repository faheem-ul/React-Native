import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/(auth)/signin">Sign in</Link>
      <Link href="/(auth)/signup">Sign Up</Link>
      <Link href="/(tabs)/subscriptions">Subscriptions</Link>
      <Link
        href={{
          pathname: "/subscriptiondetails/[id]",
          params: { id: "claude" },
        }}
      >
        Subscription of claude
      </Link>
    </View>
  );
}

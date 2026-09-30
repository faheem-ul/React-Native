import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
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
    </SafeAreaView>
  );
}

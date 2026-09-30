import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Subscriptions = () => {
  return (
    <SafeAreaView className="w-full bg-background flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Subscriptions Page</Text>
      <Link
        className="mt-3"
        href={{
          pathname: "/subscriptiondetails/[id]",
          params: { id: "claude" },
        }}
      >
        <Text className="text-blue-500">Subscription of claude</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Subscriptions;

import { Link } from "expo-router";
import { Text, View } from "react-native";

const Subscriptions = () => {
  return (
    <View className="flex-1 items-center justify-center">
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
    </View>
  );
};

export default Subscriptions;

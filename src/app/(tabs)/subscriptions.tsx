import { Link } from "expo-router";
import { Text, View } from "react-native";

const Subscriptions = () => {
  return (
    <View>
      <Text>Subscriptions</Text>
      <Link
        href={{
          pathname: "/(tabs)/subscriptiondetails/[id]",
          params: { id: "claude" },
        }}
      >
        Subscription of claude
      </Link>
    </View>
  );
};

export default Subscriptions;

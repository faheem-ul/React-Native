import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription Details: {id as string}</Text>
      <Link href="/(tabs)/subscriptions">Back to Subscriptions</Link>
    </View>
  );
};

export default SubscriptionDetails;

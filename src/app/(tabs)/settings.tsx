import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

const Settings = () => {
  return (
    <SafeAreaView className="w-full bg-background flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Settings Page</Text>
    </SafeAreaView>
  );
};

export default Settings;

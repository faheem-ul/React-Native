import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>Sign In Page</Text>
      <Link href="/signup">Sign Up</Link>
    </View>
  );
};

export default SignIn;

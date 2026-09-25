import { Link } from "expo-router";
import { Text, View } from "react-native";

const Signup = () => {
  return (
    <View>
      <Text>Signup Page</Text>
      <Link href="/signin">Sign In</Link>
    </View>
  );
};

export default Signup;

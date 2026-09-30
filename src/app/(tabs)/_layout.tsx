import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { View } from "react-native";

import { tabs } from "@/constants/data";
import clsx from "clsx";

const TabsLayout = () => {
  const Tabicon = ({ focused, icon }: { focused: boolean; icon: any }) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image
            className="tabs-glyph"
            source={icon}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused }) => {
                return <Tabicon focused={focused} icon={tab.icon} />;
              },
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
